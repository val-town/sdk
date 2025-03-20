// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as VersionsAPI from './versions';
import {
  VersionCreateParams,
  VersionListParams,
  VersionListResponse,
  VersionListResponsesPageCursorURL,
  VersionRetrieveParams,
  Versions,
} from './versions';

/**
 * Vals are runnable JavaScript, TypeScript, and JSX modules
 */
export class Vals extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new val
   */
  create(body: ValCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ExtendedVal> {
    return this._client.post('/v1/vals', { body, ...options });
  }

  /**
   * Get a val by id
   */
  retrieve(valId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ExtendedVal> {
    return this._client.get(`/v1/vals/${valId}`, options);
  }

  /**
   * Update an existing val
   */
  update(valId: string, body?: ValUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(valId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    valId: string,
    body: ValUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(valId, {}, body);
    }
    return this._client.put(`/v1/vals/${valId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List all vals including all public vals and your unlisted and private vals
   */
  list(query: ValListParams, options?: Core.RequestOptions): Core.APIPromise<ValListResponse> {
    return this._client.get('/v1/vals', { query, ...options });
  }

  /**
   * Delete a val
   */
  delete(valId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/vals/${valId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Cancel a running val
   */
  cancelEvaluation(
    valId: string,
    evaluationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValCancelEvaluationResponse> {
    return this._client.post(`/v1/vals/${valId}/evaluations/${evaluationId}/cancel`, options);
  }

  /**
   * Run an existing val or create a new one
   */
  createOrUpdate(body: ValCreateOrUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/v1/vals', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * A paginated result set
 */
export interface ValListResponse {
  data: Array<Shared.ExtendedVal>;

  /**
   * Links to use for pagination
   */
  links: Shared.PaginationLinks;
}

/**
 * The evaluation_id was successfully searched for and the evaluation was either
 * already done or now has been cancelled
 */
export interface ValCancelEvaluationResponse {
  /**
   * True if the evaluation was found and cancelled
   */
  found: boolean;
}

export interface ValCreateParams {
  /**
   * Val source code as TypeScript
   */
  code: string;

  /**
   * This val’s name
   */
  name?: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy?: 'public' | 'unlisted' | 'private';

  /**
   * Readme contents, as Markdown
   */
  readme?: string;

  /**
   * The type of the val you want to create. Note that this does not include interval
   * vals, because they cannot be created through the API yet.
   */
  type?: 'httpnext' | 'http' | 'script' | 'email';
}

export interface ValUpdateParams {
  /**
   * This val’s name
   */
  name?: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy?: 'public' | 'unlisted' | 'private';

  /**
   * Readme contents, as Markdown
   */
  readme?: string;

  /**
   * The type of the val you want to update. Note that this does not include interval
   * vals, because they cannot be created through the API yet.
   */
  type?: 'httpnext' | 'http' | 'script' | 'email';
}

export interface ValListParams {
  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

  /**
   * Cursor to start the pagination from
   */
  cursor?: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy?: 'public' | 'unlisted' | 'private';

  /**
   * User ID to filter by
   */
  userId?: string;
}

export interface ValCreateOrUpdateParams {
  /**
   * Val source code as TypeScript
   */
  code: string;

  /**
   * This val’s name
   */
  name: string;
}

Vals.Versions = Versions;
Vals.VersionListResponsesPageCursorURL = VersionListResponsesPageCursorURL;

export declare namespace Vals {
  export {
    type ValListResponse as ValListResponse,
    type ValCancelEvaluationResponse as ValCancelEvaluationResponse,
    type ValCreateParams as ValCreateParams,
    type ValUpdateParams as ValUpdateParams,
    type ValListParams as ValListParams,
    type ValCreateOrUpdateParams as ValCreateOrUpdateParams,
  };

  export {
    Versions as Versions,
    type VersionListResponse as VersionListResponse,
    VersionListResponsesPageCursorURL as VersionListResponsesPageCursorURL,
    type VersionCreateParams as VersionCreateParams,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
  };
}
