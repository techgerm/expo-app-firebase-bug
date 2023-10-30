import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserSessionPersistence,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyCaaK9bvzSnaeyZvNbzQ3Q6Z40s_2MexBI",
  authDomain: "galatea-test.firebaseapp.com",
  databaseURL: "https://galatea-test.firebaseio.com",
  projectId: "galatea-test",
  storageBucket: "galatea-test.appspot.com",
  messagingSenderId: "157046402080",
  appId: "1:157046402080:web:ea0f5af55cb7a0df702045",
  measurementId: "G-8Z7F0QV76R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence:
    Platform.OS === "web"
      ? browserSessionPersistence
      : getReactNativePersistence(AsyncStorage),
});
