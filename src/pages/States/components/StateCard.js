import { Grid } from '@material-ui/core';
import {
  Card,
  CardActionArea,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import corona from '../../../assets/coorna- 1.png';

function StateCard({ districtName, confirmedCount }) {
  const { stateId } = useParams();

  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: theme.typography.pxToVw(200),
      maxWidth: theme.typography.pxToVw(200),
      minHeight: theme.typography.pxToVw(100),
      maxHeight: theme.typography.pxToVw(100),
      border: `1px solid ${theme.palette.primaryColor.red}`,
    },
    header: {
      background: theme.palette.primaryColor.red,
      color: theme.palette.primaryColor.white,
      zIndex: 5000,
    },
    headerText: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 'bold',
      fontFamily: theme.typography.fontFamily,
    },
    action: {
      background: theme.palette.primaryColor.black,
      minHeight: '70%',
    },
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    image: {
      objectFit: 'contain',
      width: theme.typography.pxToVw(30),
      height: theme.typography.pxToVw(30),
    },
    confirmedContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: theme.typography.pxToVw(150),
      maxWidth: theme.typography.pxToVw(150),
      color: theme.palette.primaryColor.white,
    },
    confirmedText: {
      fontSize: theme.typography.pxToVw(12),
      fontWeight: 'bold',
      fontFamily: theme.typography.fontFamily,
    },
    caseCount: {
      fontSize: theme.typography.pxToVw(10),
      fontWeight: 'bold',
      fontFamily: theme.typography.fontFamily,
    },
  }));
  const classes = useStyles();

  const handleCardClick = () => {
    history.push(
      `/state/${stateId}/${districtName.toLowerCase().replaceAll(' ', '_')}`
    );
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={
          <span className={classes.headerText}>
            {districtName.toUpperCase()}
          </span>
        }
        style={{ textAlign: 'center' }}
      />

      <CardActionArea className={classes.action} onClick={handleCardClick}>
        <Grid container>
          <Grid
            className={classes.mainContainer}
            item
            container
            justifyContent='space-between'>
            <motion.img
              className={classes.image}
              src={corona}
              alt=''
              animate={{ rotateZ: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                type: 'tween',
                ease: 'linear',
              }}
            />
            <div className={classes.confirmedContainer}>
              <span className={classes.confirmedText}>CONFIRMED CASES</span>
              <span className={classes.caseCount}>{confirmedCount}</span>
            </div>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default StateCard;
