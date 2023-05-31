const express = require("express");
const cors = require("cors");
const { bgMagenta, bgGreen } = require("colors");
const app = express();
require("dotenv").config();
const jsonData = require("./poke.json");
require("colors");
const pokemon = require("./routes/pokemon");
const connectDBM = require("./dbinit");
connectDBM();
//middlewares
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use("/pokemons", pokemon);

// //routing

// app.get("/pokemon", (req, res) => {
//   res.json(jsonData);
// });

// app.get("/pokemon/:id", async (req, res) => {
//   const { id } = req.params;

//   const pokemon = jsonData.find((pokemon) => pokemon.id === Number(id));
//   if (pokemon) {
//     res.send(pokemon);
//   } else {
//     res.status(404).send("pokemon not found");
//   }
// });
// app.get("/pokemon/:id/:info", (req, res) => {
//   const { id, info } = req.params;
//   const pokemon = jsonData.find((pokemon) => pokemon.id === Number(id));
//   if (pokemon) {
//     let result;
//     switch (info) {
//       case "name":
//         result = pokemon.name.english;
//         break;
//       case "type":
//         result = pokemon.type;
//         break;
//       case "base":
//         result = pokemon.base;
//         break;
//       default:
//         return res.status(400).send("ivalid info parameter");
//     }
//     res.send(result);
//   } else {
//     res.status(404).send("pokemon not found");
//   }
// });

app.listen(PORT, (req, res) => {
  console.log(`port in runing on ${PORT}`);
});
