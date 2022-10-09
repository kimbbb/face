import * as W from '../../style/writing.js'
import data from '../../data/data.js'
import { useState } from 'react'


function Mood({
  props, setProps, img, setImg
}) {

  // console.log(props)
  let [face, setFace]=useState(data);
  //console.log(face)
  
  return(
  <>
  <W.face props={props}>FACE
  {/* <W.close onclick={()=>{
    
  }} /> */}

    <W.facediv>

    {
      face.map(function(a,i){
        return(
            <W.ficon  key={a.id} src={a.img} onClick={()=>{
              setImg(a.img)
            }}/>
        )
      })
    }
    </W.facediv>
  </W.face>
  </>
  )
}

export default Mood;