// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIe7nTO7UYwNHavndIQZ_zx1UxywYQrCc",
  authDomain: "kedai-kopi-kenangan-senja.firebaseapp.com",
  databaseURL: "https://kedai-kopi-kenangan-senja-default-rtdb.firebaseio.com",
  projectId: "kedai-kopi-kenangan-senja",
  storageBucket: "kedai-kopi-kenangan-senja.firebasestorage.app",
  messagingSenderId: "1055767574558",
  appId: "1:1055767574558:web:31b6aa6a830a37249c560f",
  measurementId: "G-W1QQVQEBYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sibedar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
