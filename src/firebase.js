import {firebaseConfig} from "./firebaseConfig";

async function firestore() {
    if (process.browser) {  // When running from client:
        console.log('Using client side firestore db');
        return window.db    // This is set in client.js
    } else {
        const firebase = await import('firebase');
        console.log('Using server side dynamic import for firebase/firestore');
        if (firebase.apps.length === 0) {
            let app = firebase.initializeApp(firebaseConfig);
            return app.firestore()
        }
        else {
            return firebase.apps[0].firestore()
        }
    }
}

export async function fetch(collection = "topics") {
    let db = await firestore();
    let entries = [];
    console.log("Fetching entries...");
    await db.collection(collection)
        .get()
        .then(dbEntries => {
            dbEntries.forEach(entry => {
                let data = entry.data();
                // we want to have the id as part of the data instead of on the document
                // because we're throwing away the document reference.
                data["id"] = entry.id;
                entries.push(data);
            });
        })
        .catch(e => console.log(e));

    return entries;
}

export async function fetchDoc(collection = "topics", doc) {
    let db = await firestore();
    let entries = [];
    await db.collection(collection)
        .doc(doc)
        .get()
        .then(entry => entries.push(entry.data()))
        .catch(e => console.log(e));
    return entries;
}

export async function insert(collection, data) {
    let db = await firestore();
    db.collection(collection).add(data)
        .then(docRef => console.log("Inserted new document: ", docRef.id))
        .catch(e => console.log("Error inserting new document: ", e))
}
