import * as React from "react";
import { firebaseAuthConfig } from "../constants/auth.firebase.config";
import { AuthenticationService } from "../service/authentication.service";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

interface IProps {
  onLoginSuccess: (user: any) => void;
}

interface IState {}

export class FirebaseLogin extends React.Component<IProps, IState> {
  private unregisterAuthObserver: any;

  constructor(props: IProps) {
    super(props);
    AuthenticationService.initialize();
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.props.onLoginSuccess(user);
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={AuthenticationService.getAuth()}
        />
      </div>
    );
  }
}
