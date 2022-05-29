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
}));

export default usestyles;