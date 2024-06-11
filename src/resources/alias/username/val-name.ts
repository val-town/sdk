// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';

export class ValName extends APIResource {
  /**
   * Get a val
   */
  retrieve(username: string, valName: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/alias/${username}/${valName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
