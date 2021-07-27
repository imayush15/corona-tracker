/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import hand from '../../assets/hand.svg';
import distance from '../../assets/distance.svg';
import mask from '../../assets/mask.svg';
import home from '../../assets/home.svg';
import ambulance from '../../assets/ambulance.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

function DistrictContainer() {
  const history = useHistory();
  const [distriData, setDistrictData] = useState();
  const { stateId, districtId } = useParams();
  const { states } = useSelector((state) => state.data);
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  const animation = useAnimation();
  const name = toTitleCase(districtId).replaceAll('_', ' ').toUpperCase();

  useEffect(() => {
    if (!states) history.push('/');
    else {
      states.forEach((data) => {
        if (Object.keys(data)[0] === stateId) {
          const dis = districtId.replaceAll('_', ' ');
          const districtName = toTitleCase(dis);
          const inner = Object.values(data)[0]['districtData'][districtName];
          setDistrictData(inner);
        }
      });
    }
  }, [states]);
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      background: theme.palette.primaryColor.black,
    },
    distname: {
      textAlign: 'center',
    },
    name: {
      fontSize: theme.typography.pxToVw(42),
      color: theme.palette.primaryColor.red,
      fontWeight: 800,
      fontFamilty: theme.typography.fontFamily,
    },
    border: {
      backgroundColor: theme.palette.primaryColor.red,
      width: '60%',
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: theme.typography.pxToVw(380),
      maxWidth: theme.typography.pxToVw(380),
      background: theme.palette.primaryColor.white,
      marginTop: theme.typography.pxToVw(50),
      border: `${theme.typography.pxToRem(3)} solid ${
        theme.palette.primaryColor.red
      }`,
    },
    mainContainerHeader: {
      width: 'inherit',
      minWidth: theme.typography.pxToVw(380),
      maxWidth: theme.typography.pxToVw(380),
      padding: `0 ${theme.typography.pxToVw(32)}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: theme.palette.primaryColor.black,
    },
    mainContainerHeaderText: {
      fontSize: theme.typography.pxToVw(22),
      color: theme.palette.primaryColor.white,
      fontWeight: 900,
      fontFamilty: theme.typography.fontFamily,
    },
    statsContainer: {
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr 1fr 1fr',
      //   justifyContent: 'space-between',
      minWidth: theme.typography.pxToVw(380),
      maxWidth: theme.typography.pxToVw(380),
      minHeight: theme.typography.pxToVw(25),
      maxHeight: theme.typography.pxToVw(25),
      margin: `${theme.typography.pxToVw(6)} 0`,
      background: theme.palette.primaryColor.white,
    },
    left: {
      background: theme.palette.primaryColor.white,
      color: theme.palette.primaryColor.red,
      textAlign: 'center',
      //   minWidth: theme.typography.pxToVw(90),
      //   maxWidth: theme.typography.pxToVw(90),
    },
    leftText: {
      fontSize: theme.typography.pxToVw(19),
      fontWeight: 900,
      fontFamilty: theme.typography.fontFamily,
      color: theme.palette.primaryColor.red,
      marginLeft: theme.typography.pxToVw(20),
    },
    middle: {
      background: theme.palette.primaryColor.red,
      color: theme.palette.primaryColor.white,
      minWidth: theme.typography.pxToVw(120),
      maxWidth: theme.typography.pxToVw(120),
      minHeight: theme.typography.pxToVw(25),
      maxHeight: theme.typography.pxToVw(25),
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItem: 'center',
      justifyContent: 'center',
    },
    middleText: {
      fontSize: theme.typography.pxToVw(14),
      fontWeight: 900,
      fontFamlity: theme.typography.fontFamily,
    },
    right: {
      background: theme.palette.primaryColor.black,
      textAlign: 'center',
      minHeight: theme.typography.pxToVw(25),
      maxHeight: theme.typography.pxToVw(25),
    },
    rightText: {
      fontSize: theme.typography.pxToVw(19),
      fontWeight: 900,
      fontFamilty: theme.typography.fontFamily,
      color: theme.palette.primaryColor.red,
      marginLeft: theme.typography.pxToVw(55),
    },
    precautions: {
      border: `${theme.typography.pxToRem(3)} solid ${
        theme.palette.primaryColor.red
      }`,
      minWidth: theme.typography.pxToVw(620),
      maxWidth: theme.typography.pxToVw(620),
      minHeight: theme.typography.pxToVw(400),
      maxHeight: theme.typography.pxToVw(400),
      padding: `${theme.typography.pxToVw(10)} ${theme.typography.pxToVw(4)}`,
      margin: `${theme.typography.pxToVw(100)} 0`,
    },
    precautionsHeader: {
      fontSize: theme.typography.pxToVw(25),
      fontWeight: 900,
      fontFamily: theme.typography.fontFamily,
      textAlign: 'center',
      color: theme.palette.primaryColor.red,
    },
    borderSecond: {
      backgroundColor: theme.palette.primaryColor.red,
      width: '10%',
      marginTop: theme.typography.pxToVw(-4),
    },
    odd: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: `0 ${theme.typography.pxToVw(25)}`,
    },
    even: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
      padding: `0 ${theme.typography.pxToVw(25)}`,
    },
    img: {
      objectFit: 'contain',
      width: theme.typography.pxToVw(50),
      height: theme.typography.pxToVw(50),
    },
    textOdd: {
      fontSize: theme.typography.pxToVw(13),
      maxWidth: theme.typography.pxToVw(360),
      marginLeft: theme.typography.pxToVw(30),
      color: theme.palette.primaryColor.white,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    textEven: {
      fontSize: theme.typography.pxToVw(13),
      maxWidth: theme.typography.pxToVw(360),
      marginRight: theme.typography.pxToVw(30),
      color: theme.palette.primaryColor.white,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: '100vw',
      });
    }
  }, [inView]);

  const classes = useStyles();

  const randomfill = (number) => {
    const random = Math.random() * 10;
    const y = Math.floor(random);
    return number - y;
  };

  return (
    <div className={classes.container}>
      <div className={classes.distname}>
        <span className={classes.name}> {name} </span>
        <hr className={classes.border} />
      </div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className={classes.mainContainer}>
        <div className={classes.mainContainerHeader}>
          <span className={classes.mainContainerHeaderText}>TOTAL</span>
          <span className={classes.mainContainerHeaderText}>DELTA</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className={classes.statsContainer}>
        <div className={classes.left}>
          <span className={classes.leftText}>{distriData?.active}</span>
        </div>
        <div className={classes.middle}>
          <span className={classes.middleText}>ACTIVE</span>
        </div>
        <div classNam={classes.right}>
          <span className={classes.rightText}>
            {randomfill(distriData?.active)}
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className={classes.statsContainer}>
        <div className={classes.left}>
          <span className={classes.leftText}> {distriData?.confirmed} </span>
        </div>
        <div className={classes.middle}>
          <span className={classes.middleText}>CONFIRMED</span>
        </div>
        <div classNam={classes.right}>
          <span className={classes.rightText}>
            {distriData?.delta.confirmed}
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className={classes.statsContainer}>
        <div className={classes.left}>
          <span className={classes.leftText}>{distriData?.deceased}</span>
        </div>
        <div className={classes.middle}>
          <span className={classes.middleText}>DECEASED</span>
        </div>
        <div classNam={classes.right}>
          <span className={classes.rightText}>
            {distriData?.delta.deceased}
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className={classes.statsContainer}>
        <div className={classes.left}>
          <span className={classes.leftText}>{distriData?.recovered}</span>
        </div>
        <div className={classes.middle}>
          <span className={classes.middleText}>RECOVERED</span>
        </div>
        <div classNam={classes.right}>
          <span className={classes.rightText}>
            {distriData?.delta.recovered}
          </span>
        </div>
      </motion.div>

      <div ref={ref} className={classes.precautions}>
        <div className={classes.precautionsHeader}>
          <span>PRECAUTIONS</span>
          <hr className={classes.borderSecond} />
        </div>
        <motion.div animate={animation} className={classes.odd}>
          <img className={classes.img} src={hand} alt='hand' />
          <p className={classes.textOdd}>
            Clean your hands often. Use soap and water, or an alcohol-based
            handrub.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1 }}
          className={classes.even}>
          <img className={classes.img} src={distance} alt='' />
          <p className={classes.textEven}>
            maintain a safe distance from anyone who is coughing or sneezing
          </p>
        </motion.div>
        <motion.div animate={animation} className={classes.odd}>
          <img className={classes.img} src={mask} alt='hand' />
          <p className={classes.textOdd}>
            wear a mask when physical distancing is not possible
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1 }}
          className={classes.even}>
          <img className={classes.img} src={home} alt='' />
          <p className={classes.textEven}>stay home if you feel unwell</p>
        </motion.div>
        <motion.div animate={animation} className={classes.odd}>
          <img className={classes.img} src={ambulance} alt='hand' />
          <p className={classes.textOdd}>
            if you have fever, cough and difficulty breathing, seek medical
            Attention
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default DistrictContainer;
