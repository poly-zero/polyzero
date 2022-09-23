const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.key);

exports.stripeCheckout = functions.https.onCall(async (data, context) => {
  const {title, cost, image, idempotencyKey} = data;

  const session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "jpy",
              product_data: {
                name: title,
                images: [image],
              },
              unit_amount: cost,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/confirmation",
        cancel_url: "http://localhost:3000/payment",
      },
      {
        idempotencyKey: idempotencyKey,
      },
  );
  const res = session;
  functions.logger.log(res);
  return res;
});
