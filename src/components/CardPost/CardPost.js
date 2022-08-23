import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import './CardPost.css';
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function CardPost(props) {
  const [nama, setNama] = useState([]);
  const [totalComment, setTotalComment] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
      .then((response) => {
        setNama(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((response) => {
        setTotalComment(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

    return(
          <div class="grid-container">
            <div class="name"> 
              {nama.name}
            </div>
            <div class="post"> 
              {props.title}
              <p class="comment">
                <Link to={`/detail/post/${props.id}`} className="comment-button"><FontAwesomeIcon icon={faComment} class="icon-comment"/> {totalComment}        Detail</Link>  
              </p>
            </div>
          </div>
    );
  }
