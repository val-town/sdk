// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as ValNameAPI from './val-name';
import { ValName } from './val-name';

export class Username extends APIResource {
  valName: ValNameAPI.ValName = new ValNameAPI.ValName(this._client);

  /**
   * Get basic details about a user, given their username
   */
  retrieve(username: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v1/alias/${username}`, options);
  }
}

Username.ValName = ValName;

export declare namespace Username {
  export { ValName as ValName };
}
