/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import { createSelector } from 'reselect';

const selectAdmin = (state) => state.admin;

export const selectCurrentAdmin = createSelector([selectAdmin], (admin) => admin.currentAdmin);
export const selectDisplayName = createSelector(
  [selectCurrentAdmin],
  (currentAdmin) => currentAdmin.displayName
);
export const SelectHidden = createSelector([selectAdmin], (admin) => admin.hidden);
