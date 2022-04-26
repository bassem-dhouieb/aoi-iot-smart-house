let express = require("express");
const app = express();
let port = process.env.PORT || 8080;
const stuffRoutes = require("./routes/stuff.js");
let mongoose =require("mongoose");

mongoose
  .connect(
    "mongodb+srv://bra:12345m@cluster0.hbknp.mongodb.net/HouseEtat?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée  !"));
 


  

app.use(express.json())// to use req.body;

app.use(function (req, res, next) { //cors 
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
  next();
});

app.use("/api",stuffRoutes);
app.listen(port, () => {
  console.log(`serveur listening on ${port}`); 
});
