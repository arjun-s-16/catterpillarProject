
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import DashBoard from './pages/DashBoard'
import LoginPage from './pages/LoginPage'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import InspectionDetails from './forms/InspectionDetails'
import FormLists from './forms/FormLists'

function App() {

  return (
    <div>
      <ChakraProvider>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<DashBoard/>}/>
        <Route path="/inspect" element={<InspectionDetails/>}/>
        <Route path="/inspect/:id" element={<FormLists/>}/>

      </Routes>
      </BrowserRouter>
      </ChakraProvider>
      
    </div>
  )
}

export default App
