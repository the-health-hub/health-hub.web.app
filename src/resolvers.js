// noinspection JSUnusedGlobalSymbols
export default {
  Mutation: {
    sidebarOpenClose: (_, { sidebar_visibility }, { cache }) => {
      // noinspection JSUnresolvedFunction
      cache.writeData({ data: { sidebar_visibility } });
      return { sidebar_visibility, __typename: 'SidebarVisibility' };
    },
    sideBarToggle: (_, { sidebar_visibility }, { cache }) => {
      // noinspection JSUnresolvedFunction
      cache.writeData({ data: { sidebar_visibility } });
      return { sidebar_visibility, __typename: 'SidebarVisibility' };
    },
    updateAppState: (_, { key, val }, { cache }) => {
      let appState = {
          __typename: 'AppState',
        };
      appState[key] = val;
      cache.writeData({data: {appState}});
      return null;
    }
  }
};
