import {Outlet, Link, useLocation} from 'react-router-dom' 
import {HiArrowsRightLeft} from 'react-icons/hi2' 
import { commonLanguages } from '../languages' 
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'


function Home() {  


const rightLanguage = localStorage.getItem('rightLanguage') 
const leftLangugae = localStorage.getItem('leftLanguage')   
const location = useLocation()


const right = commonLanguages.find((item) => item.shortcut === rightLanguage)
const left = commonLanguages.find((item) => item.shortcut === leftLangugae) 





  return (
    <div> 

        <div className="flex flex-row   justify-around  font-bold text-blue-600   mt-8 my-1"> 
           <div className='flex items-center gap-x-1'> 
           <Link to="languages" className="text-lg">{right?.language || 'english'}</Link> 
            {location.pathname === '/' ? <TiArrowSortedDown size={30} color='black'/> : <TiArrowSortedUp size={30} color='black'/>}
           </div>
            <h1><HiArrowsRightLeft color="black" size={22}/></h1>  
            
           <div className='flex items-center gap-x-1'>
           <Link to="leftlanguages" className="text-lg">{left?.language || 'french'}</Link> 
           {location.pathname === '/' ? <TiArrowSortedDown size={30} color='black'/> : <TiArrowSortedUp size={30} color='black'/>}
           </div>
        </div> 

        <Outlet/>
    </div>
  )
}

export default Home