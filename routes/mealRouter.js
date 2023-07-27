// const express = require("express");
// const router = express.Router();
const router = require("express").Router();
const {
  getAMeal,
  getAllMeals,
  createMeal,
  deleteMeal,
  updateMeal,
  getAboutPage,
  getHomepage,
} = require("../controller/mealController");

//get all meals
// router.get("/api/meals", getAllMeals );

router.route("/api/meals").get(getAllMeals).post(createMeal);

router
  .route("/api/meals/:mealId")
  .get(getAMeal)
  .patch(updateMeal)
  .delete(deleteMeal);
//create a meal
// router.post("/api/meals", createMeal );

//get a single meal
// router.get("/api/meals/:mealId", getAMeal);

// update a meal
// find what we want to update - get sth || undefind
// provide what
// router.patch("/api/meals/:mealId", updateMeal);

// router.delete("/api/meals/:mealId", deleteMeal);
// middleware
// router.use((req, res, next) => {
//   console.log("request made");
//   next();
// });

// router.use((req, res, next) => {
//   const requestInfo = {
//     url: req.url,
//     method: req.method,
//     time: new Date().getDate(),
//   };
//   console.log(requestInfo);
//   next();
// });

// const auth = (req, res, next) => {
//   const authorized = false;
//   if (authorized) {
//     next();
//   } else {
//     res.send("you are not authorized");
//   }
// };

// router.get("/account", auth, (req, res) => {
//   res.status(200).send("Your Acoount Details");
// });

// router.get("/", getHomepage);

// router.get("/about", getAboutPage);

//redirecting
// router.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

module.exports = router;
