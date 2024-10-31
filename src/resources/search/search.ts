// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ValsAPI from './vals';
import { ValListParams, Vals } from './vals';

/**
 * Search endpoint for vals
 */
export class Search extends APIResource {
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);
}

Search.Vals = Vals;

export declare namespace Search {
  export { Vals as Vals, type ValListParams as ValListParams };
}
