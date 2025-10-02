// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { PageCursorURL, type PageCursorURLParams } from '../pagination';

/**
 * Get information about organizations you belong to
 */
export class Orgs extends APIResource {
  /**
   * Get all orgs you are a member of
   */
  list(
    query: OrgListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrgListResponsesPageCursorURL, OrgListResponse> {
    return this._client.getAPIList('/v2/orgs', OrgListResponsesPageCursorURL, { query, ...options });
  }
}

export class OrgListResponsesPageCursorURL extends PageCursorURL<OrgListResponse> {}

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

Orgs.OrgListResponsesPageCursorURL = OrgListResponsesPageCursorURL;

export declare namespace Orgs {
  export {
    type OrgListResponse as OrgListResponse,
    OrgListResponsesPageCursorURL as OrgListResponsesPageCursorURL,
    type OrgListParams as OrgListParams,
  };
}
