require("dotenv").config()
var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51JvilZB36PKJt46mB4ANXnXBOA2jsJ5zCef0EwHRjE07stlFLFP3qAybd28UziINm2mPADme1eZVh6qeav54BNs2009bnwcV67');

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h1>Hi</h1>");
}
)

app.post("/payment", async (req, res) => {
    const { email, price } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: 'accept_a_payment' },
        receipt_email: email
    });
    res.json({ 'client_secret': paymentIntent['client_secret'] })
})





require('./routes/dangnhap')(app);
require("./routes/user")(app);
require("./routes/Quocgia")(app);
require("./routes/Tour")(app);
require("./routes/Ngaydi")(app);
require("./routes/Loaitour")(app);
require("./routes/Diadiem")(app);
require("./routes/Anh")(app);
require("./routes/Dichvu")(app);
require("./routes/Role")(app);
require("./routes/UserRole")(app);
require("./routes/checkemail")(app);
require("./routes/Checkuser")(app);
require("./routes/DichvuTour")(app);
require("./routes/TourLoaitour")(app);
require("./routes/TourNgaydi")(app);
require("./routes/TourDiadiem")(app);
require("./routes/Binhluan")(app);
require("./routes/Hoadon")(app);
require("./routes/Tintuc")(app);
require("./routes/Tag")(app);
require("./routes/TintucTag")(app);
require("./routes/Thongbao")(app);
require("./routes/Hoadoncanhan")(app);


app.use(function (err, req, res, next) {
    res.status(500).send(err)
})
app.listen(process.env.PORT || 666, () => { console.log("Chào mừng bạn đến với Backend"); })