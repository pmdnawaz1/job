import firebase from 'firebase/app';
import 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, SENDER_ID } from '../../secret.js'

const config = {
  apiKey:API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID
};

firebase.initializeApp(config);


const storage = firebase.storage();


export {
  storage,
  firebase as default
}
