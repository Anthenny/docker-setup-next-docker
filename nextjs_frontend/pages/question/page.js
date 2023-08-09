'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import quizData from '../../data/quizData';

import checkbox from '@../../../public/icon/checkbox.png';
import checkboxTrue from '@../../../public/icon/checkboxTrue.png';
import arrow3 from '@../../../public/icon/arrow3.png';

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Set the selectedOption state when navigating between questions
    setSelectedOption(userAnswers[currentQuestion] || null);
  }, [currentQuestion, userAnswers]);

  const handleAnswer = (selectedOption) => {
    setUserAnswers({ ...userAnswers, [currentQuestion]: selectedOption });
    setSelectedOption(selectedOption);
  };

  const nextQuestion = () => {
    setUserAnswers({ ...userAnswers, [currentQuestion]: selectedOption });

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const answeredQuestionsCount = Object.keys(userAnswers).length;
  const progressBarWidth = (answeredQuestionsCount / quizData.length) * 100;

  return (
    <div className="fwQuestion container">
      {quizCompleted ? (
        <div className="completed">
          <h2>100% Completed</h2>
          <div className="completed__answers">
            {quizData.map((question, index) => (
              <div key={index}>
                <p>{`${index + 1}. ${question.question}`}</p>
                <p>{userAnswers[index] || 'geen antwoord'}</p>
              </div>
            ))}
          </div>
          <div className="button" style={{ width: 200 }}>
            <p>Besteling afronden</p>
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
                  className={`col ${selectedOption === option ? 'active' : ''}`}
                  key={index}
                  onClick={() => handleAnswer(option)}
                >
                  <span>
                    <Image
                      src={selectedOption === option ? checkboxTrue : checkbox}
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
