import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCQWLkImcBE1BlCM525V28xOZ1YAIP0LfA',
  authDomain: 'moinda-2c664.firebaseapp.com',
  databaseURL: 'https://moinda-2c664.firebaseio.com',
  projectId: 'moinda-2c664',
  storageBucket: 'moinda-2c664.appspot.com',
  messagingSenderId: '984280015557',
  appId: '1:984280015557:web:6da6e95c999f5cfb7486ac',
  measurementId: 'G-MCRTQB8SVN',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.initializeApp(firebaseConfig);

export const fire_auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const firebaseApp = firebase;

export default firebase;
