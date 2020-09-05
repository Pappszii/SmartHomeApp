import firebase from "firebase"

class Fire {
   
    get firestore(){
        return firebase.firestore();
    }

    get userId(){
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

getLists(callback){
    let ref = firebase.firestore().collection('users').doc(this.userId).collection('lists');

    this.unsubscribe = ref.onSnapshot(snapshot =>{
        lists=[]
        snapshot.forEach(doc=>{
            lists.push({id:doc.id,...doc.data()})
        })

        callback(lists);
    })
    }
}

export default Fire;