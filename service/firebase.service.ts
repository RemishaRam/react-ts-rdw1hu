import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "../constants/firebase.config";

export class FirebaseService {
  private static instance: FirebaseService;

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  public static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  public getDBRef(doc: string): firebase.database.Reference {
    return firebase.database().ref(doc);
  }
}
