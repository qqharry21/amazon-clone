/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { collection, getDocs, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDGGLz05AIegEYgQj0Y4zW20f_AnONmB2w',
  authDomain: 'clone-928f0.firebaseapp.com',
  projectId: 'clone-928f0',
  storageBucket: 'clone-928f0.appspot.com',
  messagingSenderId: '322134594083',
  appId: '1:322134594083:web:841c4e48e4e7e02d2f5796',
  measurementId: 'G-YBDVP5YZJK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// getDocs(colRef).then(snapshot => {
//   let users = [];
//   snapshot.docs.forEach(doc => {
//     users.push({ ...doc.data(), id: doc.id });
//   });
//   console.log('users', users);
// });

export default db;
