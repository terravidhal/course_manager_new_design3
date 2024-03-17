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

  const {arrReviews, loaded, deleteReview, userObjsId} = props;

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

  const getRandomNumberBetween1And9 = () => {
    // Générer un nombre aléatoire entre 0 et 0.999999...
    const randomFloat = Math.random();
  
    // Multiplier par 9 pour obtenir un nombre entre 0 et 9
    const randomNumber = randomFloat * 9;
  
    // Arrondir au nombre entier le plus proche
    const roundedNumber = Math.floor(randomNumber) + 1;
  
    // Renvoyer le nombre aléatoire entre 1 et 9
    return roundedNumber;
  }

  const randomNumber = getRandomNumberBetween1And9();
  const imageURL = `<img src="/assets/images/pic-${randomNumber}.jpg" alt="" />`;


 
  return(
    <div className="ShowBlocReviews">
        <div className="page-contents">
             { arrReviews.map((OneReview,index) => {
            return(
              <>
                 {/*<div className="fields"  key={index}>
                    <div className="details-img">
                       <img src="/assets/images/OIG1.jfif" alt="" /> 
                    </div>
                   <p><span className='infos'>name student:</span>{OneReview.studentId.name}</p>
                   <p><span className='infos'>Level student:</span>{OneReview.studentId.fieldOfStudy}</p>
                   <p><span className='infos'>comment::</span>{OneReview.reviewText}</p>
                   <p><span className='infos'>date::</span>{handleChange(OneReview.createdAt)}</p>
                   <p><span className='infos'>rating:</span> {OneReview.rating}</p>
                   <button onClick={() => deleteReview(OneReview._id)}>Delete comment</button> 
                </div>*/}
                    <div class="box-container"  key={index}>
                       <div class="box">
                           <div class="user">
                               {/* <img src="/assets/images/pic-{getRandomNumberBetween1And9()}.jpg" alt="" /> */}
                               <img src="/assets/images/pic-1.jpg" alt="" />
                               <div>
                                  <h3>{OneReview.studentId.name}</h3>
                                  <span>{handleChange(OneReview.createdAt)}</span>
                               </div>
                           </div>
                           <div class="comment-box">{OneReview.reviewText}</div>
                           {userObjsId === OneReview.studentId._id ?
                              <form action="" class="flex-btn">
                                 <button name="delete_comment" class="inline-delete-btn" onClick={() => deleteReview(OneReview._id)}>Delete comment</button> 
                              </form>
                              : null
                           }
                       </div>
                    </div>
              </>
            );
          }) }
        </div>
    </div>
  );
};


export default ShowBlocReviews;
