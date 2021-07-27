/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import India from '../../common/components/Map/India';
import corona from '../../assets/coorna- 1.png';
import rect from '../../assets/Rectangle 1.svg';
import { motion } from 'framer-motion';
import Chart from '../../common/components/Chart/Chart';
import { useSelector } from 'react-redux';
import Loader from '../../common/components/Loader/Loader';
import { setChartData } from '../../actions/dataActions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

function HomepageContainer() {
  const [state, setState] = useState(31300000);
  const chartState = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  useEffect(() => console.log(inView), [inView]);

  const useStyles = makeStyles((theme) => ({
    container: {
      background: theme.palette.primaryColor.black,
      overflow: 'hidden',
    },
    header: {
      fontFamilty: theme.typography.fontFamily,
      display: 'flex',
      flexDirection: 'column',
      //   alignItems: 'center',
      color: theme.palette.primaryColor.red,

      '&:hover': {
        '& $headerText': {
          color: theme.palette.primaryColor.white,
        },
        '& $headerBottomText': {
          color: theme.palette.primaryColor.red,
        },
        '& $headerBottomImg': {
          transform: 'scale(1.1)',
          filter: 'brightness(100)',
        },
      },
    },
    headerText: {
      fontSize: theme.typography.pxToRem(130),
      fontWeight: 'bold',
    },
    image: {
      objectFt: 'contain',
      width: theme.typography.pxToVw(55),
      margin: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(
        14
      )} 0 ${theme.typography.pxToRem(14)}`,
    },
    headerBottom: {
      display: 'flex',
      alignItems: 'center',
      minWidth: theme.typography.pxToVw(400),
      maxWidth: theme.typography.pxToVw(400),
      marginTop: theme.typography.pxToVw(-125),
    },
    headerBottomText: {
      fontSize: theme.typography.pxToRem(90),
      zIndex: 500,
      fontWeight: 'bold',
      marginRight: theme.typography.pxToVw(10),
      color: theme.palette.primaryColor.white,
    },
    headerBottomImg: {
      objectFit: 'contain',
      width: theme.typography.pxToVw(120),
      transition: 'transform 0.5s',
    },
    casesContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    totalCasesText: {
      fontSize: theme.typography.pxToRem(22),
      background: theme.palette.primaryColor.red,
      color: theme.palette.primaryColor.white,
      textAlign: 'center',
      minWidth: theme.typography.pxToVw(90),
      maxWidth: theme.typography.pxToVw(90),
      fontWeight: 'bold',
      padding: theme.typography.pxToVw(5),
    },
    caseCount: {
      fontSize: theme.typography.pxToRem(92),
      color: theme.palette.primaryColor.white,
      fontWeight: 800,
      marginTop: theme.typography.pxToRem(-8),
    },
    design1: {
      minWidth: theme.typography.pxToVw(15),
      maxWidth: theme.typography.pxToVw(15),
      minHeight: theme.typography.pxToVw(70),
      maxHeight: theme.typography.pxToVw(70),
      background: theme.palette.primaryColor.red,
      position: 'absolute',
      right: 0,
      top: 0,
      opacity: 0.6,
      '&:hover': {
        opacity: 1,
      },
    },
    design2: {
      minWidth: theme.typography.pxToVw(15),
      maxWidth: theme.typography.pxToVw(15),
      minHeight: theme.typography.pxToVw(70),
      maxHeight: theme.typography.pxToVw(70),
      background: theme.palette.primaryColor.gray,
      position: 'absolute',
      left: 0,
      bottom: 0,
      opacity: 0.6,

      '&:hover': {
        opacity: 1,
      },
    },
    loadContainer: {
      minHeight: '100vh',
      background: theme.palette.primaryColor.black,
      paddingTop: theme.typography.pxToVw(100),
    },
    chartContainer: {
      padding: `${theme.typography.pxToVw(20)} ${theme.typography.pxToVw(15)}`,
      background: theme.palette.primaryColor.black,
    },
    [theme.breakpoints.down('sm')]: {
      itemContainer: {
        display: 'felx',
        flexDirection: 'column-reverse',
        alignItems: 'center',
      },
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    let myInterval = setInterval(() => {
      setState(state + 1);
    }, 1500);
    return () => {
      clearInterval(myInterval);
    };
  }, [state]);

  useEffect(() => {
    const effect = async () => {
      const res = await axios.get(
        'https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1'
      );
      const result = [];
      for (let i = 100; i < 400; i++) {
        const activeCount = res.data[i].activeCases;
        result.push(activeCount);
      }
      console.log(res);
      setChartData(result, dispatch);
    };
    effect();
  }, []);

  const formatNumber = (inputNumber) => {
    let formetedNumber = Number(inputNumber)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let splitArray = formetedNumber.split('.');
    if (splitArray.length > 1) {
      formetedNumber = splitArray[0];
    }
    return formetedNumber;
  };
  const containerVariants = {
    hidden: {
      x: -500,
    },
    visible: {
      x: 0,
      transition: { duration: 0.6, type: 'spring' },
    },
    hiddenRight: {
      y: -500,
    },
    visibleRight: {
      y: 0,
      transition: { duration: 0.6, type: 'spring' },
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <motion.div variants={containerVariants} exit='exit'>
      <Grid container className={classes.container}>
        <Grid item container xs={12} className={classes.itemContainer}>
          <Grid item>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'>
              <India />
            </motion.div>
          </Grid>
          <Grid item direction='row'>
            <motion.div
              className={classes.header}
              variants={containerVariants}
              initial='hiddenRight'
              animate='visibleRight'>
              <p className={classes.headerText}>
                COR
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
                NA
              </p>
              <div className={classes.headerBottom}>
                <p className={classes.headerBottomText}>TRACKER</p>
                <img src={rect} className={classes.headerBottomImg} alt='' />
              </div>
              <div className={classes.casesContainer}>
                <div className={classes.totalCasesText}>
                  <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}>
                    TOTAL CASES
                  </motion.div>
                </div>
                <p className={classes.caseCount}>{formatNumber(state)}</p>
              </div>
              <div className={classes.design1}></div>
              <div className={classes.design2}></div>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
      <div ref={ref}>
        {chartState.chartData && inView ? (
          <div className={classes.chartContainer}>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }}>
              <Chart />
            </motion.div>
          </div>
        ) : (
          <div className={classes.loadContainer}>
            <Loader
              text={<h3>Please Wait While Chart is Being Loaded...</h3>}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default HomepageContainer;
