// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class EnvironmentVariables extends APIResource {
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
}

export class EnvironmentVariableListResponsesPageCursorURL extends PageCursorURL<EnvironmentVariableListResponse> {}

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

export interface EnvironmentVariableListParams extends PageCursorURLParams {}

EnvironmentVariables.EnvironmentVariableListResponsesPageCursorURL =
  EnvironmentVariableListResponsesPageCursorURL;

export declare namespace EnvironmentVariables {
  export {
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    EnvironmentVariableListResponsesPageCursorURL as EnvironmentVariableListResponsesPageCursorURL,
    type EnvironmentVariableListParams as EnvironmentVariableListParams,
  };
}
