import { getAuth, signOut } from "firebase/auth";

export function logOut(setToken){
const auth = getAuth();
signOut(auth).then(() => {
    setToken(null);
}).catch((error) => {
  console.log(error)
})
}