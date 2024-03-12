require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");

// USE V2
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//connect to db
const connectDB = require("./db/connect");

app.use(fileUpload({ useTempFiles: true }));

//routers
const authRouter = require("./routes/userRoute/authRouter");
const incidentPostRouter = require("./routes/userRoute/incidentRoute");
const emergencyPostRouter = require("./routes/userRoute/emergencyResponseRoute");
const accidentPostRouter = require("./routes/userRoute/accidentRoute");
const healthPostRouter = require("./routes/userRoute/healthRouter");
const securityPostRouter = require("./routes/userRoute/securityRoute");
const environmentPostRouter = require("./routes/userRoute/environmentRouter");
const productPostRouter = require("./routes/userRoute/productRouter");
const servicePostRouter = require("./routes/userRoute/serviceComplaints");
const historyRouter = require("./routes/userRoute/historyRouter");
const profileRouter = require("./routes/userRoute/userRouter");
const adminEnvironmentRouter = require("./routes/adminRoute/environmentRoute");
const adminAccidentRouter = require("./routes/adminRoute/accidentRoute");
const adminEmergencyRouter = require("./routes/adminRoute/emergencyRoute");
const adminHealthRouter = require("./routes/adminRoute/healthRoute");
const adminIncidentRouter = require("./routes/adminRoute/incidentRoute");
const adminProductRouter = require("./routes/adminRoute/productRoute");
const adminComplaintsRouter = require("./routes/adminRoute/serviceComplaints");
const adminSecurityRouter = require("./routes/adminRoute/securityRoute");
const adminProfileRoute = require("./routes/adminRoute/userProfile");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// app.use(helmet());
app.use(cors());
// app.use(xss());

app.get("/", (req, res) => {
  res.send(
    '<h1>Siara App</h1><a href="https://documenter.getpostman.com/view/23195379/2s935it5qy">Documentation</a>'
  );
});

// routes
app.use("/api/v1", authRouter);
app.use("/api/v1", adminProfileRoute);
app.use("/api/v1", adminSecurityRouter);
app.use("/api/v1", adminComplaintsRouter);
app.use("/api/v1", adminProductRouter);
app.use("/api/v1", adminIncidentRouter);
app.use("/api/v1", adminHealthRouter);
app.use("/api/v1", adminEmergencyRouter);
app.use("/api/v1", adminEnvironmentRouter);
app.use("/api/v1", adminAccidentRouter);
app.use("/api/v1", incidentPostRouter);
app.use("/api/v1", emergencyPostRouter);
app.use("/api/v1", accidentPostRouter);
app.use("/api/v1", healthPostRouter);
app.use("/api/v1", securityPostRouter);
app.use("/api/v1", environmentPostRouter);
app.use("/api/v1", productPostRouter);
app.use("/api/v1", servicePostRouter);
app.use("/api/v1", historyRouter);
app.use("/api/v1", profileRouter);

const port = process.env.PORT || 5000;

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
