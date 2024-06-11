// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as UsernameAPI from '@valtown/sdk/resources/alias/username/username';

export class Alias extends APIResource {
  username: UsernameAPI.Username = new UsernameAPI.Username(this._client);
}

export namespace Alias {
  export import Username = UsernameAPI.Username;
  export import UsernameRetrieveResponse = UsernameAPI.UsernameRetrieveResponse;
}
