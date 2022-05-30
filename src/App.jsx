import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CssBaseline, Grid,Toolbar, Container, CardContent } from '@material-ui/core';
import  {PhotoCamera}  from '@material-ui/icons';

import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color='textPrimary' gutterButtom>
                           Photo Album         
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' gutterButtom>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga possimus dolor eaque amet ipsa aperiam sint qui nemo magni atque distinctio quod dolore, hic pariatur, error id iste. Consectetur, laboriosam?       
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant='contained'color="primary">
                                        See my Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined'color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className = {classes.cardGrid} maxWidth = "md">
                    <Grid constainer spacing={4}>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        Description on the Above item.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default App;