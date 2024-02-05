import express from "express";
// import CustomerController from "./controllers/CustomerController";
// import VehicleController from "./controllers/VehicleController";
// import RevisionController from "./controllers/RevisionController";

const app = express();
app.use(express.json());

// app.use("/customer", CustomerController);
// app.use("/vehicle", VehicleController);
// app.use("/revision", RevisionController);

export default app;
