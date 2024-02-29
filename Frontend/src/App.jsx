import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Pages and Components
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Scan from './pages/Scan'


const App = () => {
  const { user } = useAuthContext();
  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />

            <Route path='/' element={user ? <Scan/> : <Navigate to="/login"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;