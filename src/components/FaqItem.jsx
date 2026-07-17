import { useState } from "react";
import "./FaqItem.css";

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className={open ? "faq-icon faq-icon-open" : "faq-icon"}>+</span>
      </button>
      <div className={open ? "faq-answer faq-answer-open" : "faq-answer"}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
