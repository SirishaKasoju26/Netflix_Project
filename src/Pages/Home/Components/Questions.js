import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
function Questions() {
  const data = [
    {
      question: "Question 1?",
      answer: "The Vampire Diaries is not afraid to take risks. The show is famous for its plot twists, and it's one of the reasons why it's so addictive.She was a 17-year-old high school girl at the beginning of this TV show.She turned into a vampire when she was 18 in Season four.",
    },
    {
      question: "Question 2?",
      answer: "The Vampire Diaries is not afraid to take risks. The show is famous for its plot twists, and it's one of the reasons why it's so addictive.",
    },
    {
      question: "Question 3?",
      answer: "The Vampire Diaries is not afraid to take risks. The show is famous for its plot twists, and it's one of the reasons why it's so addictive.",
    },
    {
      question: "Question 4?",
      answer: "The Vampire Diaries is not afraid to take risks. The show is famous for its plot twists, and it's one of the reasons why it's so addictive.",
    },
    {
      question: "Question 5?",
      answer: "The Vampire Diaries is not afraid to take risks. The show is famous for its plot twists, and it's one of the reasons why it's so addictive.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleShow = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <h1 className="heading">FAQ's</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i}>
                <div className="question" onClick={() => handleShow(i)}>
                  <h3>{item.question}</h3>
                  {selected === i ? (
                    <BiSolidUpArrow
                      size={30}
                      style={{
                        cursor: "pointer",
                        border: "1px solid white",
                        borderRadius: "50%",
                        padding: "5px",
                      }} />
                  ) : (
                    <BiSolidDownArrow
                      size={30}
                      style={{
                        cursor: "pointer",
                        border: "1px solid white",
                        borderRadius: "50%",
                        padding: "5px",
                      }} />
                  )}
                </div>
                <div className={selected === i ? "answer show" : "answer"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Questions;