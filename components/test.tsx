import React from 'react'
import styles from '@styles/content.module.css'

import QuestionInput from './questionInput';

function questionAnswer (value : number) {
  console.log("test", value); 
}

function Test() {
  return (
      <QuestionInput callBack={questionAnswer}/>
  )
}

export default Test;