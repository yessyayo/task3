import { useState } from 'react'
import './index.css';
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PersonalInfoForm from './pages/PersonalInfoForm';
import AddressForm from './pages/AddressForm';
import FullAddressForm from './pages/FullAddressForm';
import RegistrationSuccess from './pages/RegistrationSuccess';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/personalinfo' element={<PersonalInfoForm/>} />
        <Route path='/addressform' element={<AddressForm/>} />
        <Route path='/fulladdress' element={<FullAddressForm/>} />
        <Route path='/registrationsuccess' element={<RegistrationSuccess/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      
    </>
  )
}

export default App
