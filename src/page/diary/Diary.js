import Header from '../../components/header/Header2.js';
import Button from '../../components/Button.js'
import * as D from '../../style/diary.js'

function Diary(){

  const face=[
    {
      id:0,
      img:'/face/people.svg',
      date:'2022/1/2',
    },
    {
      id:2,
      img:'/face/people.svg',
      date:'2022/1/4',
    },
  ]


  return(
    <>

    <Header/>
    <D.diary>

      <D.dbox>
      <D.diarybox>
          <D.top><D.face src='/face/people.svg'/></D.top>
          
          <D.bottom>
            <D.title>제목</D.title>
            <D.date>날짜</D.date>
            <D.go>확인하기</D.go>
          </D.bottom>
      </D.diarybox>

      <D.diarybox>
          <D.top><D.face src='/face/people.svg'/></D.top>
          <D.bottom>
            <D.title>제목</D.title>
            <D.date>날짜</D.date>
            <D.go>확인하기</D.go>
          </D.bottom>
      </D.diarybox>

      <D.diarybox>
          <D.top><D.face src='/face/people.svg'/></D.top>
          
          <D.bottom>
            <D.title>제목</D.title>
            <D.date>날짜</D.date>
            <D.go>확인하기</D.go>
          </D.bottom>
      </D.diarybox>
      </D.dbox>

    </D.diary>
    
    <Button/>

    </>
  )
}

export default Diary;
