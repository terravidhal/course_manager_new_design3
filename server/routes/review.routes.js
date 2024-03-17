const {
    createNewCourse,
    deleteAnExistingReview,
    findAllReviewBySpecificCourse,
  } = require("../controllers/review.controller");
  
  const { authenticate } = require('../config/jwt.config');

  const { checkPermissions } = require('../config/jwt.config');

  module.exports = app => {
      app.post('/api/reviews',authenticate, checkPermissions('student'), createNewCourse);
      app.get('/api/reviews/course/:courseId',authenticate, checkPermissions('admin','student','insructor'), findAllReviewBySpecificCourse);
      app.delete('/api/reviews/:id',authenticate,checkPermissions('admin','instructor','student'),  deleteAnExistingReview);
  }
  
  
  
  
  
  