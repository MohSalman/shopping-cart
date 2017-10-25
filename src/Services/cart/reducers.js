// @flow

import {  SET_TOTAL_COST, SET_DATA, SET_PROMOCODE } from './constants';

type StateType = {
  data : Array,
  totalCost: Number,
  promoCodeList:Array,
  noOfItems :Array,
  appliedPromocode: String
};

const initialState = {
  data : [],
  totalCost: 0,
  promoCodeList:[],
  appliedPromoCode:''
};

const cartReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_TOTAL_COST:
    return {
      ...state,
      totalCost: action.data
    };
    case SET_DATA:
    return {
      ...state,
      data: action.data
    };
    case SET_PROMOCODE:
    return {
      ...state,
      appliedPromoCode: action.data
    };
    default:
      return state;
  }
};

export default cartReducer;
