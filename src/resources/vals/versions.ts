// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as VersionsAPI from './versions';

export class Versions extends APIResource {
  /**
   * Create a new version of a val
   */
  create(valId: string, body: VersionCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/vals/${valId}/versions`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get a specific version of a val
   */
  retrieve(
    valId: string,
    version: number,
    query: VersionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/v1/vals/${valId}/versions/${version}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List versions of a val
   */
  list(valId: string, query: VersionListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/vals/${valId}/versions`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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

export interface VersionCreateParams {
  code: string;

  name?: string;

  privacy?: 'public' | 'unlisted' | 'private';

  readme?: string;
}

export interface VersionRetrieveParams {
  limit: number;

  offset: number;
}

export interface VersionListParams {
  limit: number;

  offset: number;
}

export namespace Versions {
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionRetrieveParams = VersionsAPI.VersionRetrieveParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
}
