const appConstants = {
    ACCESS_TOKEN_KEY : "accessToken",
    REFRESH_TOKEN_KEY : "refreshToken",

    imgPreview:"data:image/gif;base64,R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs="
}
const ROUTES = {
    login: "/login",
    register: "/register",
    home: "/",

    forgotPassword:"/forgotPassword"
}

const kPalette = {
    red:"#991B1B",
}


interface SettingType {
    apiUrl:string
}
interface AllSettings{
    dev : SettingType
    prod : SettingType
    staging : SettingType
}

const settings : AllSettings = {
    dev : {
      apiUrl : "http://127.0.0.1:8000"
    },
    staging : {
        apiUrl : "https://recrutrackerback.herokuapp.com/"
      },
    prod : {
      apiUrl : "https://recrutrackerback.herokuapp.com/"
    }
  }

export {ROUTES,kPalette}

export default appConstants