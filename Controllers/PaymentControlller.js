const Razorpay = require("razorpay");
var crypto = require("crypto");

module.exports.getOrderId = (request, response) => {
  let { amount } = request.body;
  var instance = new Razorpay({
    key_id: "rzp_test_psB1sKaswRGhf3",
    key_secret: "1rRfNynAk4O8yxZKbiID5VJB",
  });
  var options = {
    amount: Number(amount) * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      response.status(500).send({ status: false });
    } else {
      response.status(200).send({ status: true, order });
    }
  });
};

module.exports.verifyPayment = (request, response) => {
  // verify ordered
  let { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    request.body;
  let body = razorpay_order_id + "|" + razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", "1rRfNynAk4O8yxZKbiID5VJB")
    .update(body.toString())
    .digest("hex");

  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);

  var message = { status: false };
  if (expectedSignature === razorpay_signature) message = { status: true };
  response.send(message);
};
