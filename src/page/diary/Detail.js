import * as De from '../../style/detail.js'
import { useNavigate, useParams } from 'react-router-dom';

function Detail(props) {

  let {id}=useParams();
  props.object.find((x)=>x.id==id)
  let navigate = useNavigate();

  return(
    <>
    <De.bg>
      <De.detail>
        <De.header>
          <De.title>{props.object[id].title}</De.title>
          <De.closebtn onClick={()=>{navigate('/diary')}}/>
        </De.header>

        <De.items>
          <De.top>
            <De.face>
              <De.icon src={props.object[id].img} />
            </De.face>

            <De.dbox>
              <De.date>{props.object[id].date}</De.date>
              <De.date>{props.object[id].weather}</De.date>
            </De.dbox>
          </De.top>

          <De.bottom>
            <De.book>{props.object[id].txt}</De.book>
          </De.bottom>

          <De.del>Delete</De.del>

        </De.items>
      </De.detail>
    </De.bg>
    </>
  )
}

export default Detail;