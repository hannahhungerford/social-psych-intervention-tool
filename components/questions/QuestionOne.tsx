import React from 'react'
import styles from '@styles/content.module.css'
import QuestionInput from '../questionInput';
import Button from '@mui/material/Button';
import { callbackify } from 'util';

type Props = {
    callBack: Function,
    handleBackBtn: Function,
    handleNextBtn: Function
};
function QuestionOne ({callBack, handleBackBtn, handleNextBtn}: Props) {

    function handleCallBack (newValue: number) {
      callBack(newValue, 1); 
    }

    return(
        <>
        <header>Question One</header>
          <div>question content</div>
          <QuestionInput callBack={handleCallBack}/>
          <div className={styles.btnRow}>
            <Button variant="contained" onClick={handleBackBtn()}>Back</Button>
            <Button variant="contained" onClick={handleNextBtn()}>Next</Button>
          </div>
        </>
    )
}

export default QuestionOne; 