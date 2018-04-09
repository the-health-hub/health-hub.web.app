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
  appState: {
    __typename: 'AppState',
  },
};
