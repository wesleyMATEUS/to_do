function firebase_config ()
{
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9eE0NrFFrHVvrhsoDGhENGdiV91hNdrE",
    authDomain: "to-do-b7ce7.firebaseapp.com",
    databaseURL: "https://to-do-b7ce7.firebaseio.com",
    projectId: "to-do-b7ce7",
    storageBucket: "",
    messagingSenderId: "394049252253"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  ref_main = database.ref('main');
  ref_op1 = database.ref('op1');
  ref_op2 = database.ref('op2');
}
