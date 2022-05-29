import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
 
const usestyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    }
}));

export default usestyles;