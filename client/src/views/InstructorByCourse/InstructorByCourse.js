import React, { useEffect, useState } from 'react';
import './InstructorByCourse.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const InstructorByCourse = () => {

  const userObjs = JSON.parse(localStorage.getItem('USER_OBJ')) || {};
  const userObjsRole = userObjs.role || 'default';
  const userObjsId = userObjs._id || 'default';
  
  console.log("userObjRole+++++++++", userObjsRole);
  console.log("userObjsId+++++++++", userObjsId);



  const [InstructByCourse, setInstructByCourse] = useState({});
  const {id} = useParams(); 
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false); 

  
  
  useEffect(() => {
    axios.get("http://localhost:8000/api/instructorOradmin/" + id,{withCredentials: true})
        .then( res => {
          console.log("u++++++++++",res.data.result);
          setInstructByCourse(res.data.result);
          setLoaded(true); 
        })
        .catch( err => console.log(err) );
  }, [id]); 
  
  
 
  return(
    <div className="InstructorByCourse">
      <div className="page-top">
        <h1>Instructor by course</h1>
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
          { loaded === true ? 
          // <>
          // <div className="details-img">
          //  <img src="/assets/images/instruct.jfif" alt="" /> 
          // <img src="/assets/images/image_2.jpg.webp" alt="" />
          // </div>
          // <div className="fields">
          //      <p><span className='infos'>name:</span>&nbsp;{InstructByCourse.name}</p>
          //      <p><span className='infos'>email:</span>&nbsp;{InstructByCourse.email}</p>
          // </div>
          // </>
          <>
               <div class="s-container">
            <div class="content">
                <span class="subtitle">
                    Hello
                </span>
                <h1 class="title">
                    I'm <span>Ryan <br/></span>a UI/UX Designer
                </h1>
                <p class="description">
                    Welcome to my UI/UX design portfolio! I'm Ryan, a dedicated and imaginative UI/UX designer with a flair for crafting visually appealing and intuitive user experiences. My journey in design has led me to work on diverse projects, from sleek mobile apps to engaging website interfaces.
                </p>
                <div class="buttons">
                    <a href="mailto:exemple@gmail.com">Hire Me</a>
                    <button>Portfolio</button>
                </div>
            </div>
            <div class="image">
            <img src="/assets/images/image_2.jpg.webp" alt="" />
            </div>
        </div>
          </>
          : null }
      </div>
    </div>
  );
}


export default InstructorByCourse;


