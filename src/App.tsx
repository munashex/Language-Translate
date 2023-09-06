import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar" 
import Home from './Pages/Home' 
import SearchBox from './Pages/Searchbox' 
import Language from './Pages/Language' 
import LeftLanguage from './Pages/LeftLanguage'


const App = () => {

  return (
    <div> 
   <BrowserRouter> 
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}> 
     <Route index element={<SearchBox/>}/> 
     <Route path="languages" element={<Language/>}/> 
     <Route path="leftlanguages" element={<LeftLanguage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </div>
  )
} 

export default App