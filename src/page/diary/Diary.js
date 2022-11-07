import Header from '../../components/header/Header2.js';
import Button from '../../components/Button.js';
import * as D from '../../style/diary.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Diary(){
  const navigate=useNavigate();
  const [object, setObject]=useState([]);

  const getBoard = async() => {
    await axios.get('http://localhost:8081/board')
    .then((res)=>{
      let temp = res.data.data
      setObject([...temp]);
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    });
  }
  console.log(object)

  useEffect(() => {
    getBoard();
  }, [])

  function goToDetail(id){
    navigate('/diary/' + id, {state:object[id]})
  }

  return(
    <>
    <Header/>
    <D.box>
      {
        object.map(function(a,i){
          return(
            <D.card key={a.id} onClick={()=>{
              goToDetail(a.id)
            }}>
                <D.top>
                  <D.image src={a.face}/>
                </D.top>
                <D.bottom>
                  <D.title>{a.title}</D.title>
                  <D.p>{a.save_date}</D.p>
                  <D.check>Click</D.check>
                </D.bottom>
            </D.card>    
          )
        })
      }
 
    </D.box>
    <Button/>
    </>
  )
}

export default Diary;
