import express from "express";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use("/api/user", userRoutes);
app.use(express.json());

app.listen(5005, () => {
  try {
    console.log(`server started successfully at 5005`);
  } catch (err) {
    console.log(`Some error occured ` + err.message);
  }
});
