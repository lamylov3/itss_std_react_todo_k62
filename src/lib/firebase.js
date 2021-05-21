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

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};