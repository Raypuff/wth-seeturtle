import { FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Image from "next/image";

import { auth, store } from "../firebase";
import firebase from "firebase";

const Chat: FC = ({ children }) => {
  const [user] = useAuthState(auth);

  return (
    <>
      <h1 className="text-3xl font-semibold text-white my-6">Chat</h1>
      <div className="bg-dark90 rounded-t-3xl p-4 h-80 overflow-y-scroll relative mb-[-1px]">
        <ChatRoom />
      </div>
      <SendMessage />
    </>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="flex w-full justify-center">
      <button
        onClick={signInWithGoogle}
        className="text-seeturtle-800 text-xl my-2 py-2 px-4 rounded-xl text-center font-black uppercase bg-gray-400 hover:bg-lightblue hover:text-white"
      >
        Sign in to chat
      </button>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function SendMessage() {
  const [user] = useAuthState(auth);
  const messagesRef = store.collection("messages");
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e: any) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
      photoURL: photoURL,
    });

    setFormValue("");
  };

  return (
    <div className=" bg-dark90 rounded-b-3xl">
      {user ? (
        <>
          <div className="w-full">
            <form onSubmit={sendMessage} className="w-full pl-4 pr-7 pt-2 pb-2">
              <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-400 text-seeturtle-800 focus:outline-none"
                placeholder="Send a message"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white mt-2 px-2 py-1 font-black text-sm rounded-md hover:bg-lightred hover:text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

function ChatRoom() {
  const messagesRef = store.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div className="relative">
      <div className="">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </div>
  );
}

function ChatMessage(props: any) {
  const { text, uid, photoURL } = props.message;

  const messageClass = auth.currentUser
    ? auth.currentUser.uid === uid
      ? "sent"
      : "received "
    : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="avatar" className="w-8 h-8 rounded-md" />
        <p className="text-white">{text}</p>
      </div>
    </>
  );
}

export default Chat;
