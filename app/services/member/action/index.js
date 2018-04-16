import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ACCESS_TOKEN_EXPIRED,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRED,
  LOGOUT,
  USER_PROFILE,
  PRODUCT_LIST,
} from './types';


const login = (username, password) => ({ type: LOGIN, username, password});

const loginSuccess = (username, accessToken, refreshToken, expireTime) => ({
  type: LOGIN_SUCCESS,
  userName: username,
  accessToken,
  refreshToken,
  expireTime
});

const loginFail = () => ({
  type: LOGIN_FAIL,
});

const refreshToken = (accessToken, expireTime) => ({
  type: REFRESH_TOKEN,
  accessToken,
  expireTime
})

const accessExpired = () => ({
  type: ACCESS_TOKEN_EXPIRED,
});

const refreshExpired = () => ({
  type: REFRESH_TOKEN_EXPIRED,
});

const logout = () => ({
  type: LOGOUT,
});

const userProfile = (data) => ({
  type: USER_PROFILE,
  ...data
});

const productList = (data) => ({
  type: PRODUCT_LIST,
  ...data,
});


export {
  loginSuccess,
  loginFail,
  refreshToken,
  accessExpired,
  refreshExpired,
  logout,
  userProfile,
  productList,
};
