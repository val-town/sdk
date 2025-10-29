// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
    valID: string,
    body: BranchCreateParams,
    options?: RequestOptions,
  ): APIPromise<BranchCreateResponse> {
    return this._client.post(path`/v2/vals/${valID}/branches`, { body, ...options });
  }

  /**
   * Get a branch by id
   *
   * @example
   * ```ts
   * const branch = await client.vals.branches.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { val_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  retrieve(
    branchID: string,
    params: BranchRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BranchRetrieveResponse> {
    const { val_id } = params;
    return this._client.get(path`/v2/vals/${val_id}/branches/${branchID}`, options);
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
    valID: string,
    query: BranchListParams,
    options?: RequestOptions,
  ): PagePromise<BranchListResponsesPageCursorURL, BranchListResponse> {
    return this._client.getAPIList(path`/v2/vals/${valID}/branches`, PageCursorURL<BranchListResponse>, {
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
   *   { val_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(branchID: string, params: BranchDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { val_id } = params;
    return this._client.delete(path`/v2/vals/${val_id}/branches/${branchID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BranchListResponsesPageCursorURL = PageCursorURL<BranchListResponse>;

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

export interface BranchRetrieveParams {
  /**
   * Id of a val
   */
  val_id: string;
}

export interface BranchListParams extends PageCursorURLParams {}

export interface BranchDeleteParams {
  /**
   * Id of a val
   */
  val_id: string;
}

export declare namespace Branches {
  export {
    type BranchCreateResponse as BranchCreateResponse,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    type BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchListParams as BranchListParams,
    type BranchDeleteParams as BranchDeleteParams,
  };
}
