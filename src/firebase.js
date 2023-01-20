/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAotXHllzjUY0fAS2ZTz75lPjaMdOHTHag',
  authDomain: 'personal-website-a9354.firebaseapp.com',
  projectId: 'personal-website-a9354',
  storageBucket: 'personal-website-a9354.appspot.com',
  messagingSenderId: '498051037389',
  appId: '1:498051037389:web:2f08f91b6272bbd70d9184',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
