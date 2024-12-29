import { createContext, useContext } from "react";
import {initializeApp} from "firebase/app";

const FirebaseContext = createContext(null);

const firebaseConfig = {

  };

export const useFirebase =()=>useContext(FirebaseContext);

const firebaseApp=initializeApp(firebaseConfig);

export const FirebaseProvider=(props) =>{
    return <FirebaseContext.Provider r value={firebaseApp}>{props.children}</FirebaseContext.Provider>
}