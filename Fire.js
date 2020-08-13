import FirebaseKey from "./config"
import firebase from "firebase"
import FirebaseKeys from "./config"

class Fire {
    constructor(){
        firebase.initializeApp(FirebaseKeys);
    }


    get firestore(){
        return firebase.firestore();
    }

    get uid(){
        return(firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return Date.now();
    }

    addPost = async ({text,localUri}) =>{
        const remoteUri = await this.uploadPhotoAsync(localUri)

return new Promise((res,rej)=>{
    this.firestore.collection("posts").add({
        text,
        uid:this.uid,
        timestamp:this.timestamp,
    })
    .then(ref=>{
        res(ref)
    })
    .catch(error => {
        rej(error)
    });
});
};

}

Fire.shared= new Fire();
export default Fire;