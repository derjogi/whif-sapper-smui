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
    await db.collection(collection).get().then(dbEntries => {
        dbEntries.forEach((entry) => {
            let data = entry.data();
            entries.push(data);
        });
    });

    return entries;
}
