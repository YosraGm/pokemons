const express = require("express");
const {
  createPokemon,
  getAllPokemons,
  getOnePokemon,
  updatePokemon,
  deleteOnePokemon,
} = require("../controllers/pokemon");
const api = express.Router();
api.route("/").get(getAllPokemons).post(createPokemon);
api
  .route("/:id")
  .get(getOnePokemon)
  .put(updatePokemon)
  .delete(deleteOnePokemon);
module.exports = api;
