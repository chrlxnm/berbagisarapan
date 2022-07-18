import { useState } from 'react';

export default function useUserInfo() {

  const getUserInfo = () => {
    const userInfoString = localStorage.getItem('userInfo');
    const userUserInfo = JSON.parse(userInfoString);
    return userUserInfo
  };

  const [userInfo, setUserInfo] = useState(getUserInfo());

  const saveUserInfo = userUserInfo => {
    localStorage.setItem('userInfo', JSON.stringify(userUserInfo));
    sessionStorage.setItem('userInfo', JSON.stringify(userUserInfo));
    setUserInfo(userUserInfo);
  };

  return {
    setUserInfo: saveUserInfo,
    userInfo
  }
}

export const getCurrentTab = (path) => {
  switch (path) {
    case "/beranda":
      return ["1"]
    case "/daftar-pengguna":
      return ["2", "sub21"]
    case "/daftar-donatur":
      return ["2", "sub22"]
    case "/donasi-harian":
      return ["3", "sub31"]
    case "/laporan-harian":
      return ["3", "sub32"]
    case "/akun":
      return ["4"]
    default:
      return ["1"]  
  }    
}