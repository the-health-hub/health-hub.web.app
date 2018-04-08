const src = {
  ui: {
    components: {
      sidebar: {
        visibility: {
          'hidden': false,
          'visible': true,
        }['hidden']  // default
      }
    },
    viewMode: {
      'normal': 'normal',
      'walkthrough': 'walkthrough'
    }['normal'] // default
  }
};

export const localStore = {
  sidebar_visibility: src.ui.components.sidebar.visibility,
  viewMode: src.ui.viewMode,
  swpMutate: {
    __typename: 'swpMutate',
    componentState: null
  },
  happy: {
    __typename:'happy',
    happyState: false
  }
};
