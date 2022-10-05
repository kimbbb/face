import * as De from '../../style/detail.js'
import { useNavigate } from 'react-router-dom';
import face from "../../image/writing.svg"

function Detail() {

  let navigate = useNavigate();

  return(
    <>
    <De.bg>
      <De.detail>
        <De.header>
          <De.title>제목</De.title>
          <De.closebtn onClick={()=>{navigate('/diary')}}/>
        </De.header>

        <De.items>
          <De.top>
            <De.face>
              <De.icon src={face}/>
            </De.face>

            <De.dbox>
              <De.date>날짜</De.date>
              <De.date>날씨</De.date>
            </De.dbox>
          </De.top>

          <De.bottom>
            <De.book>
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf
              djdflkajfhakjfdhaklsfhdsajfhskd
              hfalhfkajhflajffaasfdjafdaksfalk
              fdafjdhajfhafdjaflajsdf</De.book>
          </De.bottom>

          <De.del>Delete</De.del>

        </De.items>
      </De.detail>
    </De.bg>
    </>
  )
}

export default Detail;