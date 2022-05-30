import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
 
const usestyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icons: {
        marginRight: "20px",

    },
    buttons: {
        marginTop: "40px"

    },
    cardGrid: {
        padding: "20px 0"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%" // 16:9 (the viewing default of most monitors)
    },
    cardContent: {
    flexGrow: 1,
    },
}));

export default usestyles;