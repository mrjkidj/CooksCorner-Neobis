import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./Redux-Toolkit/reduxHooks";
import LoginPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import DetailRecipePage from "./Pages/DetailRecipePage/DetailRecipePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import AuthorPage from "./Pages/AuthorPage/AuthorPage";
import UserProfilePage from "./Pages/UserProfilePage/UserProfilePage";
import Begin from "./Pages/Begin/Begin";
import Navbar from "./Components/Navbar/Navbar";
import 'tailwindcss/tailwind.css';


function App() {
  // const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <>
      {/* {isAuth ? ( */}
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/not-found"} element={<NotFoundPage />} />
            <Route path={"/recipe-detail"} element={<DetailRecipePage />} />
            {/* <Route path={"/recipe-author"} element={<AuthorPage />} /> */}
            <Route path={"/recipe-search"} element={<SearchPage />} />
            <Route path={"/user-profile"} element={<UserProfilePage />} />
          </Routes>
        </>
      {/* ) : ( */}
        {/* <Routes> */}
 {/* <Route path={"/"} element={<Navbar />} /> */}
          {/* <Route path={"/"} element={<Begin />} /> */}
          {/* <Route path={"/login"} element={<LoginPage />} /> */}
          {/* <Route path={"/register"} element={<RegisterPage />} /> */}

        {/* </Routes> */}
      {/* ) */}
      {/* } */}
    </>
  );
}

export default App;