import { Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import { lazy,Suspense } from 'react';


const Login=lazy(()=>import('./Components/Login'))
const Dashboard=lazy(()=>import('./Components/Dashboard'))
const AddUser=lazy(()=>import('./Components/AddUser'))
const EditUser=lazy(()=>import('./Components/EditUser'))

function App() {
  return (
    <>
    <Suspense>
      <Routes fallback={<div>Loading....</div>}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users/add" element={<AuthRoute><AddUser /></AuthRoute>} />
        <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>}></Route>
      <Route path="/users/edit/:id" element={<AuthRoute><EditUser /></AuthRoute>} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
