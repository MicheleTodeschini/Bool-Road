import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import TravelDetails from '../Pages/TravelDetails'
import PersonDetail from '../Pages/PersonDetails'

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/TravelDetails/:id' element={<TravelDetails />} />
          <Route path='/PersonDeatils/:id' element={<PersonDetail />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
