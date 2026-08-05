// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnvironmentVariablesAPI from './environment-variables';
import {
  EnvironmentVariableCreateParams,
  EnvironmentVariableCreateResponse,
  EnvironmentVariableDeleteParams,
  EnvironmentVariableListResponse,
  EnvironmentVariableUpdateParams,
  EnvironmentVariableUpdateResponse,
  EnvironmentVariables,
} from './environment-variables';
import { APIPromise } from '../../core/api-promise';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Reusable sets of environment variables that can be attached to many vals
 */
export class EnvironmentVariableGroups extends APIResource {
  environmentVariables: EnvironmentVariablesAPI.EnvironmentVariables =
    new EnvironmentVariablesAPI.EnvironmentVariables(this._client);

  /**
   * Create a new environment variable group
   *
   * @example
   * ```ts
   * const environmentVariableGroup =
   *   await client.environmentVariableGroups.create({
   *     name: 'name',
   *   });
   * ```
   */
  create(
    body: EnvironmentVariableGroupCreateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableGroupCreateResponse> {
    return this._client.post('/v3/environment-variable-groups/', { body, ...options });
  }

  /**
   * Rename an environment variable group
   *
   * @example
   * ```ts
   * await client.environmentVariableGroups.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { name: 'name' },
   * );
   * ```
   */
  update(id: string, body: EnvironmentVariableGroupUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/v3/environment-variable-groups/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List environment variable groups
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environmentVariableGroupListResponse of client.environmentVariableGroups.list(
   *   { limit: 1, offset: 0 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EnvironmentVariableGroupListParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentVariableGroupListResponsesPageCursorURL, EnvironmentVariableGroupListResponse> {
    return this._client.getAPIList(
      '/v3/environment-variable-groups/',
      PageCursorURL<EnvironmentVariableGroupListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an environment variable group
   *
   * @example
   * ```ts
   * await client.environmentVariableGroups.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/environment-variable-groups/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EnvironmentVariableGroupListResponsesPageCursorURL =
  PageCursorURL<EnvironmentVariableGroupListResponse>;

/**
 * An environment variable group
 */
export interface EnvironmentVariableGroupCreateResponse {
  /**
   * The id of the group
   */
  id: string;

  /**
   * The number of environment variables in the group
   */
  count: number;

  createdAt: string;

  /**
   * Name of the environment variable group
   */
  name: string;

  /**
   * The id of the org that owns the group
   */
  orgId: string;

  updatedAt: string | null;
}

/**
 * An environment variable group
 */
export interface EnvironmentVariableGroupListResponse {
  /**
   * The id of the group
   */
  id: string;

  /**
   * The number of environment variables in the group
   */
  count: number;

  createdAt: string;

  /**
   * Name of the environment variable group
   */
  name: string;

  /**
   * The id of the org that owns the group
   */
  orgId: string;

  updatedAt: string | null;
}

export interface EnvironmentVariableGroupCreateParams {
  name: string;

  /**
   * Organization to act in. Defaults to the organization that owns the API token.
   * List the organizations you belong to with `client.orgs.list()`.
   */
  orgId?: string;
}

export interface EnvironmentVariableGroupUpdateParams {
  /**
   * New name for group
   */
  name: string;
}

export interface EnvironmentVariableGroupListParams extends PageCursorURLParams {
  /**
   * Organization to act in. Defaults to the organization that owns the API token.
   * List the organizations you belong to with `client.orgs.list()`.
   */
  orgId?: string;
}

EnvironmentVariableGroups.EnvironmentVariables = EnvironmentVariables;

export declare namespace EnvironmentVariableGroups {
  export {
    type EnvironmentVariableGroupCreateResponse as EnvironmentVariableGroupCreateResponse,
    type EnvironmentVariableGroupListResponse as EnvironmentVariableGroupListResponse,
    type EnvironmentVariableGroupListResponsesPageCursorURL as EnvironmentVariableGroupListResponsesPageCursorURL,
    type EnvironmentVariableGroupCreateParams as EnvironmentVariableGroupCreateParams,
    type EnvironmentVariableGroupUpdateParams as EnvironmentVariableGroupUpdateParams,
    type EnvironmentVariableGroupListParams as EnvironmentVariableGroupListParams,
  };

  export {
    EnvironmentVariables as EnvironmentVariables,
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableUpdateResponse as EnvironmentVariableUpdateResponse,
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableUpdateParams as EnvironmentVariableUpdateParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };
}
