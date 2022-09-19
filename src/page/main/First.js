import * as M from "../../style/main.js";
import one from "../../image/1.png";

function First() {
  return (
    <>
      <M.oneBox>
        <img style={{
          position: 'absolute',
          transform: 'translate(0px, 22%)',
          right: "0%",
          width: "86%",
        }} src={one}/>
      </M.oneBox>
    </>
  );
}

export default First;