// npm
import { useState } from "react";
// styles
import styles from "./Control.module.css";

export default function Control({ onSend }) {
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => setContent(e.target.value);

  const handleContentSend = () => {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  };

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          placeholder="Message AI Chatbot"
          value={content}
          onChange={handleChangeContent}
        />
      </div>
      <button className={styles.Button} onClick={handleContentSend}>
        <SendIcon />
      </button>
    </div>
  );
}

const SendIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#7CA7D8"
    >
      <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
    </svg>
  );
};
