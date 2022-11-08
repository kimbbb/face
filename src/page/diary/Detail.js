import * as De from '../../style/detail.js'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {

  const navigate = useNavigate();

  const location = useLocation()
  console.log(location.state)


  return(
    <>
    <De.bg>
      <De.detail>
        <De.header>
          <De.title>{location.state.title}</De.title>
          <De.closebtn onClick={()=>{navigate('/diary')}}/>
        </De.header>

        <De.items>
          <De.top>
            <De.face>
              <De.icon src={location.state.face} />
            </De.face>

            <De.dbox>
              <De.date>{location.state.save_date}</De.date>
              <De.date>{location.state.weather}</De.date>
            </De.dbox>
          </De.top>

          <De.bottom>
            <De.book>{location.state.content}</De.book>
          </De.bottom>

          <De.del
          onClick={()=>{
            console.log(location.state.id)
            const iid=location.state.id
            axios
            .delete(`http://localhost:8081/board/${iid}`)
            .then(()=>{alert('일기가 삭제되었습니다😄'); navigate('/diary')})
          }}>Delete</De.del>

        </De.items>
      </De.detail>
    </De.bg>
    </>
  )
}

export default Detail;