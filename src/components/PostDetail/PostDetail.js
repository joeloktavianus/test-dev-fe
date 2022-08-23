import './PostDetail.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostDetail() {
  const paramId = useParams();
  const [nama, setNama] = useState([]);
  const [detailPost, setdetailPost] = useState([]);
  const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(true);
    };
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${detailPost.userId}`)
        .then((response) => {
          setNama(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${paramId.id}`)
        .then((response) => {
          setdetailPost(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return(
    <div className="wrapper-dashboard">
        <a href='/' className="back-button"><FontAwesomeIcon icon={faArrowLeft} class="icon-comment"/> </a> 
          <div class="grid-container">
            <div className="name-detail-post"> 
              {nama.name}
            </div>
            <div class="post"> 
              {detailPost.title}
              <p class="body-detail">
              {detailPost.body}
              </p>
              {isShown ? <p><b>All Comment</b></p> : 
              <p class="comment">
                <a href='#' onClick={handleClick} className="comment-button"><FontAwesomeIcon icon={faComment} class="icon-comment"/> 5</a> 
              </p>}
              {isShown && <Comment id={paramId.id}/>}
            </div>
          </div>
    </div>
          
    );
  }

  function Comment(props) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
        .then((response) => {
          setComments(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id} >
              <div class="grid-container">
                <div className="name-comment"> 
                  {comment.name}
                </div>
                <div class="post"> 
                  {comment.body}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
    );
  }