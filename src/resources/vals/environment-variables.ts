// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EnvironmentVariables extends APIResource {
  /**
   * Create a new environment variable scoped to this project.
   *
   * @example
   * ```ts
   * const environmentVariable =
   *   await client.vals.environmentVariables.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { key: 'key', value: 'value' },
   *   );
   * ```
   */
  create(
    valID: string,
    body: EnvironmentVariableCreateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableCreateResponse> {
    return this._client.post(path`/v2/vals/${valID}/environment_variables`, { body, ...options });
  }

  /**
   * Update a environment variable scoped to this project.
   *
   * @example
   * ```ts
   * const environmentVariable =
   *   await client.vals.environmentVariables.update('key', {
   *     val_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     value: 'value',
   *   });
   * ```
   */
  update(
    key: string,
    params: EnvironmentVariableUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableUpdateResponse> {
    const { val_id, ...body } = params;
    return this._client.put(path`/v2/vals/${val_id}/environment_variables/${key}`, { body, ...options });
  }

  /**
   * List environment variables defined in this project. This only includes names,
   * not values.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environmentVariableListResponse of client.vals.environmentVariables.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { limit: 1, offset: 0 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    valID: string,
    query: EnvironmentVariableListParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentVariableListResponsesPageCursorURL, EnvironmentVariableListResponse> {
    return this._client.getAPIList(
      path`/v2/vals/${valID}/environment_variables`,
      PageCursorURL<EnvironmentVariableListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a environment variable scoped to this project.
   *
   * @example
   * ```ts
   * await client.vals.environmentVariables.delete('key', {
   *   val_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  delete(key: string, params: EnvironmentVariableDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { val_id } = params;
    return this._client.delete(path`/v2/vals/${val_id}/environment_variables/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EnvironmentVariableListResponsesPageCursorURL = PageCursorURL<EnvironmentVariableListResponse>;

/**
 * An environment variable
 */
export interface EnvironmentVariableCreateResponse {
  createdAt: string;

  /**
   * Optional description of the environment variable
   */
  description: string | null;

  /**
   * Name or key of the environment variable, accessible via Deno.env or process.env
   */
  key: string;

  updatedAt: string;
}

/**
 * An environment variable
 */
export interface EnvironmentVariableUpdateResponse {
  createdAt: string;

  /**
   * Optional description of the environment variable
   */
  description: string | null;

  /**
   * Name or key of the environment variable, accessible via Deno.env or process.env
   */
  key: string;

  updatedAt: string;
}

/**
 * An environment variable
 */
export interface EnvironmentVariableListResponse {
  createdAt: string;

  /**
   * Optional description of the environment variable
   */
  description: string | null;

  /**
   * Name or key of the environment variable, accessible via Deno.env or process.env
   */
  key: string;

  updatedAt: string;
}

export interface EnvironmentVariableCreateParams {
  /**
   * Name or key of the environment variable, accessible via Deno.env or process.env
   */
  key: string;

  /**
   * Value of the environment variable.
   */
  value: string;

  /**
   * Optional description of the environment variable
   */
  description?: string;
}

export interface EnvironmentVariableUpdateParams {
  /**
   * Path param: Id of a val
   */
  val_id: string;

  /**
   * Body param: Value of the environment variable.
   */
  value: string;

  /**
   * Body param: Optional description of the environment variable
   */
  description?: string;
}

export interface EnvironmentVariableListParams extends PageCursorURLParams {}

export interface EnvironmentVariableDeleteParams {
  /**
   * Id of a val
   */
  val_id: string;
}

export declare namespace EnvironmentVariables {
  export {
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
