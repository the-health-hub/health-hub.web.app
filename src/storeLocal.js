import { socialCircleState} from "./views/GettingStarted/pages/Gs2Social";
import { healthDomainsState} from "./views/GettingStarted/pages/Gs3Domains";

let src = {
  ui: {
    __typename: 'ui',
    components: {
      __typename: 'components',
      sidebar: {
        __typename: 'sidebar',
        visibility: {
          __typename: 'visibility',
          'hidden': false,
          'visible': true,
        }['hidden']  // default
      }
    },
    viewMode: {
      __typename: 'viewMode',
      'normal': 'normal',
      'walkthrough': 'walkthrough'
    }['normal'] // default
  },
};


src.sidebar_visibility = src.ui.components.sidebar.visibility;
src.viewMode = src.ui.viewMode;
// src.appState = {};
// src.appState2 = {
//   __typename: 'AppState',
//   hello: 'hi',
//   hello2: 'hi2'
// };
// TODO: I should probably use this to store UI state.
// export const cacheAppStateKey = 'appState';
// src[cacheAppStateKey] = {__typename: cacheAppStateKey};

Object.assign(src, healthDomainsState);
Object.assign(src, socialCircleState);
// console.log(src);

export const localStore = src;
