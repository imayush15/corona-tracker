import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import corona from '../../../assets/coorna- 1.png';

const loaderVariants = {
  animationOne: {
    x: [-30, 30],
    y: [20, -20],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loader: {
    width: theme.typography.pxToVw(35),
    height: theme.typography.pxToVw(35),
    margin: `${theme.typography.pxToVw(40)} auto`,
    borderRadius: 100,
    color: theme.palette.primaryColor.white,
  },
  text: {
    fontSize: theme.typography.pxToRem(25),
    color: theme.palette.primaryColor.white,
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.typography.pxToVw(-25),
    letterSpacing: theme.spacing(0.5),
    fontWeight: 900,
  },
}));

function Loader({ text }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <motion.img
        src={corona}
        className={classes.loader}
        variants={loaderVariants}
        animate='animationOne'></motion.img>
      <span className={classes.text}>{text}</span>
    </div>
  );
}

export default Loader;
