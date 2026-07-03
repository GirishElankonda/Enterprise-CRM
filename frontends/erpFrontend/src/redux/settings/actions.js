/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import * as actionTypes from './types';

export const settings = {
  currencySymbol:
    ({ value = '$' }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.SET_STATE,
        keyState: 'currencySymbol',
        payload: value,
      });
    },
  currencyPosition:
    ({ position = 'before' }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.SET_STATE,
        keyState: 'currencyPosition',
        payload: position,
      });
    },
};
