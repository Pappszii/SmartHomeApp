import firebase from "firebase";
import "firebase/firestore";

class Fire {
  constructor() {}

  get firestore() {
    return firebase.firestore();
  }

  get userId() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }

 

  static addList(list) {
    let ref = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("lists");
   
      ref.add(list);
  };

  static getLists(callback) {
    let ref = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("lists");

    ref.unsubscribe = ref.onSnapshot((snapshot) => {
      var lists = [];
      snapshot.forEach((doc) => {
        lists.push({ id: doc.id, ...doc.data() });
      });

      callback(lists);
    });
  }
}

 export default Fire;


