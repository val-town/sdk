// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ReferencesAPI from './references';

export class References extends APIResource {
  /**
   * Get vals that depend on any of the user's vals
   */
  list(query: ReferenceListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/me/references', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReferenceListParams {
  limit: number;

  offset: number;

  since?: string;

  until?: string;
}

export namespace References {
  export import ReferenceListParams = ReferencesAPI.ReferenceListParams;
}
