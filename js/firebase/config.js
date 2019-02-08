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

  ref_main = firebase.database().ref().child('main');

  ref_main.on('child_added', function(snap){
    my_main = snap.val();
  });



  ref_op1 = firebase.database().ref().child('op1');

  ref_op1.on('child_added', function(snap){
    my_op1 = snap.val();
  });


  ref_op2 = firebase.database().ref().child('op2');

  ref_op2.on('child_added', function(snap){
    my_op2 = snap.val();
  });
}
