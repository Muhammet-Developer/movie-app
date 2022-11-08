import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";
import {UserProvider} from "../context/AuthContext"
import PrivateRouter from "./PrivateRouter";
const Router = () => {
  return (
  <BrowserRouter>
  <UserProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    {/* <Route path="/:id" element={<MovieDetail/>}/> */}
    <Route path="/:id" element={<PrivateRouter/>}>
      <Route path="/:id" element={<MovieDetail/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
  </UserProvider>
  </BrowserRouter>
  )
}

export default Router