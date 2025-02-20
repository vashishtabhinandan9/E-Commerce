import Razorpay from "razorpay";
const razorpay = new Razorpay({
    key_id: process.env.razorpay_key_id,
    key_secret: process.env.razorpay_secret_key,
});

export const razorpayCreateOrder = async (req, res) => {
    try {
        console.log("abhii99");
        const amount = req.body.amount * 100;  // Amount in paise (multiply by 100)
        const orderOptions = {
            amount,
            currency: "INR",
            receipt: "receipt#1",  // Unique receipt ID
        };
        const order = await razorpay.orders.create(orderOptions);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Error creating order" });
    }
};

export const razorpayPayment = async (req, res) => {
    res.render("payment", { key_id: process.env.razorpay_key_id });
};
