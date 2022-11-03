const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealTypeSchema = new Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});
const MealTypesModel = mongoose.model("mealtype", MealTypeSchema, "mealtypes");

module.exports = MealTypesModel;
