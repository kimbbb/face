import * as W from '../../style/writing.js'


function Mood({
  props
}) {

  console.log(props)

  return(
  <>
  <W.face props={props} >FACE
  </W.face>
  </>
  )
}

export default Mood;