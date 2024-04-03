/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자코트추천', '강남우동맛집','파이썬독학']);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);  //모달 스위치 역할
  let [num, setNum] = useState(0);
  let [info, setInfo] = useState(['발마칸코트','현우동','코딩애플']);
  let [입력값, 입력값변경] = useState('');
  let [입력값2, 입력값변경2] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

      {/* <div className='list'>
        <span onClick={()=>{
          let copy = [...title];
          copy[0] = "여자코트추천";
          setTitle(copy);
        }}>🔄</span>

        <h4>{ title[0] } <span onClick={()=>{setGood(good+1)}}>👍</span>
         {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{ title[2] }</h4>
        <p>2월 19일 발행</p>
      </div> */}

      { 
        title.map(function(a, i){
          return (
          <div className="list"  key={i}>
            <h4 onClick={()=>{ setNum(i);  setModal(true); }}>{ title[i] } 
            <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...good];
              copy[i]++;
              setGood(copy);
            }}>👍</span>
            {good[i]}</h4>
            <p>2월 {17+i}일 발행</p>
            <button onClick={()=>{
              let copy = [...title];
              copy.splice(i,1);
              setTitle(copy);

              let copy2 = [...info];
              copy2.splice(i,1);
              setInfo(copy2);
            }}>삭제</button>
          </div> 
          )
        }) 
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}></input>
            <input onChange={(e)=>{
        입력값변경2(e.target.value);
      }}></input>
      
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(입력값);
        setTitle(copy);

        let copy2 = [...info];
        copy2.unshift(입력값2);
        setInfo(copy2);
      }}
      >글발행</button>

      {
        modal == true 
        ? <Modal title={title} setTitle={setTitle} num={num} info={info}></Modal> : null 
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.title[props.num]}</h4>
      <p>2월{17+props.num}일</p>
      <p>{props.info[props.num]}</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0] = "여자코트추천";
        props.setTitle(copy);
      }}>글수정</button>
     </div>
  )
}

export default App;
