// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as Shared from '@valtown/sdk/resources/shared';
import * as ValsAPI from '@valtown/sdk/resources/users/vals';

export class Users extends APIResource {
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);

  /**
   * Get basic information about a user
   */
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v1/users/${userId}`, options);
  }
}

export namespace Users {
  export import Vals = ValsAPI.Vals;
  export import ValListResponse = ValsAPI.ValListResponse;
  export import ValListParams = ValsAPI.ValListParams;
}
