// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembershipsAPI from './memberships';
import { Memberships } from './memberships';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

/**
 * Get information about organizations you belong to
 */
export class Orgs extends APIResource {
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);

  /**
   * Get all orgs you are a member of
   */
  list(
    query: OrgListParams,
    options?: RequestOptions,
  ): PagePromise<OrgListResponsesPageCursorURL, OrgListResponse> {
    return this._client.getAPIList('/v2/orgs', PageCursorURL<OrgListResponse>, { query, ...options });
  }
}

export type OrgListResponsesPageCursorURL = PageCursorURL<OrgListResponse>;

/**
 * An Org
 */
export interface OrgListResponse {
  /**
   * The id of the org
   */
  id: string;

  username: string;
}

export interface OrgListParams extends PageCursorURLParams {}

Orgs.Memberships = Memberships;

export declare namespace Orgs {
  export {
    type OrgListResponse as OrgListResponse,
    type OrgListResponsesPageCursorURL as OrgListResponsesPageCursorURL,
    type OrgListParams as OrgListParams,
  };

  export { Memberships as Memberships };
}
