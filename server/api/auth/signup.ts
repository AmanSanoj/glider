import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

export default defineEventHandler(async (event) => {
  let { email, password } = getQuery(event);
  if (typeof email === "string" && typeof password === "string") {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        return error;
      });
  }
});
