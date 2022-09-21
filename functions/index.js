const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret_key);

exports.stripeCheckout = functions.https.onCall(async (data, context) => {
  let { title, cost, image, time, idempotencyKey } = data;

  if (title === "Champion") {
    cost = cost * age;
  } else {
    cost = cost * time;
  }

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
      success_url: "/confirmation",
      cancel_url: "/payment",
    },
    {
      idempotencyKey: idempotencyKey,
    }
  );
  const res = session;
  functions.logger.log(res);
  return res;
});
