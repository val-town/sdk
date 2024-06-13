// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as VersionsAPI from '@valtown/sdk/resources/vals/versions';

export class Versions extends APIResource {
  /**
   * Create a new version of a val
   */
  create(
    valId: string,
    body: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionCreateResponse> {
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
  ): Core.APIPromise<VersionRetrieveResponse> {
    return this._client.get(`/v1/vals/${valId}/versions/${version}`, { query, ...options });
  }

  /**
   * List versions of a val
   */
  list(
    valId: string,
    query: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionListResponse> {
    return this._client.get(`/v1/vals/${valId}/versions`, { query, ...options });
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

/**
 * A Val
 */
export interface VersionCreateResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: VersionCreateResponse.Author | null;

  code: string | null;

  createdAt: string;

  likeCount: number;

  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  public: boolean;

  readme: string | null;

  referenceCount: number;

  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  version: number;
}

export namespace VersionCreateResponse {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

/**
 * A Val
 */
export interface VersionRetrieveResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: VersionRetrieveResponse.Author | null;

  code: string | null;

  createdAt: string;

  likeCount: number;

  name: string;

  privacy: 'public' | 'unlisted' | 'private';

  public: boolean;

  readme: string | null;

  referenceCount: number;

  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  version: number;
}

export namespace VersionRetrieveResponse {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

export interface VersionListResponse {
  data: Array<VersionListResponse.Data>;

  links: VersionListResponse.Links;
}

export namespace VersionListResponse {
  export interface Data {
    createdAt: string;

    val_id: string;

    version: number;
  }

  export interface Links {
    self: string;

    nextUrl?: string;

    prevUrl?: string;
  }
}

export interface VersionCreateParams {
  code: string;

  name?: string;

  privacy?: 'public' | 'unlisted' | 'private';

  readme?: string;

  type?: 'http' | 'script' | 'email';
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
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionRetrieveResponse = VersionsAPI.VersionRetrieveResponse;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionRetrieveParams = VersionsAPI.VersionRetrieveParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
}
