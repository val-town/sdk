// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

/**
 * Get information about organizations you belong to
 */
export class Orgs extends APIResource {
  /**
   * Get all orgs you are a member of
   */
  retrieve(query: OrgRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<OrgRetrieveResponse> {
    return this._client.get('/v2/orgs', { query, ...options });
  }
}

/**
 * A paginated result set
 */
export interface OrgRetrieveResponse {
  data: Array<OrgRetrieveResponse.Data>;

  /**
   * Links to use for pagination
   */
  links: Shared.PaginationLinks;
}

export namespace OrgRetrieveResponse {
  /**
   * An Org
   */
  export interface Data {
    /**
     * The id of the org
     */
    id: string;

    username: string;
  }
}

export interface OrgRetrieveParams {
  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

  /**
   * Number of items to skip in order to deliver paginated results
   */
  offset: number;
}

export declare namespace Orgs {
  export { type OrgRetrieveResponse as OrgRetrieveResponse, type OrgRetrieveParams as OrgRetrieveParams };
}
