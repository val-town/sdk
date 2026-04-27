// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { ValsCursor } from '../shared';
import * as BranchesAPI from './branches';
import {
  BranchCreateParams,
  BranchCreateResponse,
  BranchDeleteParams,
  BranchListParams,
  BranchListResponse,
  BranchListResponsesPageCursorURL,
  BranchRetrieveParams,
  BranchRetrieveResponse,
  Branches,
} from './branches';
import * as EnvironmentVariablesAPI from './environment-variables';
import {
  EnvironmentVariableCreateParams,
  EnvironmentVariableCreateResponse,
  EnvironmentVariableDeleteParams,
  EnvironmentVariableListParams,
  EnvironmentVariableListResponse,
  EnvironmentVariableListResponsesPageCursorURL,
  EnvironmentVariableUpdateParams,
  EnvironmentVariableUpdateResponse,
  EnvironmentVariables,
} from './environment-variables';
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
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Vals are a collaborative folder of runnable JavaScript, TypeScript, and JSX modules
 */
export class Vals extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  environmentVariables: EnvironmentVariablesAPI.EnvironmentVariables =
    new EnvironmentVariablesAPI.EnvironmentVariables(this._client);

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
  create(body: ValCreateParams, options?: RequestOptions): APIPromise<Shared.Val> {
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
  retrieve(valID: string, options?: RequestOptions): APIPromise<Shared.Val> {
    return this._client.get(path`/v2/vals/${valID}`, options);
  }

  /**
   * Lists all vals including all public vals and your unlisted and private vals
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const val of client.vals.list({ limit: 1 })) {
   *   // ...
   * }
   * ```
   */
  list(query: ValListParams, options?: RequestOptions): PagePromise<ValsCursor, Shared.Val> {
    return this._client.getAPIList('/v2/vals', Cursor<Shared.Val>, { query, ...options });
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
  delete(valID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/vals/${valID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ValCreateParams {
  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  description?: string;

  /**
   * ID of the org to create the val in
   */
  orgId?: string;
}

export interface ValListParams extends CursorParams {
  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy?: 'public' | 'unlisted' | 'private';

  /**
   * User ID to filter by
   */
  user_id?: string;
}

Vals.Branches = Branches;
Vals.Files = Files;
Vals.EnvironmentVariables = EnvironmentVariables;

export declare namespace Vals {
  export { type ValCreateParams as ValCreateParams, type ValListParams as ValListParams };

  export {
    Branches as Branches,
    type BranchCreateResponse as BranchCreateResponse,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    type BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchCreateParams as BranchCreateParams,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchListParams as BranchListParams,
    type BranchDeleteParams as BranchDeleteParams,
  };

  export {
    Files as Files,
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileRetrieveResponsesPageCursorURL as FileRetrieveResponsesPageCursorURL,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGetContentParams as FileGetContentParams,
  };

  export {
    EnvironmentVariables as EnvironmentVariables,
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableUpdateResponse as EnvironmentVariableUpdateResponse,
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableListResponsesPageCursorURL as EnvironmentVariableListResponsesPageCursorURL,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableUpdateParams as EnvironmentVariableUpdateParams,
    type EnvironmentVariableListParams as EnvironmentVariableListParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };
}

export { type ValsCursor };
