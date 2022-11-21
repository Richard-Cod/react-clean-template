import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



import { selectHomePageVM } from './redux/features/vms';

import { HomePage, LoginPage, RegisterPage } from './pages';
import appConstants, { ROUTES } from '../constants/constants';
import { DependencyContainer } from '../logic/interfaces/deps';
import { LocalDataRepository } from '../logic/interfaces/LocalDataRepository';


import {User} from "../logic/models/User"
import { setUser } from './redux/features/userSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

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
        </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;