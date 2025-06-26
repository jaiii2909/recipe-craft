const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipe,
  createRecipe
} = require('../controllers/recipeController');

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);

module.exports = router;
