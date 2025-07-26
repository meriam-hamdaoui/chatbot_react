// npm packages
import { useState } from "react";
// components
import Chat from "./components/Chatbot/Chat";
// data
import { MESSAGES } from "./const/Messages";
import robot from "./assets/chatbot.png";
// styles
import styles from "./App.module.css";

export default function App() {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src={robot} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
}
