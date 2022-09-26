import Header from '../../components/header/Header2.js';
import Button from '../../components/Button.js';
import * as D from '../../style/diary.js';
import { useNavigate } from 'react-router-dom';


function Diary(){

  let navigate=useNavigate()

  return(
    <>
    <Header/>
    <D.box>
      
    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    <D.card>
        <D.top>
          <D.image src='/face/people.svg'/>
        </D.top>
        <D.bottom>
          <D.title>제목</D.title>
          <D.p>날짜</D.p>
          <D.check onClick={()=>{navigate('/')}}>확인</D.check>
        </D.bottom>
    </D.card>

    </D.box>
    <Button/>
    </>
  )
}

export default Diary;
