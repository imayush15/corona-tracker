/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Loader from '../../common/components/Loader/Loader';
import StateCard from './components/StateCard';
import { motion } from 'framer-motion';

function StatesContainer() {
  const history = useHistory();
  const { stateId } = useParams();
  const [stateData, setStateData] = useState();
  const { states } = useSelector((state) => state.data);

  useEffect(() => {
    states.forEach((data) => {
      if (Object.keys(data)[0] === stateId) {
        setStateData(Object.values(data)[0]['districtData']);
      }
    });
  }, [stateId, states]);

  window.onbeforeunload = function (e) {
    e.returnValue = 'You will be taken to Homepage!';
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: theme.palette.primaryColor.black,
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      rowGap: theme.spacing(3),
      columnGap: theme.spacing(5),
      marginTop: theme.typography.pxToVw(15),
      minHeight: '86.2vh',
      padding: `0 ${theme.typography.pxToVw(25)}`,
    },
    name: {
      fontSize: theme.typography.pxToRem(60),
      fontFamily: theme.typography.fontFamily,
      fontWeight: 900,
      borderBottom: `3px solid ${theme.palette.primaryColor.white}`,
      color: theme.palette.primaryColor.red,

      marginBottom: theme.typography.pxToVw(30),
    },
    loader: {
      width: '80vw',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.typography.pxToVw(100),
    },
    [theme.breakpoints.down('md')]: {
      cardContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        rowGap: theme.spacing(2),
        columnGap: theme.spacing(3),
        marginTop: theme.typography.pxToVw(15),
        minHeight: '86.2vh',
        padding: `0 ${theme.typography.pxToVw(15)}`,
      },
      name: {
        fontSize: theme.typography.pxToRem(40),
        fontFamily: theme.typography.fontFamily,
        fontWeight: 900,
        borderBottom: `3px solid ${theme.palette.primaryColor.white}`,
        color: theme.palette.primaryColor.red,
        marginBottom: theme.typography.pxToVw(30),
      },
    },
  }));

  const classes = useStyles();

  const formatName = (name) => {
    return name.toUpperCase().replaceAll('_', ' ');
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
      y: '-100vw',
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      exit='exit'
      className={classes.container}>
      <div>
        <span className={classes.name}>{formatName(stateId)}</span>
      </div>
      <div className={classes.cardContainer}>
        {stateData ? (
          Object.keys(stateData).map((data) => (
            <StateCard
              districtName={data}
              confirmedCount={stateData[data]?.confirmed}
            />
          ))
        ) : (
          <div className={classes.loader}>
            <Loader />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default StatesContainer;
