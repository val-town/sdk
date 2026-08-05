// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * The environment variables inside an environment variable group
 */
export class EnvironmentVariables extends APIResource {
  /**
   * Create an environment variable in a group.
   *
   * @example
   * ```ts
   * const environmentVariable =
   *   await client.environmentVariableGroups.environmentVariables.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { key: 'key', value: 'value' },
   *   );
   * ```
   */
  create(
    groupID: string,
    body: EnvironmentVariableCreateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableCreateResponse> {
    return this._client.post(path`/v3/environment-variable-groups/${groupID}/environment-variables`, {
      body,
      ...options,
    });
  }

  /**
   * Create or update an environment variable in a group.
   *
   * @example
   * ```ts
   * const environmentVariable =
   *   await client.environmentVariableGroups.environmentVariables.update(
   *     'key',
   *     {
   *       group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       value: 'value',
   *     },
   *   );
   * ```
   */
  update(
    key: string,
    params: EnvironmentVariableUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentVariableUpdateResponse> {
    const { group_id, ...body } = params;
    return this._client.post(path`/v3/environment-variable-groups/${group_id}/environment-variables/${key}`, {
      body,
      ...options,
    });
  }

  /**
   * List variables in an environment variable group. This only includes names, not
   * values.
   *
   * @example
   * ```ts
   * const environmentVariables =
   *   await client.environmentVariableGroups.environmentVariables.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(groupID: string, options?: RequestOptions): APIPromise<EnvironmentVariableListResponse> {
    return this._client.get(path`/v3/environment-variable-groups/${groupID}/environment-variables`, options);
  }

  /**
   * Delete an environment variable in a group.
   *
   * @example
   * ```ts
   * await client.environmentVariableGroups.environmentVariables.delete(
   *   'key',
   *   { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(key: string, params: EnvironmentVariableDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { group_id } = params;
    return this._client.delete(
      path`/v3/environment-variable-groups/${group_id}/environment-variables/${key}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      },
    );
  }
}

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

  updatedAt: string | null;
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

  updatedAt: string | null;
}

export type EnvironmentVariableListResponse =
  Array<EnvironmentVariableListResponse.EnvironmentVariableListResponseItem>;

export namespace EnvironmentVariableListResponse {
  /**
   * An environment variable
   */
  export interface EnvironmentVariableListResponseItem {
    createdAt: string;

    /**
     * Optional description of the environment variable
     */
    description: string | null;

    /**
     * Name or key of the environment variable, accessible via Deno.env or process.env
     */
    key: string;

    updatedAt: string | null;
  }
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
   * Optional description of the environment variable. Send null to clear an existing
   * description; omit it to leave the description unchanged.
   */
  description?: string | null;
}

export interface EnvironmentVariableUpdateParams {
  /**
   * Path param: Id of an environment variable group
   */
  group_id: string;

  /**
   * Body param: Value of the environment variable.
   */
  value: string;

  /**
   * Body param: Optional description of the environment variable. Send null to clear
   * an existing description; omit it to leave the description unchanged.
   */
  description?: string | null;
}

export interface EnvironmentVariableDeleteParams {
  /**
   * Id of an environment variable group
   */
  group_id: string;
}

export declare namespace EnvironmentVariables {
  export {
    type EnvironmentVariableCreateResponse as EnvironmentVariableCreateResponse,
    type EnvironmentVariableUpdateResponse as EnvironmentVariableUpdateResponse,
    type EnvironmentVariableListResponse as EnvironmentVariableListResponse,
    type EnvironmentVariableCreateParams as EnvironmentVariableCreateParams,
    type EnvironmentVariableUpdateParams as EnvironmentVariableUpdateParams,
    type EnvironmentVariableDeleteParams as EnvironmentVariableDeleteParams,
  };
}
