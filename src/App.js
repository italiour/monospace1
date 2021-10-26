import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { Table } from './features/Table';
import { usersFetch } from './features/usersFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Image from './Questionmark.svg';
import {selectCount} from './features/userSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const { hasError } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(usersFetch());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(usersFetch());
  };

  return (
    <div className="App">
      <div className="topPart">
        <div className="leftTopPart">
          <div className="fontWrapper">
            <FontAwesomeIcon icon={faUsers} className="fontIcon"/>
          </div>
          <p>Users</p>
        </div>
        <div className="rightTopPart">
          <p>{count + " Selected"}</p>
          <div className="imgWrapper">
          <img src={Image} alt="lala" className="questionMark"/>
          </div>
          
        </div>
        
      </div>
      {hasError ? (
          <div className="error-wrapper">
            <p>
              Failed to fetch user data!
            </p>
            <button onClick={onTryAgainHandler}>Try again</button>
          </div>
        ) : (
          <Table />
        )}
    </div>
  );
}

export default App;
