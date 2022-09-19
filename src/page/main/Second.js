import * as M from "../../style/main.js";
import two from "../../image/2.png";

function Second() {
  return (
    <>
      <M.oneBox>
        <img style={{
          position: 'absolute',
          transform: 'translate(0px, 10%)',
          right: "0%",
          width: "100%",
        }} src={two}/>
      </M.oneBox>
    </>
  );
}

export default Second;