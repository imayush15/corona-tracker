import { dataTypes } from '../utils/actionTypes';

export const setStates = (payload, dispatch) =>
  dispatch({ type: dataTypes.SET_STATE, payload });

export const setChartData = (payload, dispatch) =>
  dispatch({ type: dataTypes.SET_CHART_DATA, payload });
