// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ValNameAPI from './val-name';
import { ValName, ValNameRetrieveParams } from './val-name';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Username extends APIResource {
  valName: ValNameAPI.ValName = new ValNameAPI.ValName(this._client);

  /**
   * Get basic details about a user, given their username
   *
   * @example
   * ```ts
   * const user = await client.alias.username.retrieve(
   *   'username',
   * );
   * ```
   */
  retrieve(username: string, options?: RequestOptions): APIPromise<Shared.User> {
    return this._client.get(path`/v1/alias/${username}`, options);
  }
}

Username.ValName = ValName;

export declare namespace Username {
  export { ValName as ValName, type ValNameRetrieveParams as ValNameRetrieveParams };
}
