import logo from '../assets/translate.png'
import { Link } from 'react-router-dom' 

function Navbar() {
  return (
    <div className="p-2 border-b bg-black">
    <Link to="">
        <img src={logo} 
        className="w-44"
        /> 
    </Link> 
    </div>
  )
}

export default Navbar