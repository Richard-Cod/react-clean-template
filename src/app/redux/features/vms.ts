import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import HomePageVM from '../../../logic/interfaces/viewmodels/HomePageVM'
import LoginPageVM from '../../../logic/interfaces/viewmodels/LoginPageVM'
import RegisterPageVM from '../../../logic/interfaces/viewmodels/RegisterPageVM'


// Define a type for the slice state
interface ViewModelsState {
  homePageVM: HomePageVM,
  loginPageVM: LoginPageVM,
  registerPageVM : RegisterPageVM,
}

// Define the initial state using that type
const initialState: ViewModelsState = {
  homePageVM: new HomePageVM(),
  loginPageVM: new LoginPageVM(),
  registerPageVM: new RegisterPageVM(),
}

export const viewModelsSlice = createSlice({
  name: 'viewmodels',
  initialState,
  reducers: {
  },
})

export const { } = viewModelsSlice.actions

export const selectHomePageVM = (state: RootState) => state.viewModels.homePageVM
export const selectLoginPageVM = (state: RootState) => state.viewModels.loginPageVM
export const selectRegisterPageVM = (state: RootState) => state.viewModels.registerPageVM

export default viewModelsSlice.reducer