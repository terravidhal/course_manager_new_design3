import React, { useEffect, useState } from 'react';
import './ShowBlocReviews.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
//import axios from 'axios';



const ShowBlocReviews = (props) => {

//   const userObjs = JSON.parse(localStorage.getItem('USER_OBJ')) || {};
//   const userObjsRole = userObjs.role || 'default';
//   const userObjsId = userObjs._id || 'default';
  
//   console.log("userObjRole+++++++++", userObjsRole);
//   console.log("userObjsId+++++++++", userObjsId);



  //const [OneReview, setOneReview] = useState({})
  //const {id} = useParams(); 
  //const navigate = useNavigate();
  //const [loaded, setLoaded] = useState(false); 

  const {arrReviews, loaded, deleteReview} = props;

  const [dateString, setDateString] = useState(""); 

  const handleChange = (val)=>{
    //setDateString(val );
    
    // const [dateString, setDateString] = useState(""); 
    // const dateString = "2024-03-16T14:46:31.674Z";
     const date = new Date(val);
   
     const year = date.getFullYear();
     const month = date.getMonth() + 1; // Les mois sont indexés de 0
     const day = date.getDate()
   
     const formattedDate = `${day}-${month.toString().padStart(2, '0')}-${year}`; // 
     console.log(month); // Affiche "16-03-2024"  */
     console.log(formattedDate); // Affiche "16-03-2024"  */
     return formattedDate;
  }



 
  return(
    <div className="ShowBlocReviews">
      {/* <div className="page-top">
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
      </div>    */}
      
        
        <div className="page-contents">
             { arrReviews.map((OneReview,index) => {
            return(
              <>
                <div className="fields"  key={index}>
                    <div className="details-img">
                      {/* <img src="/assets/images/OIG1.jfif" alt="" /> */}
                    </div>
                   <p><span className='infos'>name student:</span>{OneReview.studentId.name}</p>
                   <p><span className='infos'>Level student:</span>{OneReview.studentId.fieldOfStudy}</p>
                   <p><span className='infos'>comment::</span>{OneReview.reviewText}</p>
                   <p><span className='infos'>date::</span>{handleChange(OneReview.createdAt)}</p>
                   <p><span className='infos'>rating:</span> {OneReview.rating}</p>
                   <button onClick={() => deleteReview(OneReview._id)}>Delete comment</button>
                </div>
              </>
            );
          }) }
        </div>

      
    </div>
  );
};


export default ShowBlocReviews;
