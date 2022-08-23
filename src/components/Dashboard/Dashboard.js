import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import './Dashboard.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardPost from '../CardPost/CardPost.js';

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);
  const todosPerPage = 10;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const todosData = useMemo(() => {
    let computedTodos = todos;

    if (searchTerm) {
        computedTodos = computedTodos.filter(
            todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    setTotalTodos(computedTodos.length);

    return computedTodos.slice(
        (currentPage - 1) * todosPerPage,
        (currentPage - 1) * todosPerPage + todosPerPage
    );
}, [todos, currentPage, searchTerm]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const next = () => setCurrentPage(currentPage + 1);

  const prev = () => setCurrentPage(currentPage - 1);

  return (
    <div className="wrapper-dashboard">
      <div class="form-field d-flex align-items-center">
        <input
          type="text"
          id="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <FontAwesomeIcon icon={faSearch} class="icon-search"/>
      </div>

      {todosData
        .map((todo) => {
          return (
            <div key={todo.id} >
              <CardPost id={todo.id} title={todo.title} userId={todo.userId} postId={todo.id} />
            </div>
          );
        })}

      
        <ul className="pagination">
          <li className="page-item">
            <button onClick={() => prev()} className="page-link">
              prev
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button onClick={() => next()} className="page-link">
              next
            </button>
        </li>
        </ul>
      
    </div>
  );
}