import React from 'react'
import styles from '@styles/content.module.css'
import QuestionInput from '../questionInput';
import Button from '@mui/material/Button';

type Props = {
    callBack: Function,
    handleBackBtn: Function,
    handleNextBtn: Function
};

function QuestionTwo ({callBack, handleBackBtn, handleNextBtn}: Props) {

    function handleCallBack (newValue: number) {
      callBack(newValue, 2); 
    }

    return(
        <>
        <header>Question Two</header>
          <div>question content</div>
          <QuestionInput callBack={handleCallBack}/>
          <div className={styles.btnRow}>
            <Button variant="contained" onClick={event => handleBackBtn()}>Back</Button>
            <Button variant="contained" onClick={event => handleNextBtn()}>Next</Button>
          </div>
        </>
    )
}

export default QuestionTwo; 