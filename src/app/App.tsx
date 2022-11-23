import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { selectHomePageVM } from 'app/redux/features/vms';

import { ChangePasswordPage, ForgetPasswordPage, HomePage, LoginPage, RegisterPage, ResetPasswordPage } from './pages';
import appConstants, { ROUTES } from 'constants/constants';

import { LocalDataRepository } from 'logic/interfaces/LocalDataRepository';


import {User} from "logic/models/User"
import { setUser } from 'app/redux/features/userSlice';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const dispatch = useAppDispatch()
  const homePageVM = useAppSelector(selectHomePageVM)

  useEffect(() => {
    const asyncFunc = async () => {
      const user = await homePageVM.getLoggedInUser()
      console.log("rrrrrr")
      console.log(user)
    }

    asyncFunc()
    
  }, [])
  

  // useEffect(() => {
  //   const asyncFunc = async() =>{
  //   const token = await new LocalDataRepository().get(appConstants.ACCESS_TOKEN_KEY);
  //     if(token){
  //       // const decoded = jwt_decode(token);
  //       const user = await homePageVM.getLoggedInUser()
  //       if(user)
  //       dispatch(setUser(user))
  //     }
  //   }
  //   asyncFunc()
  // }, [])

  return (
    <Router>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />


          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />
          
          <Route path={ROUTES.changePassword} element={<ChangePasswordPage />} />
          <Route path={ROUTES.forgetPassword} element={<ForgetPasswordPage />} />
          <Route path={ROUTES.resetPassword} element={<ResetPasswordPage />} />



        </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;