import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import './CreateBlocReviews.css';


const CreateBlocReviews = (props)=>{
  //  const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});
   // const navigate = useNavigate();

    const {idCourse, userObjsId, handleReviewCreated,loadedArrReview} = props; 
  
    const [user, setUser] = useState({
      courseId: idCourse,
      studentId: userObjsId,
      rating: 1,
      reviewText: "",
    });

  

   
  
    const handleChange = (e)=>{
      setUser({
        ...user,
        [e.target.name]: e.target.value 
      })
    }
  
    const create = e =>{
      e.preventDefault();
      axios.post('http://localhost:8000/api/reviews',
      user,
      {
        withCredentials: true,
      })
      .then(res =>{
        console.log(res.data);
        setUser({
          ...user, 
          reviewText: "",
        })
       // setConfirmReg("Thank you for registering, you can now log in");
        setErrs({});
        loadedArrReview === false ?  handleReviewCreated(true) : handleReviewCreated(false)
       // handleReviewCreated(true)
       // navigate("/admin-dashboard");
      })
      .catch((err)=>{
        console.log(err);
        console.log(err.response.data.errors);
        setErrs(err.response.data.errors);
      })
  };

 
  
  return(
    <div className="CreateBlocReviews">
      {/* <div className="page-top">
        <h2>create instuctor</h2>
        <Link to="/admin-dashboard">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>back to Home
        </Link>
      </div> */}
      <form onSubmit={create}>
        <div className="field">
          <input type="hidden" name="studentId" value={user.studentId}  onChange = {(e)=>handleChange(e)}/>
        </div>
        <div className="field">
          <input type="hidden" name="courseId" value={user.courseId}  onChange = {(e)=>handleChange(e)}/>
        </div>
        <div className="field">
          <label>Rating</label>
          {/* {
            errs.rating?
            <span className="error-text">{errs.rating.message}</span>
            :null
          } */}
          <select name="rating" id="" value={user.rating} onChange = {(e)=>handleChange(e)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </select>
        </div>
        <div className="field">
          <label>Review Text</label>
          {
            errs.reviewText?
            <span className="error-text" style={{color:"#f79623",fontWeight:"bold"}}>{errs.reviewText.message}</span>
            :null
          }
          <textarea name="reviewText" value={user.reviewText} id="" cols="30" rows="10" onChange={(e)=> handleChange(e)}></textarea>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
  };
  
  export default CreateBlocReviews;



