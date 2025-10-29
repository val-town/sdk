// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ValName extends APIResource {
  /**
   * Get a val
   *
   * @example
   * ```ts
   * const val = await client.alias.username.valName.retrieve(
   *   'val_name',
   *   { username: 'username' },
   * );
   * ```
   */
  retrieve(valName: string, params: ValNameRetrieveParams, options?: RequestOptions): APIPromise<Shared.Val> {
    const { username } = params;
    return this._client.get(path`/v2/alias/vals/${username}/${valName}`, options);
  }
}

export interface ValNameRetrieveParams {
  /**
   * Username of the user whose val you are looking for
   */
  username: string;
}

export declare namespace ValName {
  export { type ValNameRetrieveParams as ValNameRetrieveParams };
}
