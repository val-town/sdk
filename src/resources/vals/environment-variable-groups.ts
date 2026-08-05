// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * The environment variable groups attached to a val
 */
export class EnvironmentVariableGroups extends APIResource {
  /**
   * List the environment variable groups attached to this val. This only includes
   * the groups, not the variables in them.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const environmentVariableGroupListResponse of client.vals.environmentVariableGroups.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { limit: 1, offset: 0 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    valID: string,
    query: EnvironmentVariableGroupListParams,
    options?: RequestOptions,
  ): PagePromise<EnvironmentVariableGroupListResponsesPageCursorURL, EnvironmentVariableGroupListResponse> {
    return this._client.getAPIList(
      path`/v2/vals/${valID}/environment_variable_groups`,
      PageCursorURL<EnvironmentVariableGroupListResponse>,
      { query, ...options },
    );
  }

  /**
   * Attach an environment variable group to this val. Every variable in the group is
   * injected into the val's environment. Variables defined on the val itself take
   * precedence over variables with the same key in a group. Attaching a group that
   * is already attached succeeds without doing anything.
   *
   * @example
   * ```ts
   * await client.vals.environmentVariableGroups.attach(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { val_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  attach(
    groupID: string,
    params: EnvironmentVariableGroupAttachParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { val_id } = params;
    return this._client.put(path`/v2/vals/${val_id}/environment_variable_groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Detach an environment variable group from this val. The group itself, and the
   * variables in it, are left alone.
   *
   * @example
   * ```ts
   * await client.vals.environmentVariableGroups.detach(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { val_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  detach(
    groupID: string,
    params: EnvironmentVariableGroupDetachParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { val_id } = params;
    return this._client.delete(path`/v2/vals/${val_id}/environment_variable_groups/${groupID}`, {
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

export interface EnvironmentVariableGroupListParams extends PageCursorURLParams {}

export interface EnvironmentVariableGroupAttachParams {
  /**
   * Id of a val
   */
  val_id: string;
}

export interface EnvironmentVariableGroupDetachParams {
  /**
   * Id of a val
   */
  val_id: string;
}

export declare namespace EnvironmentVariableGroups {
  export {
    type EnvironmentVariableGroupListResponse as EnvironmentVariableGroupListResponse,
    type EnvironmentVariableGroupListResponsesPageCursorURL as EnvironmentVariableGroupListResponsesPageCursorURL,
    type EnvironmentVariableGroupListParams as EnvironmentVariableGroupListParams,
    type EnvironmentVariableGroupAttachParams as EnvironmentVariableGroupAttachParams,
    type EnvironmentVariableGroupDetachParams as EnvironmentVariableGroupDetachParams,
  };
}
