const express = require("express");
const router = express.Router();
const restaurant = require("../Controllers/RestaurantsController");
const location = require("../Controllers/LocationsController");
const meal_type = require("../Controllers/MealTypesController");
const menu_items = require("../Controllers/MenuItemsController");
const users = require("../Controllers/UsersController");
const payment = require("../Controllers/PaymentControlller");
//restaurant
router.get("/api", restaurant.home);
router.get("/api/get-restaurant-details", restaurant.getRestaurantList);
router.get(
  "/api/get-restaurant-by-location-id/:loc_id",
  restaurant.getRestaurantListByLocId
);
router.get(
  "/api/get-restaurant-details-by-id/:id",
  restaurant.getRestaurantDetailsById
);
router.post("/api/filter", restaurant.filterData);

//location
router.get("/api/get-location", location.getLocationList);

//mealtype
router.get("/api/get-meal-types", meal_type.getMealTypeList);

// menuItems
router.get(
  "/api/get-menu-item-list-by-restaurant-id/:res_id",
  menu_items.getMenuItemListByRestID
);
router.post("/api/login", users.login);
router.post("/api/sign-up", users.signUp);

router.post("/api/payment/gen-order", payment.getOrderId);
router.post("/api/payment/verify", payment.verifyPayment);

module.exports = router;
