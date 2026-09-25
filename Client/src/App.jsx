import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
