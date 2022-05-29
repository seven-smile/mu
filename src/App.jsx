import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CssBaseline, Grid,Toolbar, Container } from '@material-ui/core';
import  {PhotoCamera}  from '@material-ui/icons';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color='textPrimary' gutterButtom>
                           Photo Album         
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' gutterButtom>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga possimus dolor eaque amet ipsa aperiam sint qui nemo magni atque distinctio quod dolore, hic pariatur, error id iste. Consectetur, laboriosam?       
                        </Typography>
                        <div>
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
            </main>
        </>
    );
}

export default App;