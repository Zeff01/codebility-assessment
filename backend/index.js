const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const todoRouter = require("./routes/routes")


//I've used this to send json but I've got error when trying to send request using forms
app.use(express.json());

//I've added search and found this as a solution for form-url encode
app.use(express.urlencoded({ extended: true }));

//I've used the router module I've made
app.use("/todo", todoRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
