import {useState } from 'react';
import Test from './test';
import styles from '@styles/content.module.css'

import Button from '@mui/material/Button';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TestPage () {
    const [testOptionsDisplay, setTestOptionsDisplay] = useState(true); 
    const [testDisplay, setTestDisplay] = useState(0); 

    function handleClickTestBtn (test: number) {
        setTestOptionsDisplay(false);
        setTestDisplay(test); 
    }

    if (testOptionsDisplay){
        return (
            <div>
                <Accordion>
                <AccordionSummary 
                    aria-controls="panel1d-content" 
                    id="panel1d-header" 
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Test #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                    </Typography>
                    <div className={styles.takeTestBtn} > 
                        <Button variant="contained" onClick={event => handleClickTestBtn(1)}>Take Test Now</Button>
                    </div>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    aria-controls="panel1d-content" 
                    id="panel1d-header" 
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Test #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                    </Typography>
                    <div className={styles.takeTestBtn} > 
                        <Button variant="contained" onClick={event => handleClickTestBtn(2)}>Take Test Now</Button>
                    </div>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                    aria-controls="panel1d-content" 
                    id="panel1d-header" 
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Test #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                    </Typography>
                    <div className={styles.takeTestBtn} > 
                        <Button variant="contained" onClick={event => handleClickTestBtn(3)}>Take Test Now</Button>
                    </div>
                </AccordionDetails>
                </Accordion>
            </div>
        )
    }
    else {
        return (
            <Test testNum={testDisplay} />
        )
    }
}

export default TestPage; 