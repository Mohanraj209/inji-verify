import React from 'react';
import {Grid, Typography} from '@mui/material';
import {convertToTitleCase, getDisplayValue} from "../../../../utils/common-utils";

function VcDisplayCard({vc}: any) {
    return (
        <Grid container style={{
            width: "calc(min(340px, 100vw))",
            margin: "auto",
            background: "white",
            borderRadius: "12px",
            padding: "5px 15px",
            boxShadow: "0px 3px 15px #0000000F",
            maxHeight: "420px",
            overflowY: "scroll"
        }}>
            {
                vc && Object.keys(vc.credentialSubject)
                    .filter(key => key?.toLowerCase() !== "id" && key?.toLowerCase() !== "type")
                    .map(key => (
                    <Grid item xs={12} lg={6} key={key} style={{
                        padding: "10px 4px"
                    }}>
                        <Typography style={{
                            font: "normal normal normal 11px/14px Inter",
                            marginBottom: "4px"
                        }}>
                            {convertToTitleCase(key)}
                        </Typography>
                        <Typography style={{font: "normal normal 600 12px/15px Inter"}}>
                            {getDisplayValue(vc.credentialSubject[key])}
                        </Typography>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default VcDisplayCard;
