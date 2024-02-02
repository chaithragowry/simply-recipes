import "../styles/loader.scss"
import { BallTriangle } from 'react-loader-spinner'

function Loader() {

    return (
    <div className='loader'>
      
        <BallTriangle  color='#B8C1EC'/>
    </div>
  )
}
export default Loader