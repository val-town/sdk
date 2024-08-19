// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UsernameAPI from './username/username';

/**
 * Methods to translate between human-readable names and IDs
 */
export class Alias extends APIResource {
  username: UsernameAPI.Username = new UsernameAPI.Username(this._client);
}

export namespace Alias {
  export import Username = UsernameAPI.Username;
}
