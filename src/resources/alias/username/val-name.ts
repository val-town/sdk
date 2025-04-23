// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class ValName extends APIResource {
  /**
   * Get a val
   */
  retrieve(username: string, valName: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Val> {
    return this._client.get(`/v2/alias/vals/${username}/${valName}`, options);
  }
}
