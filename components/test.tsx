import React, { useState, Component, JSXElementConstructor, useEffect} from 'react'
import styles from '@styles/content.module.css'
import Question from './questions/Question'
import {TestData} from './testData'


function Test(): JSX.Element {
  const [questionRender, setQuestionRender] = useState(1);
  const [scores, setScores] = useState([0,0,0]);
  const [results, setResults] = useState({conceptScores: "", resultMessage: ""}); 

  function questionAnswer (value : number, question : number) {
    var newScore = [...scores];
    if(question >= 1 && question <= 4){
      newScore[0] = newScore[0] + value;
    } 
    else if (question >= 5 && question <= 8){
      newScore[1] = newScore[1] + value;
    }
    else {
      newScore[2] = newScore[2] + value;
    }
    setScores(newScore);
  }

  function handleBackBtn () {
    if (questionRender > 1){
      setQuestionRender(questionRender-1);
    }
  }

  function renderResult() {
    console.log("here"); 
    let resultMessage; 
    let totalScore = 0;
    let conceptScores = "This test analyzes your social media across three social psychological key concepts. ";

    for (let i = 0; i < scores.length; i += 1) {
      totalScore += scores[i];
      conceptScores += "You scored ";

      if (scores[i] <= 6){
        conceptScores += "low in your ";
      }
      else if (scores[i] >= 7 && scores[i] <= 11){
        conceptScores += "moderately in your ";
      } else {
        conceptScores += "highly in your ";
      }
      conceptScores += TestData.concepts[i] + ". ";  
    }
    
    //compute message
    if (totalScore >= 20 && totalScore <= 39){
      resultMessage = TestData.resultMessags.lowRange;
    }
    else if (totalScore >= 40){
      resultMessage = TestData.resultMessags.midRange;
    }
    else {
      resultMessage = TestData.resultMessags.highRange;
    }

    let results = {
      conceptScores: conceptScores, 
      resultMessage: resultMessage
    }

    setResults(results); 
  }
  
  function handleNextBtn () {
    if (questionRender < TestData.numQuestions){
      setQuestionRender(questionRender+1);
    }
    else if (questionRender == TestData.numQuestions){ 
      renderResult(); 
      setQuestionRender(questionRender+1);
    }
  }

<<<<<<< HEAD
  return (
    <>
      <header>
        {"Social Media Intervention Test"}
      </header>
      <Question
      handleBackBtn={handleBackBtn}
      handleNextBtn={handleNextBtn}
      callBack={questionAnswer}
      questionContent={TestData.questions[questionRender-1]}
      questionNum={questionRender}
      resultsMessage={results}
    />
    </>
  )
=======
  useEffect(() => {
    switch(testNum) {
      case 1:
        setTestData(TestOneData); 
      case 2:
        setTestData(TestTwoData); 
      case 3:
        setTestData(TestThreeData); 
    }

  }, [testNum])

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
>>>>>>> 040140d5511e5d7820403e90cd3d8505a2357bee
}

export default Test; 
