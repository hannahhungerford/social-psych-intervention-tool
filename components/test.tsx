import React, { useState, Component, JSXElementConstructor} from 'react'
import styles from '@styles/content.module.css'
import QuestionOne from './questions/QuestionOne'
import QuestionTwo from './questions/QuestionTwo'
import QuestionThree from './questions/QuestionThree'


function Test(): JSX.Element {
  const NUM_QUESTIONS = 3; 
  const [questionRender, setQuestionRender] = useState(1);
  const [score, setScores] = useState([0,0,0])

  function questionAnswer (value : number, question : number) {
    var newScore = [...score];
    newScore[question-1] = value;
    setScores(newScore);
  }

  function handleBackBtn () {
    if (questionRender > 1){
      setQuestionRender(questionRender-1);
    }
  }
  
  function handleNextBtn () {
    if (questionRender < NUM_QUESTIONS){
      setQuestionRender(questionRender+1);
    }
  }

  switch (questionRender) {
    case 1:
      return (
        <QuestionOne
          handleBackBtn={handleBackBtn}
          handleNextBtn={handleNextBtn}
          callBack={questionAnswer}
        />
      );
    case 2:
      return (
        <QuestionTwo
          handleBackBtn={handleBackBtn}
          handleNextBtn={handleNextBtn}
          callBack={questionAnswer}
        />
      );
    case 3:
      return (
        <QuestionThree
          handleBackBtn={handleBackBtn}
          handleNextBtn={handleNextBtn}
          callBack={questionAnswer}
        />
      );
    default:
      return(<></>); 
  }
}

export default Test; 
