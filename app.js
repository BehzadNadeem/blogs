import{auth,db,storage ,onAuthStateChanged,signOut,getDoc,doc} from "./utils/utils.js"
let isUserLoggedIn = false;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // login hai 
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      login_btn.style.display="none";
      user_image.style.display="inline-block";
      user_image.style.width="45px";
      user_image.style.height="42px";
     
      
      getUserImage(uid)
      isUserLoggedIn = true;
      // ...
    } else {
        // login nahi hai 
      // User is signed out
      // window.location.href='auth/login/login.html' ;
      login_btn.style.display="inline-block";
      user_image.style.display="inline-block"; 
      isUserLoggedIn = false;
    }
  });
  const login_btn=document.getElementById('login_btn');
  const Logout_btn=document.getElementById('Logout_btn');
  const user_image=document.getElementById('user_image');
  console.log(user_image);

  login_btn.addEventListener('click' , function(){
    window.location.href='/auth/login/login.html'
  });

  Logout_btn.addEventListener("click", () => {
    signOut(auth);

  });


  function getUserImage(uid){
    const userRef=doc(db , "users" , uid);
    getDoc(userRef).then((data)=>{
        console.log('data=>',data);
        console.log('data=>',data.data());
        console.log('data=>',data.id);
        user_image.src=data.data().img;
    });
   
  }