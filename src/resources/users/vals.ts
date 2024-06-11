// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ValsAPI from './vals';

export class Vals extends APIResource {
  /**
   * List a user's vals
   */
  list(userid: string, query: ValListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/users/${userid}/vals`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ValListParams {
  limit: number;

  offset: number;
}

export namespace Vals {
  export import ValListParams = ValsAPI.ValListParams;
}
