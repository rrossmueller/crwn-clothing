import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAkVN0ERd6_2t1p3oNs3a-KX0WsM1rTDzo',
  authDomain: 'crwn-db-3aa59.firebaseapp.com',
  databaseURL: 'https://crwn-db-3aa59.firebaseio.com',
  projectId: 'crwn-db-3aa59',
  storageBucket: 'crwn-db-3aa59.appspot.com',
  messagingSenderId: '855254223615',
  appId: '1:855254223615:web:4ee3cc91348a37730e1aca',
  measurementId: 'G-N4DV7YQ3TK'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
