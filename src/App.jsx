import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import TravelDetails from '../Pages/TravelDetails'
import PersonDetails from '../Pages/PersonDetails'

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/TravelDetails/:id' element={<TravelDetails />} />
          <Route path='/PersonDetails/:id' element={<PersonDetails />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
