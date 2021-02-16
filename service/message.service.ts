import { IMessage } from "../models/Imessage";

export function getMessages(): Promise<IMessage[]> {
  return Promise.resolve([
    { id: 1, content: "hai", datetime: "nodate", isOwn: false },
    { id: 2, content: "how r u?", datetime: "nodate", isOwn: false },
    { id: 3, content: "hi, all good", datetime: "nodate", isOwn: true },
    { id: 4, content: "see u", datetime: "nodate", isOwn: false },
    { id: 5, content: "Ok", datetime: "nodate", isOwn: true }
  ]);
}
