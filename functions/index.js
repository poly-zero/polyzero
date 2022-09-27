const functions = require("firebase-functions");
const stripeDev = require("stripe")(functions.config().stripe.dev.key);
const stripeProd = require("stripe")(functions.config().stripe.prod.key);

exports.stripeCheckoutDev = functions.https.onCall(async (data, context) => {
  const {title, cost, image, idempotencyKey} = data;

  const session = await stripeDev.checkout.sessions.create(
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


exports.stripeCheckoutProd = functions.https.onCall(async (data, context) => {
  const {title, cost, image, idempotencyKey} = data;

  const session = await stripeProd.checkout.sessions.create(
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
        success_url: "https://polyzero.earth/confirmation",
        cancel_url: "https://polyzero.earth/payment",
      },
      {
        idempotencyKey: idempotencyKey,
      },
  );
  const res = session;
  functions.logger.log(res);
  return res;
});
