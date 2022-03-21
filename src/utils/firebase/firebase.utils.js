import { initializeApp } from 'firebase/app';
import {
     getAuth, 
     signInWithRedirect,
     signInWithPopup,
     GoogleAuthProvider
    } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDGylUg_te1Wh4uA9N-ihNG4rxssBOsCm0",
    authDomain: "crwn-clothing-db-aa35a.firebaseapp.com",
    projectId: "crwn-clothing-db-aa35a",
    storageBucket: "crwn-clothing-db-aa35a.appspot.com",
    messagingSenderId: "176674347066",
    appId: "1:176674347066:web:6e1e7ebd0eb99cf4cd3d03"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const creatUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
      console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, { 
          displayName,
          email,
          createdAt
       });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  };