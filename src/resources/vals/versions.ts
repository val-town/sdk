// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as Core from '@valtown/sdk/core';
import * as VersionsAPI from '@valtown/sdk/resources/vals/versions';
import * as Shared from '@valtown/sdk/resources/shared';
import { PageCursorURL, type PageCursorURLParams } from '@valtown/sdk/pagination';

export class Versions extends APIResource {
  /**
   * Create a new version of a val
   */
  create(
    valId: string,
    body: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ExtendedVal> {
    return this._client.post(`/v1/vals/${valId}/versions`, { body, ...options });
  }

  /**
   * Get a specific version of a val
   */
  retrieve(
    valId: string,
    version: number,
    query: VersionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ExtendedVal> {
    return this._client.get(`/v1/vals/${valId}/versions/${version}`, { query, ...options });
  }

  /**
   * List versions of a val
   */
  list(
    valId: string,
    query: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VersionListResponsesPageCursorURL, VersionListResponse> {
    return this._client.getAPIList(`/v1/vals/${valId}/versions`, VersionListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }

  /**
   * Delete a specific version of a val
   */
  delete(valId: string, version: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/vals/${valId}/versions/${version}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class VersionListResponsesPageCursorURL extends PageCursorURL<VersionListResponse> {}

export interface VersionListResponse {
  createdAt: string;

  /**
   * Id of a val
   */
  val_id: string;

  /**
   * Version of the val
   */
  version: number;
}

export interface VersionCreateParams {
  /**
   * Val source code as TypeScript
   */
  code: string;

  /**
   * This val’s name
   */
  name?: string;

  /**
   * This val’s privacy setting. Unlisted vals do not appear on profile pages or
   * elsewhere, but you can link to them.
   */
  privacy?: 'public' | 'unlisted' | 'private';

  /**
   * Readme contents, as Markdown
   */
  readme?: string;

  type?: 'http' | 'script' | 'email';
}

export interface VersionRetrieveParams {
  /**
   * Maximum items to return in each paginated response
   */
  limit: number;

  /**
   * Number of items to skip in order to deliver paginated results
   */
  offset: number;
}

export interface VersionListParams extends PageCursorURLParams {}

export namespace Versions {
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionListResponsesPageCursorURL = VersionsAPI.VersionListResponsesPageCursorURL;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionRetrieveParams = VersionsAPI.VersionRetrieveParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
}
