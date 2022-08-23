import React ,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Profile.css';

export default function Profile() {
  
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  console.log(profile);
  return(
    <div class="wrapper-profile">
        <a href='/' className="back-button"><FontAwesomeIcon icon={faArrowLeft} class="icon-comment"/> </a> 
      <div className='grid-profile'>
        <div>
        Username      
        </div>
        <div>
        :      
        </div>
        <div>
        {profile.name}
        </div>
        <div>
        Email      
        </div>
        <div>
        :      
        </div>
        <div>
        {profile.email}
        </div>  
        <div>
        Address    
        </div>
        <div>
        :      
        </div>
        <div>
        {profile.name}
        </div>  
        <div>
        Phone      
        </div>
        <div>
        :      
        </div>
        <div>
        {profile.phone}
        </div>          
      </div>
    </div>
  );
}