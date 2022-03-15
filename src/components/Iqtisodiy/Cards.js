import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import {  CardActionArea, CardActions } from '@mui/material';
import React from 'react';
import './Cards.css'
import ten1 from '../../images/tendir1.png';
import ten2 from '../../images/tendir2.png';
import ten3 from '../../images/tendir3.png';

function Cards() {
  return(
    <div className='cards_img' id='tendir-malumotlari'>
        <Card className='cards_text'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image={ten1}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Gracon will be working with City of Idaho Falls on Runner Hub Rebuild project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gracon’s Hydro Division has just been awarded the Runner Hub Rebuild project for City of Idaho Falls at their Lower Plant.  This job will include the removal of the Lower Plant access hatches/covers, disassembly, reassembly, and installation of runner and runner hub.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                15 July, 2021
                </Button>
            </CardActions>
        </Card>

        <Card className='cards_text'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image={ten2}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Gracon will be working with City of Idaho Falls on Runner Hub Rebuild project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gracon’s Hydro Division has just been awarded the Runner Hub Rebuild project for City of Idaho Falls at their Lower Plant.  This job will include the removal of the Lower Plant access hatches/covers, disassembly, reassembly, and installation of runner and runner hub.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                15 July, 2021
                </Button>
            </CardActions>
        </Card>

        <Card className='cards_text'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image={ten3}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Gracon will be working with City of Idaho Falls on Runner Hub Rebuild project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gracon’s Hydro Division has just been awarded the Runner Hub Rebuild project for City of Idaho Falls at their Lower Plant.  This job will include the removal of the Lower Plant access hatches/covers, disassembly, reassembly, and installation of runner and runner hub.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                15 July, 2021
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Cards;
