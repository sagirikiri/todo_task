import firebase from 'firebase'
import { firebaseConfig } from '@/firebase/config.js'

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
