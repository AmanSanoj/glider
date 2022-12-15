import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAAKQBAkFro0IzOjSysAdn7rbQMSs0XFJU",
    authDomain: "glider-webapp.firebaseapp.com",
    projectId: "glider-webapp",
    storageBucket: "glider-webapp.appspot.com",
    messagingSenderId: "854762741840",
    appId: "1:854762741840:web:8284f7cab736997d1db155",
    measurementId: "G-EL85GLG8HP",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return {
    firebaseApp,
    firestore,
    auth,
  };
};
