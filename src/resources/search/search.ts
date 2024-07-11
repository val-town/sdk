// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as ValsAPI from '@valtown/sdk/resources/search/vals';

/**
 * Search endpoint for vals
 */
export class Search extends APIResource {
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);
}

export namespace Search {
  export import Vals = ValsAPI.Vals;
  export import ValListParams = ValsAPI.ValListParams;
}
