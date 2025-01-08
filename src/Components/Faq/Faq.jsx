import Style from "./Faq.module.css"
import  { useState } from "react";



export const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
  const faqs = [
    {
      question: " Worldwide delivery ?",
      answer:
        " Yes we deliver to all parts of the world, just make sure to put in the correct delivery details to avoid any complications.",
    },
    {
      question: " How do i get to know about new arrivals?",
      answer:
        "You can sign up to receive our news-letters on our latest products and also be notified about sales.",
    },
    {
      question: " How long does the delivery take ?",
      answer:
        "Nationwide delivery takes 2-4 working days while worldwide delivery takes a week or 2.",
    },
  ];

  return (
     <>
        <section className={Style.title}>
            <div>
                <div className={Style.bar}>
                    <span className={Style.barName}>Faq</span>
                </div>
            </div>
        </section>
        <div className={Style.pInfo}>
            Frequently Asked Questions
        </div>
        <section className={Style.questions}>
            <div className={Style.faq}>
                <div className={Style.faqSlide}>
                    {faqs.map((faq, index) => (
                    <div className={Style.faqItem} key={index}>
                        <div className={`${Style.question} ${activeIndex === index ? Style.active : ""}`}onClick={() => handleToggle(index)}style={{ cursor: "pointer" }}>
                            {faq.question}
                        </div>
                        <div className={Style.answer}style={{display: activeIndex === index ? "block" : "none",}}>
                            {faq.answer}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        </>       
  )
}



