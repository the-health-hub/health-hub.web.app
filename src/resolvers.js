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
    swpMutate: (_, { componentState }, { cache }) => {
      cache.writeData({ data: { componentState } });
      return { componentState, __typename: 'componentState' };
    },
    updateHappy: (_, { happyState }, { cache }) => {
      cache.writeData({data: {
        happy: {
          __typename:'happy',
          happyState: happyState
        }
      }});
      return null;
    }
  }
};
