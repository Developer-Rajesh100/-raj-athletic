import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blogs from "./Pages/Blogs/Blogs";
import Error from "./Pages/Error/Error";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/Home/NavBar/NavBar";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="login" element={<SignIn></SignIn>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="private"
          element={
            <RequireAuth>
              <PrivateRoute></PrivateRoute>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
