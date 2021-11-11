require("dotenv").config()
var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h1>Hi</h1>");
}
)
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
require("./routes/Checkuser")(app);
require("./routes/DichvuTour")(app);
require("./routes/TourLoaitour")(app);
require("./routes/TourNgaydi")(app);
require("./routes/TourDiadiem")(app);
require("./routes/Binhluan")(app);
require("./routes/Hoadon")(app);

app.use(function (err, req, res, next) {
    res.status(500).send(err)
})
app.listen(process.env.PORT || 666, () => { console.log("Chào mừng bạn đến với Backend"); })