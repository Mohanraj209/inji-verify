import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import VerificationProgressTracker from "../components/Home/VerificationProgressTracker";
import VerificationSection from "../components/Home/VerificationSection";

function Home(props: any) {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <Grid container>
            <Grid item xs={6}>
                <VerificationProgressTracker activeStep={activeStep}/>
            </Grid>
            <Grid item xs={6}>
                <VerificationSection activeStep={activeStep} setActiveStep={setActiveStep}/>
            </Grid>
        </Grid>
    );
}

export default Home;
