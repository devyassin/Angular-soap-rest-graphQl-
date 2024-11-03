import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular'; // Import APOLLO_OPTIONS
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'; // Apollo Client and InMemoryCache
import { HttpLink } from 'apollo-angular/http'; // Apollo's HttpLink for connecting to GraphQL API
import { routes } from './app.routes';
import { environment } from '../environments/environment.development';

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri: environment.API_GraphQL }),
    cache: new InMemoryCache(),
  };
}
export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    graphqlProvider,
  ],
};
