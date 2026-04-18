import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvbplgsoy0Nb37fbE_e1CdbWt8GKq_4Q",
  authDomain: "hotnft-app.firebaseapp.com",
  projectId: "hotnft-app",
  storageBucket: "hotnft-app.firebasestorage.app",
  messagingSenderId: "226518368288",
  appId: "1:226518368288:web:a9002e1316b129258803d5"
};

const app = initializeApp(firebaseConfig);

document.getElementById("status").innerText = "Firebase Connected ✅";

window.testFirebase = () => {
  alert("Firebase Connected ✅");
};
