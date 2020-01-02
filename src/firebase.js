import 'firebase/firestore'
import {firebaseConfig} from "./firebaseConfig";

export async function firestore() {
    if (process.browser) {  // When running from client:
        console.log('client side firebase db: ', window.db);
        return window.db    // This is set in client.js
    } else {
        const firebase = await import('firebase');
        console.log('firebase dynamic import', firebase);
        if (firebase.apps.length === 0) {
            let app = firebase.initializeApp(firebaseConfig);
            return app.firestore()
        }
        else {
            return firebase.apps[0].firestore()
        }
    }
}