/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
const contextSelectors = (state) => {
  return {
    isModalOpen: () => {
      return state.isModalOpen;
    },
    isPanelOpen: () => {
      return state.isPanelOpen;
    },
    isBoxOpen: () => {
      return state.isBoxOpen;
    },
  };
};

export default contextSelectors;
