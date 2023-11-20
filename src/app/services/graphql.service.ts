import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {filter, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DocumentNode, NetworkStatus, WatchQueryFetchPolicy} from "@apollo/client";


export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  productAsset:{}
}

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {

  private readonly context = {
    headers: {},
  };

  constructor(private apollo: Apollo) {
  }

  query<T = any, V extends Record<string, any> = {}>(
    query: DocumentNode,
    variables?: V,
    fetchPolicy?: WatchQueryFetchPolicy
  ): Observable<T> {
    // Watch the GraphQL query using Apollo Client
    return this.apollo.watchQuery<T, V>({
      query,
      variables,
      context: this.context,
      fetchPolicy: fetchPolicy || 'cache-first',
    }).valueChanges.pipe(
      // Filter to get only results when network status is ready
      filter(result => result.networkStatus === NetworkStatus.ready),
      // Map the response to get the data
      map(response => response.data)
    );
  }

  mutate<T = any, V = any>(mutation: DocumentNode, variables?: V): Observable<T> {
    return this.apollo.mutate<T, V>({
      mutation,
      variables,
      context: this.context,
    }).pipe(map(response => response.data as T));
  }
}
