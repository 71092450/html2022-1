function Registrar(){
    let usuario = document.getElementById("usr").value;
    document.getElementById("pwd").ariaValueMax;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
  });
}
