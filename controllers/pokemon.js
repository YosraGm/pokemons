const Pokemon = require("../schema/Pokemon");

const getPokemontype = async (req, res) => {
  try {
    const { type } = req.query;
    console.log(type);

    const pokemons = Pokemon.find({
      type: {
        $elemMatch: {
          element: type,
        },
      },
    });
    res.status(200).json({ data: pokemons });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, base } = req.body;
    const pokemon = await Pokemon.create(id, { name, type, base });
    res
      .status(201)
      .json({ message: "Pokemon created successfully", data: pokemon });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    if (!pokemons.length) {
      res.status(200).json({ msg: " no pokemon found in database" });
    } else {
      res.status(200).json({ data: pokemons });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    if (pokemon) {
      return res.status(200).json({ data: pokemon });
    }
    res.status(404).json({ msg: "i don't know this pokemon" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const { name, type, base } = req.body;
    const { id } = req.params;
    const pokemon = await Pokemon.findByIdAndUpdate(id, { name, type, base });
    if (!pokemon) {
      res.status(404).json({ msg: "i don't know this pokemon" });
    } else res.status(200).json({ data: pokemon });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deleteOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findByIdAndDelete(id);
    if (!pokemon) {
      res.status(404).json({ msg: "i don't know this pokemon" });
    } else {
      res.status(200).json({ data: pokemon });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = {
  getPokemontype,
  createPokemon,
  getAllPokemons,
  getOnePokemon,
  updatePokemon,
  deleteOnePokemon,
};
