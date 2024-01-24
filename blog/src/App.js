/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {

  let [글제목, b] = useState(['남자 코트 추천','맛집추천','여자 코트 추천']);
  let [like, setLike] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
        <div className="list">
          <h4>{글제목[0]} <span onClick={()=>{setLike(like+1)}}>💕</span> {like} </h4>
          <p>2월 17일</p>
        </div>
        <div className="list">
          <h4>{글제목[1]} <span onClick={()=>{setLike(like+1)}}>💕</span> {like} </h4>
          <p>2월 17일</p>
        </div>
        <div className="list">
          <h4>{글제목[2]} <span onClick={()=>{setLike(like+1)}}>💕</span> {like} </h4>
          <p>2월 17일</p>
        </div>
        
    </div>
  );
}

export default App;
