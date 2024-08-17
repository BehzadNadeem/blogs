import{auth,onAuthStateChanged} from "./utils/utils.js"


onAuthStateChanged(auth, (user) => {
    if (user) {
        // login hai 
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
    //   login_btn.style.display="none";
    //   user_image.style.display="inline-block";
    //   user_image.style.width="45px";
    //   user_image.style.height="42px";
     
      
    //   getUserImage(uid)
    //   isUserLoggedIn = true;
      // ...
    } else {
        // login nahi hai 
      // User is signed out
      window.location.href='auth/login/login.html' ;
    //   login_btn.style.display="inline-block";
    //   user_image.style.display="inline-block"; 
    //   isUserLoggedIn = false;
    }
  });

