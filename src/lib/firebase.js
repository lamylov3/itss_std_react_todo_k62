import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB2iyhHHrsE0aRfLeWxeR353x7IxvGNtqk",
    authDomain: "fir-sample-54b76.firebaseapp.com",
    projectId: "fir-sample-54b76",
    storageBucket: "fir-sample-54b76.appspot.com",
    messagingSenderId: "145820301567",
    appId: "1:145820301567:web:d16d44d417b75e3146b4ca",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {

}).catch(function (err) {
    console.log(err);
  });
};

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

export const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ name: user.displayName });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
} 