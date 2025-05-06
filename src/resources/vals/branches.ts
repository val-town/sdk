// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class Branches extends APIResource {
  /**
   * Create a new branch
   *
   * @example
   * ```ts
   * const branch = await client.vals.branches.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     name: 'my-branch',
   *     branchId: '00000000-0000-0000-0000-000000000000',
   *   },
   * );
   * ```
   */
  create(
    valId: string,
    body: BranchCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BranchCreateResponse> {
    return this._client.post(`/v2/vals/${valId}/branches`, { body, ...options });
  }

  /**
   * Get a branch by id
   *
   * @example
   * ```ts
   * const branch = await client.vals.branches.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(
    valId: string,
    branchId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BranchRetrieveResponse> {
    return this._client.get(`/v2/vals/${valId}/branches/${branchId}`, options);
  }

  /**
   * List all branches for a val
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const branchListResponse of client.vals.branches.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { limit: 1, offset: 0 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    valId: string,
    query: BranchListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BranchListResponsesPageCursorURL, BranchListResponse> {
    return this._client.getAPIList(`/v2/vals/${valId}/branches`, BranchListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }

  /**
   * Delete a branch
   *
   * @example
   * ```ts
   * await client.vals.branches.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(valId: string, branchId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v2/vals/${valId}/branches/${branchId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class BranchListResponsesPageCursorURL extends PageCursorURL<BranchListResponse> {}

/**
 * A Branch
 */
export interface BranchCreateResponse {
  /**
   * The id of the branch
   */
  id: string;

  createdAt: string;

  /**
   * The id of the branch this branch was forked from
   */
  forkedBranchId: string | null;

  links: BranchCreateResponse.Links;

  name: string;

  updatedAt: string;

  version: number;
}

export namespace BranchCreateResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

/**
 * A Branch
 */
export interface BranchRetrieveResponse {
  /**
   * The id of the branch
   */
  id: string;

  createdAt: string;

  /**
   * The id of the branch this branch was forked from
   */
  forkedBranchId: string | null;

  links: BranchRetrieveResponse.Links;

  name: string;

  updatedAt: string;

  version: number;
}

export namespace BranchRetrieveResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

/**
 * A Branch
 */
export interface BranchListResponse {
  /**
   * The id of the branch
   */
  id: string;

  createdAt: string;

  /**
   * The id of the branch this branch was forked from
   */
  forkedBranchId: string | null;

  links: BranchListResponse.Links;

  name: string;

  updatedAt: string;

  version: number;
}

export namespace BranchListResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

export interface BranchCreateParams {
  name: string;

  /**
   * The branch ID to fork from. If this is not specified, the new branch will be
   * forked from main.
   */
  branchId?: string;
}

export interface BranchListParams extends PageCursorURLParams {}

Branches.BranchListResponsesPageCursorURL = BranchListResponsesPageCursorURL;

export declare namespace Branches {
  export {
    type BranchCreateResponse as BranchCreateResponse,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchCreateParams as BranchCreateParams,
    type BranchListParams as BranchListParams,
  };
}
