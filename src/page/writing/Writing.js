import Header from "../../components/header/Header2.js";
import Mood from './Mood.js'
import * as W from '../../style/writing.js'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Writing() {

  let navigate=useNavigate();

  let [props, setProps]=useState("none");
  const [img, setImg] = useState("");

  let[date, setDate]=useState();
  let[weather, setWeather]=useState("맑음");
  let [title, setTitle]=useState();
  let[content, setContent]=useState();

  function changeMode(){
    if (props === "none"){
      setProps("block")
    } else {
      // console.log('none')
      setProps("none")
    }
  }

  return(
    <>
    <Header/>
    <W.wBox>
      <W.dial>일기 작성</W.dial>
      <W.date>
        <W.mon>날짜<W.month type='date' onChange={(e)=>{
          setDate(e.target.value)}}/></W.mon>
        <W.mon>날씨
          <W.weather onChange={(e)=>{
            console.log(e.target.value)
            setWeather(e.target.value)}}>
            <W.icon value="맑음" >🌞 맑음</W.icon>
            <W.icon value="흐림">🌥️ 흐림</W.icon>
            <W.icon value="눈">☃️ 눈</W.icon>
            <W.icon value="비">☔ 비</W.icon>
          </W.weather>
          </W.mon>
      </W.date>


      <W.titlebox>
        <W.title placeholder="제목을 작성해주세요." onChange={(e)=>{setTitle(e.target.value)}}/>
        <W.mood 
         onClick={changeMode}
         img={img}
        >
        </W.mood>
      </W.titlebox>

      <W.ingbox>
        <W.ing placeholder="일기를 작성해주세요." onChange={(e)=>{setContent(e.target.value)}}></W.ing>
      </W.ingbox>
      <W.pushBox>
        <W.push onClick={()=>{
          console.log(date, weather, title,img, content)
          axios.post('http://localhost:8081/board', {date:date, weather:weather, title:title, face:img, content:content})
          .then(()=>{navigate('/diary')});
        }}>완료</W.push>
      </W.pushBox>
    </W.wBox>
    {
      props === "block" ?
      <Mood props={props} img={img} setImg={setImg}/>:null
    }
    </>
  )
}

export default Writing;