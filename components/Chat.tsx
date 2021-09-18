import { FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth, store } from "../firebase"; 
import firebase from "firebase";

const Chat: FC = ({}) => {
    return (
        <>
            <ChatRoom/>
        </>
    )
}

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google to chat!</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    ) 
}

function SendMessage() {

    const [user] = useAuthState(auth);
    const messagesRef = store.collection('messages');
    const [formValue, setFormValue] = useState('')
    const sendMessage = async(e: any) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser; 

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: uid,
            photoURL: photoURL
        })

        setFormValue('');
   }

   return (
       <>
       {user ? 
       <>
           <form onSubmit={sendMessage}>
        <input value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/>
        <button type = 'submit'>Send</button>
    </form> 
    <SignOut/>
    </>: <SignIn/>}
       </>
   )

}

function ChatRoom() {
   const messagesRef = store.collection('messages');
   const query = messagesRef.orderBy('createdAt').limit(25);

   const [messages] = useCollectionData(query, {idField: 'id'});

   return (
   <>
    <div>
        {messages && messages.map(msg => <ChatMessage key = {msg.id} message = {msg}/>)}
    </div>
    <SendMessage/ > 
   </>
   )
}


function ChatMessage(props: any) {
    const {text, uid, photoURL} = props.message;

    const messageClass = auth.currentUser ? auth.currentUser.uid === uid ? "sent" : "received ": "received";

    return (
        <>
        <div className = {`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
        </>
    )
}

export default Chat;