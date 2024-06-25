// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as Core from '@valtown/sdk/core';
import * as Shared from '@valtown/sdk/resources/shared';
import * as ValNameAPI from '@valtown/sdk/resources/alias/username/val-name';

export class Username extends APIResource {
  valName: ValNameAPI.ValName = new ValNameAPI.ValName(this._client);

  /**
   * Get basic details about a user, given their username
   */
  retrieve(username: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v1/alias/${username}`, options);
  }
}

export namespace Username {
  export import ValName = ValNameAPI.ValName;
  export import ValNameRetrieveResponse = ValNameAPI.ValNameRetrieveResponse;
}
