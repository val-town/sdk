// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { ValsPageCursorURL } from '../shared';
import * as BranchesAPI from './branches';
import {
  BranchCreateParams,
  BranchCreateResponse,
  BranchListParams,
  BranchListResponse,
  BranchListResponsesPageCursorURL,
  BranchRetrieveResponse,
  Branches,
} from './branches';
import * as FilesAPI from './files';
import {
  FileCreateParams,
  FileCreateResponse,
  FileDeleteParams,
  FileGetContentParams,
  FileRetrieveParams,
  FileRetrieveResponse,
  FileRetrieveResponsesPageCursorURL,
  FileUpdateParams,
  FileUpdateResponse,
  Files,
} from './files';
import { type PageCursorURLParams } from '../../pagination';

/**
 * Vals are a collaborative folder of runnable JavaScript, TypeScript, and JSX modules
 */
export class Vals extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new val
   *
   * @example
   * ```ts
   * const val = await client.vals.create({
   *   name: 'myVal',
   *   privacy: 'public',
   *   description: 'My val',
   * });
   * ```
   */
  create(body: ValCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Val> {
    return this._client.post('/v2/vals', { body, ...options });
  }

  /**
   * Get a val by id
   *
   * @example
   * ```ts
   * const val = await client.vals.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(valId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Val> {
    return this._client.get(`/v2/vals/${valId}`, options);
  }

  /**
   * Lists all public vals
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const val of client.vals.list({
   *   limit: 1,
   *   offset: 0,
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: ValListParams, options?: Core.RequestOptions): Core.PagePromise<ValsPageCursorURL, Shared.Val> {
    return this._client.getAPIList('/v2/vals', ValsPageCursorURL, { query, ...options });
  }

  /**
   * Delete a project
   *
   * @example
   * ```ts
   * await client.vals.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(valId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v2/vals/${valId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ValCreateParams {
  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  description?: string;
}

export interface ValListParams extends PageCursorURLParams {}

Vals.Branches = Branches;
Vals.BranchListResponsesPageCursorURL = BranchListResponsesPageCursorURL;
Vals.Files = Files;
Vals.FileRetrieveResponsesPageCursorURL = FileRetrieveResponsesPageCursorURL;

export declare namespace Vals {
  export { type ValCreateParams as ValCreateParams, type ValListParams as ValListParams };

  export {
    Branches as Branches,
    type BranchCreateResponse as BranchCreateResponse,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchCreateParams as BranchCreateParams,
    type BranchListParams as BranchListParams,
  };

  export {
    Files as Files,
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    FileRetrieveResponsesPageCursorURL as FileRetrieveResponsesPageCursorURL,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGetContentParams as FileGetContentParams,
  };
}

export { ValsPageCursorURL };
