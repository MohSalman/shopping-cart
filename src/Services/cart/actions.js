import {  SET_TOTAL_COST, SET_DATA, SET_PROMOCODE } from './constants';

export const setCost = (cost) => (dispatch: any) => {
  dispatch(setTotalCost(cost));
}

const setTotalCost = (cost) => ({
  type: SET_TOTAL_COST,
  data: cost
});


export const setData = (data) => (dispatch: any) => {
  dispatch({
    type: SET_DATA,
    data: data
  });
}

export const applyPromocode = (promocode) => (dispatch: any) => {
  dispatch({
    type: SET_PROMOCODE,
    data: promocode
  });
}
