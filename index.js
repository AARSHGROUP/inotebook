require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const path = require("path");
// 1
var cors = require("cors");
connectToMongo();
const app = express();
// Step-1 When i'll imPORT of this code in render.com than i'll give a PORT is this and go below Step-2
const PORT = process.env.PORT_HOST || 8080;
// const PORT = 5000;

// 2 this  code is "npm install cors for server use api"
app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Er. Avinash!");
});

// Step - 3 and i'll mention of this below two code here. Thats it.
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    `iNoteBook Backend is running on PORT at : http://localhost:${PORT}`
  );
});
