import Header from '../../components/header/Header2.js';
import Button from '../../components/Button.js';
import * as D from '../../style/diary.js';
import { useNavigate } from 'react-router-dom';
import data from '../../data/ddata.js'
import { useState } from 'react';

function Diary(){

  let navigate=useNavigate();
  let [object, setObject]=useState(data);
  console.log(object)

  return(
    <>
    <Header/>
    <D.box>
      {
        object.map(function(a,i){
          return(
            <D.card onClick={()=>{navigate('/')}}>
                <D.top>
                  <D.image src={a.img}/>
                </D.top>
                <D.bottom>
                  <D.title>{a.title}</D.title>
                  <D.p>{a.date}</D.p>
                  <D.check onClick={()=>{navigate('/')}}>확인</D.check>
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
