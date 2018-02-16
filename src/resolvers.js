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
  }
};
