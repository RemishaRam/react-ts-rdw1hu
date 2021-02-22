import { IMessage } from "../models/Imessage";
import firebase from "firebase/app";
import "firebase/database";
import { FirebaseService } from "./firebase.service";

export class MessageService extends FirebaseService {
  private static PATH_PREFIX: string = "Chats";

  /**
   * Sends a message
   *
   * create/get firebase instance
   * get database reference also pass doc-string
   * call set of this reference
   */
  public static sendMessage(message: IMessage): Promise<unknown> {
    return this.getInstance()
      .getDBRef(MessageService.getPath(message.id + ""))
      .set(message);
  }

  public static subscribeMessages(
    callback: (messages: { [key: number]: IMessage }) => void
  ) {
    this.getInstance()
      .getDBRef(MessageService.getPath())
      .on("value", (snapshot: firebase.database.DataSnapshot) => {
        const message: { [key: number]: IMessage } = snapshot.val();
        message && callback(message);
      });
  }

  private static getPath(postfix?: string): string {
    return MessageService.PATH_PREFIX + (postfix ? "/" + postfix : "");
  }
}
