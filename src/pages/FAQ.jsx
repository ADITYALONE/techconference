import { faqs } from "../data/data";
import FaqItem from "../components/FaqItem";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="page">
      <h1>Frequently Asked Questions</h1>
      <p className="page-subtitle">Everything you need to know before the conference.</p>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
