// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

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
    valId: string,
    body: EnvironmentVariableCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnvironmentVariableCreateResponse> {
    return this._client.post(`/v2/vals/${valId}/environment_variables`, { body, ...options });
  }

  /**
   * Update a environment variable scoped to this project.
   *
   * @example
   * ```ts
   * const environmentVariable =
   *   await client.vals.environmentVariables.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     'key',
   *     { value: 'value' },
   *   );
   * ```
   */
  update(
    valId: string,
    key: string,
    body: EnvironmentVariableUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnvironmentVariableUpdateResponse> {
    return this._client.put(`/v2/vals/${valId}/environment_variables/${key}`, { body, ...options });
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
    valId: string,
    query: EnvironmentVariableListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EnvironmentVariableListResponsesPageCursorURL, EnvironmentVariableListResponse> {
    return this._client.getAPIList(
      `/v2/vals/${valId}/environment_variables`,
      EnvironmentVariableListResponsesPageCursorURL,
      { query, ...options },
    );
  }

  /**
   * Delete a environment variable scoped to this project.
   *
   * @example
   * ```ts
   * await client.vals.environmentVariables.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   'key',
   * );
   * ```
   */
  delete(valId: string, key: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v2/vals/${valId}/environment_variables/${key}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class EnvironmentVariableListResponsesPageCursorURL extends PageCursorURL<EnvironmentVariableListResponse> {}

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
   * Value of the environment variable.
   */
  value: string;

  /**
   * Optional description of the environment variable
   */
  description?: string;
}

export interface EnvironmentVariableListParams extends PageCursorURLParams {}

EnvironmentVariables.EnvironmentVariableListResponsesPageCursorURL =
  EnvironmentVariableListResponsesPageCursorURL;

export declare namespace EnvironmentVariables {
  export {
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableUpdateResponse as EnvironmentVariableUpdateResponse,
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    EnvironmentVariableListResponsesPageCursorURL as EnvironmentVariableListResponsesPageCursorURL,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableUpdateParams as EnvironmentVariableUpdateParams,
    type EnvironmentVariableListParams as EnvironmentVariableListParams,
  };
}
