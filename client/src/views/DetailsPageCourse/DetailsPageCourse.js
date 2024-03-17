import React, { useEffect, useState } from 'react';
import './DetailsPageCourse.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CreateBlocReviews from '../../components/CreateBlocReviews/CreateBlocReviews';
import ShowBlocReviews from '../../components/ShowBlocReviews/ShowBlocReviews';


const DetailsPageCourse = () => {

  const userObjs = JSON.parse(localStorage.getItem('USER_OBJ')) || {};
  const userObjsRole = userObjs.role || 'default';
  const userObjsId = userObjs._id || 'default';
  
  console.log("userObjRole+++++++++", userObjsRole);
  console.log("userObjsId+++++++++", userObjsId);



  const [OneCourse, setOneCourse] = useState({});
  const [arrReviews, setArrReviews] = useState([]);
  const {id} = useParams(); 
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false); 
  const [loadedArrReview, setLoadedArrReview] = useState(false); 

  
  useEffect(() => {
    axios.get("http://localhost:8000/api/courses/" + id,{withCredentials: true})
        .then( res => {
          console.log("u++++++++++",res.data.oneSingleCourse);
          setOneCourse(res.data.oneSingleCourse);
          setLoaded(true); 
          console.log("y++++++++++",OneCourse.students);
        })
        .catch( err => console.log(err) );
  }, [id]); 


  useEffect(() => {
    axios.get("http://localhost:8000/api/reviews/course/" + id,{withCredentials: true})
        .then( res => {
          console.log("reviewsby course++++++++++",res.data.reviews);
          setArrReviews(res.data.reviews);
          setLoaded(true); 
          //console.log("y++++++++++",OneCourse.students);
        })
        .catch( err => console.log(err) );
  }, [loadedArrReview]); 

   // delete One specific review
   const deleteReview = (reviewId) => {
    axios
      .delete("http://localhost:8000/api/reviews/" + reviewId, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.result);
        setArrReviews(arrReviews.filter((review) => review._id !== reviewId));
      })
      .catch((err) => console.log(err));
  };


  const handleReviewCreated = (val) => {
    setLoadedArrReview(val); // Update arrReviews with the new review
  };

   

   



 
  return(
    <div className="DetailsPageCourse">
      <div className="page-top">
        <h1>Details Courses</h1>
        {
            userObjsRole === 'admin' ? (
                <Link to="/admin-dashboard">
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>back to Home
                </Link>
            ) : userObjsRole === 'student' ? (
                <Link to="/student-dashboard">
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>back to Home
                </Link>
            ) : (
                <Link to="/instructor-dashboard">
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>back to Home
                </Link>
            )
        }
      </div>   
      <div className="page-content">
        {/* <div className="details-img">
          <img src="/assets/images/OIG1.jfif" alt="" />
        </div>
        <div className="fields">
            <p><span className='infos'>Level:</span>{OneCourse.level}</p>
            <p><span className='infos'>field:</span>{OneCourse.field}</p>
            <p><span className='infos'>description:</span> {OneCourse.description}</p>
            <p><span className='infos'>dayOfWeek:</span> {OneCourse.dayOfWeek}</p>
            <p><span className='infos'>type Of Course:</span> {OneCourse.typeOfCourse}</p>
            <p>
              <span className='infos'>link Meeting:</span>
              <a href={OneCourse.linkMeeting} target='_blank'>{OneCourse.linkMeeting}</a>
            </p>
            <p>
              <span className='infos'>documents Link:</span>
              <a href={OneCourse.documentsLink} target='_blank'>{OneCourse.documentsLink}</a>
            </p>
            <p><span className='infos'>start Time:</span> {OneCourse.startTime}</p>
            <p><span className='infos'>end Time:</span> {OneCourse.endTime}</p>
            <p><span className='infos'>duration:</span> {OneCourse.duration} minutes</p>
            <p><span className='infos'>status:</span> {OneCourse.status} minutes</p>
        </div> */}

            <div class="img-container">
                 <div class="img">
                     <div className="img-img">
                       <img src="/assets/images/thumb-1.png" alt="" />
                     </div>
                     <div className="img-infos">
                        <p><span className='infos'><i class="fa-solid fa-user-graduate"></i></span>{OneCourse.level}</p>
                        <p><span className='infos'><i class="fa-solid fa-book-open"></i></span> {OneCourse.typeOfCourse}</p>
                        <p>
                          <span className='infos'><i class="fa-solid fa-users"></i></span>
                          <a href={OneCourse.linkMeeting} target='_blank'>{OneCourse.linkMeeting}</a>
                        </p>
                        <p>
                          <span className='infos'><i class="fa-solid fa-file-pdf"></i></span>
                          <a href={OneCourse.documentsLink} target='_blank'>{OneCourse.documentsLink}</a>
                        </p>
                        <p><span className='infos'><i class="fa-regular fa-clock"></i></span> {OneCourse.startTime}</p>
                     </div>
                     <div className="img-infos-2">
                        <p><span className='infos'><i class="fa-solid fa-clock-rotate-left"></i></span> {OneCourse.endTime}</p>
                        <p><span className='infos'><i class="fa-solid fa-hourglass-start"></i></span> {OneCourse.duration} minutes</p>
                     </div>
                 </div>
                 <h3 class="title">complete HTML tutorial (part 01)</h3>
                 <div class="info">
                    <p class="date"><i class="fas fa-calendar"></i><span>22-10-2022</span></p>
                 </div>
                 <div class="tutor">
                     <div className="bloc-tutor">
                      <img src="/assets/images/pic-1.jpg" alt="" />
                     </div>
                    <div>
                       <h3>john deo</h3>
                       <span>instructor</span>
                    </div>
                 </div>
                 <p class="description">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
                 </p>
             </div>
        { userObjsRole === 'student' ?
         <CreateBlocReviews loadedArrReview={loadedArrReview} handleReviewCreated={handleReviewCreated} idCourse={id} userObjsId={userObjsId} />
        : null
        }
        <ShowBlocReviews arrReviews={arrReviews} loaded={loaded} deleteReview={deleteReview} />
      </div>
    </div>
  );
};


export default DetailsPageCourse;
