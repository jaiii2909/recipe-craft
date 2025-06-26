const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ error: 'Recipe not found' });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions } = req.body;
    const recipe = new Recipe({ title, description, ingredients, instructions });
    await recipe.save();
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ error: 'Create failed' });
  }
};
