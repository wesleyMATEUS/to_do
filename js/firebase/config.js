function firebase_config ()
{
  var id = document.getElementsByName("inp")[0].value;

  var config = {
    apiKey: "AIzaSyDZ-LUc88WWuoL5sRW_qMHB00MXV6oRHBI",
    authDomain: id + ".firebaseapp.com",
    databaseURL: "https://" + id + ".firebaseio.com",
    projectId: id,
    storageBucket: "",
    messagingSenderId: "27812934824"
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
