import express from "express";

const app = express();
app.use(express.json());

// app.use("/customer",);
// app.use("/vehicle",);
// app.use("/revision",);

export default app;
