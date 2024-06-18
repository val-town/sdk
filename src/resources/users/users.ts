// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as ValsAPI from '@valtown/sdk/resources/users/vals';

export class Users extends APIResource {
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);
}

export namespace Users {
  export import Vals = ValsAPI.Vals;
}
