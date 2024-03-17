const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Review = require("../models/review.model");

module.exports = {

    createNewCourse : (req, res) => {
      Review.create(req.body)
        .then((newlyCreatedReview) => {
          res.json({ newlyCreatedReview });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    },

    deleteAnExistingReview : (req, res) => {
      Review.deleteOne({ _id: req.params.id })
        .then((result) => {
          res.json({ result });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    },
  
    findAllReviewBySpecificCourse: async(req, res) => {
        const { courseId } = req.params;

        try {
          const reviews = await Review.find({ courseId: courseId }).populate('studentId');
      
          if (!reviews) {
            return res.status(400).json({ message: "reviews not found" });
          }


         /* const arrayReview = reviews.forEach((review) => {
            const student = review.studentId;
            console.log(`Review: ${review.reviewText}, Rating: ${review.rating}`);
            console.log(`Student: ${student.name}, ${student.department}`);
          });*/
      
          res.status(201).json({
            reviews: reviews,
          });

          
        } catch (err) {
          console.error(err);
          res.status(400).json({ message: "An error occurred" });
        }
    },
   
};
