const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const blogRouter = require("./routes/blogRoute");
const uploadImgRouter = require("./routes/uploadRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use("/api/blog", blogRouter);
app.use("/api/image", uploadImgRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
});
