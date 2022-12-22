import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCaUovaVzEv7I_0QM8TmhggLbZTpxfml5c",
  authDomain: "pc-components-2e1cc.firebaseapp.com",
  projectId: "pc-components-2e1cc",
  storageBucket: "pc-components-2e1cc.appspot.com",
  messagingSenderId: "766382489032",
  appId: "1:766382489032:web:e06ba131c18d1eefa0d4fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default firebaseConfig;
export {db}