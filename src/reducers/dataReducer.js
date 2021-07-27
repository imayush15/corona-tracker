import { dataTypes } from '../utils/actionTypes';

const initState = {
  states: '',
  chartData: '',
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case dataTypes.SET_STATE: {
      return {
        ...state,
        states: action.payload,
      };
    }
    case dataTypes.SET_CHART_DATA: {
      return {
        ...state,
        chartData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
