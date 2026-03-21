import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Layout } from './components/ui/Layout'
import { ProtectedRoutes } from './util/ProtectedRoutes'
import { isAuthenticated } from './api/auth'
import { Project } from './pages/project/Project'

function App() {
    
return (
//   <Routes>
    // <Layout />
//   </Routes>
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={isAuthenticated()  ?  <Navigate to="/home" />: <Navigate to="/login" />} />

           <Route element={<ProtectedRoutes />}>
                <Route element={<Layout />} >
                    <Route path="/home" element={<h1>Home</h1>} />
                    <Route path="/project" element={<Project />} />
                </Route>
           </Route>
        </Routes>
    </BrowserRouter>
)
  
}

export default App
