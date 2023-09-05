'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import quizData from '../../data/quizData';

import checkbox from '@../../../public/icon/checkbox.png';
import checkboxTrue from '@../../../public/icon/checkboxTrue.png';
import arrow3 from '@../../../public/icon/arrow3.png';
import Link from 'next/link';

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOptionsCounts, setSelectedOptionsCounts] = useState(
    Array(quizData.length).fill(0)
  );

  useEffect(() => {
    // Set the selectedOption state when navigating between questions
    setSelectedOption(userAnswers[currentQuestion] || {});
  }, [currentQuestion, userAnswers]);

  const handleAnswer = (selectedOption) => {
    const isSelected = userAnswers[currentQuestion] && userAnswers[currentQuestion][selectedOption];

    // Check if the option is selected or deselected and update the count accordingly
    const updatedSelectedOptionsCounts = [...selectedOptionsCounts];
    updatedSelectedOptionsCounts[currentQuestion] += isSelected ? -1 : 1;

    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: {
        ...userAnswers[currentQuestion],
        [selectedOption]: !isSelected,
      },
    });

    setSelectedOptionsCounts(updatedSelectedOptionsCounts);
  };

  const nextQuestion = () => {
    const selectedOptionsCount = selectedOptionsCounts[currentQuestion];

    if (selectedOptionsCount >= 3) {
      setUserAnswers({ ...userAnswers, [currentQuestion]: selectedOption });

      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
      }
    } else {
      alert('Kies minimaal 3 antwoorden voordat je doorgaat naar de volgende vraag.');
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const answeredQuestionsCount = selectedOptionsCounts.filter((count) => count >= 3).length;
  const progressBarWidth = Math.min((answeredQuestionsCount / quizData.length) * 100, 100);

  const handelSaveAnswers = () => {
    console.log(combineObjects(userAnswers, quizData));
  };

  // zorg er voor dat ik array [{answer: [answer, answer], question: "wat de vraag was"}]
  const combineObjects = (obj1, obj2) => {
    return obj2.map((item, index) => {
      const answers = Object.keys(obj1[index]);
      return {
        question: item.question,
        answer: answers.map((key) => key),
      };
    });
  };

  return (
    <div className="fwQuestion container">
      {quizCompleted ? (
        <div className="completed">
          <h2>100% Completed</h2>
          <div className="completed__answers">
            {quizData.map((question, index) => (
              <div key={index}>
                <p>{`${index + 1}. ${question.question}`}</p>
                <p>
                  {Object.entries(userAnswers[index] || {}).map(([key, value], i) => (
                    <span key={i}>
                      {value ? (
                        <span>{key}</span> // Render the selected options
                      ) : (
                        <span>No answer</span> // Render something else if no answer is selected
                      )}
                      {i !== Object.entries(userAnswers[index]).length - 1 && ', '}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="button" style={{ width: 200 }}>
            <Link href={'/winkelmand'}>
              <p onClick={handelSaveAnswers}>Bestelling afronden</p>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>{quizData[currentQuestion].question}</h2>
          <p>Kies minimaal 3 opties</p>
          <div className="cQuestion">
            <div className="top__col">
              {quizData[currentQuestion].options.map((option, index) => (
                <div
                  className={`col ${userAnswers[currentQuestion]?.[option] ? 'col__active' : ''}`}
                  key={index}
                  onClick={() => handleAnswer(option)}
                >
                  <span>
                    <Image
                      src={userAnswers[currentQuestion]?.[option] ? checkboxTrue : checkbox}
                      fill
                      alt="checkbox icon"
                    />
                  </span>
                  <p> {option}</p>
                </div>
              ))}
            </div>
            <div className="bottom__col">
              <div className="col" onClick={previousQuestion} disabled={currentQuestion === 0}>
                <span>
                  <Image src={arrow3} fill alt="arrow icon" />
                </span>
                <p>Vorige vraag</p>
              </div>

              <div className="percentecDiv">
                <div className="percentecLine" style={{ width: `${progressBarWidth}%` }} />
              </div>

              <div
                className="col"
                onClick={() => {
                  nextQuestion();
                  setSelectedOption(null);
                }}
                disabled={selectedOption === null}
              >
                <p>Volgende vraag</p>
                <span>
                  <Image src={arrow3} fill alt="arrow icon" className="left" />
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      <span className="QuestionNumber">
        {currentQuestion + 1} / {quizData.length}
      </span>
    </div>
  );
};

export default page;
