// noinspection NpmUsedModulesInstalled
import { ApolloClient} from 'apollo-client';
// noinspection NpmUsedModulesInstalled
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
// noinspection NpmUsedModulesI           Anstalled
// import { HttpLink } from 'apollo-link-http';
// noinspection NpmUsedModulesInstalled
import { ApolloLink } from 'apollo-link';
import resolvers from './resolvers';
import { localStore as defaults } from './storeLocal'

// const httpLink = new HttpLink({
//   uri: 'http://localhost:8080/graphql'
// });

const cache = new InMemoryCache();

// noinspection JSValidateTypes
const stateLink = withClientState({
  cache,
  resolvers,
  defaults
});

// const link = ApolloLink.from([stateLink, httpLink]);
const link = ApolloLink.from([stateLink]);

const store = new ApolloClient({
  link,
  cache
});

export default store;
