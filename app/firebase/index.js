import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAy7D7gfB61diHJnzVahqF3rT_M3owpym4",
      authDomain: "pstemplates-40319.firebaseapp.com",
      databaseURL: "https://pstemplates-40319.firebaseio.com",
      projectId: "pstemplates-40319",
      storageBucket: "pstemplates-40319.appspot.com",
      messagingSenderId: "766726771684"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
