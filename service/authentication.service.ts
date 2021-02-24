import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseService } from "./firebase.service";

export class AuthenticationService extends FirebaseService {
  public static initialize() {
    this.getInstance();
  }

  public static signIn() {
    // initialize firebase
  }

  public static signOut() {}

  // public static authentication() {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   this.getInstance()
  //     .auth()
  //     .getRedirectResult()
  //     .then(result => {
  //       if (result.credential) {
  //         var credential = result.credential;
  //         var token = (<any>result).credential.accessToken;
  //       }
  //       var user = result.user;
  //     })
  //     .catch(error => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       var email = error.email;
  //       var credential = error.credential;
  //     });
  // }

  // public static signOut() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {})
  //     .catch(error => {});
  // }
}
