const mongoose = require("mongoose");
const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: { english: String, japanese: String, chinese: String, french: String },
  type: [String],
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    "Sp. Attack": Number,
    "Sp. Defense": Number,
    Speed: Number,
  },
});
module.exports = mongoose.model("Pokemon", pokemonSchema);
