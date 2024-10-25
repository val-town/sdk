// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ReferencesAPI from './references';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class References extends APIResource {
  /**
   * Get vals that depend on any of the user's vals
   */
  list(
    query: ReferenceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReferenceListResponsesPageCursorURL, ReferenceListResponse> {
    return this._client.getAPIList('/v1/me/references', ReferenceListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class ReferenceListResponsesPageCursorURL extends PageCursorURL<ReferenceListResponse> {}

/**
 * A description of a dependency from one val (reference) to another (dependsOn)
 * that was introduced at a particular time.
 */
export interface ReferenceListResponse {
  /**
   * A val in a dependency relationship
   */
  dependsOn: ReferenceListResponse.DependsOn;

  /**
   * A val in a dependency relationship
   */
  reference: ReferenceListResponse.Reference;

  referencedAt: string;
}

export namespace ReferenceListResponse {
  /**
   * A val in a dependency relationship
   */
  export interface DependsOn {
    /**
     * The id of this val
     */
    id: string;

    /**
     * The ID of the person who authored this val
     */
    author_id: string | null;

    /**
     * The name of this val
     */
    name: string;

    /**
     * The username of the person who authored this val
     */
    username: string | null;
  }

  /**
   * A val in a dependency relationship
   */
  export interface Reference {
    /**
     * The id of this val
     */
    id: string;

    /**
     * The ID of the person who authored this val
     */
    author_id: string | null;

    /**
     * The name of this val
     */
    name: string;

    /**
     * The username of the person who authored this val
     */
    username: string | null;
  }
}

export interface ReferenceListParams extends PageCursorURLParams {
  /**
   * Include items created after this date
   */
  since?: string;

  /**
   * Include items created before this date
   */
  until?: string;
}

export namespace References {
  export type ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
  export import ReferenceListResponsesPageCursorURL = ReferencesAPI.ReferenceListResponsesPageCursorURL;
  export type ReferenceListParams = ReferencesAPI.ReferenceListParams;
}
