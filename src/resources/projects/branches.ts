// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class Branches extends APIResource {
  /**
   * [BETA] Create a new branch
   */
  create(
    projectId: string,
    body: BranchCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BranchCreateResponse> {
    return this._client.post(`/v1/projects/${projectId}/branches`, { body, ...options });
  }

  /**
   * [BETA] Get a branch by id
   */
  retrieve(
    projectId: string,
    branchId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BranchRetrieveResponse> {
    return this._client.get(`/v1/projects/${projectId}/branches/${branchId}`, options);
  }

  /**
   * [BETA] List all branches for a project
   */
  list(
    projectId: string,
    query: BranchListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BranchListResponsesPageCursorURL, BranchListResponse> {
    return this._client.getAPIList(`/v1/projects/${projectId}/branches`, BranchListResponsesPageCursorURL, {
      query,
      ...options,
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
