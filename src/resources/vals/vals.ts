// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import { isRequestOptions } from '@valtown/sdk/core';
import * as ValsAPI from '@valtown/sdk/resources/vals/vals';
import * as VersionsAPI from '@valtown/sdk/resources/vals/versions';

export class Vals extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new val
   */
  create(body: ValCreateParams, options?: Core.RequestOptions): Core.APIPromise<ValCreateResponse> {
    return this._client.post('/v1/vals/', { body, ...options });
  }

  /**
   * Get a val by id
   */
  retrieve(valId: string, options?: Core.RequestOptions): Core.APIPromise<ValRetrieveResponse> {
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
   * Delete a val
   */
  delete(valId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/vals/${valId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Run an existing val or create a new one
   */
  createOrUpdate(body: ValCreateOrUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/v1/vals/', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Run a val, with arguments in the request body
   */
  run(valname: string, body?: ValRunParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  run(valname: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  run(
    valname: string,
    body: ValRunParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.run(valname, {}, body);
    }
    return this._client.post(`/v1/run/${valname}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Run JavaScript or TypeScript without saving it permanently as a val
   */
  runAnonymous(
    body: ValRunAnonymousParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValRunAnonymousResponse | null> {
    return this._client.post('/v1/eval/', { body, ...options });
  }

  /**
   * Run a val, specify any parameters in a querystring
   */
  runGet(valname: string, query?: ValRunGetParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  runGet(valname: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  runGet(
    valname: string,
    query: ValRunGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.runGet(valname, {}, query);
    }
    return this._client.get(`/v1/run/${valname}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * A Val
 */
export interface ValCreateResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: ValCreateResponse.Author | null;

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

export namespace ValCreateResponse {
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
export interface ValRetrieveResponse {
  id: string;

  /**
   * The user who created this val
   */
  author: ValRetrieveResponse.Author | null;

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

export namespace ValRetrieveResponse {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

export type ValRunAnonymousResponse = string | number | unknown | Array<unknown> | boolean;

export interface ValCreateParams {
  code: string;

  name?: string;

  privacy?: 'public' | 'unlisted' | 'private';

  readme?: string;

  type?: 'http' | 'script' | 'email';
}

export interface ValUpdateParams {
  name?: string;

  privacy?: 'public' | 'unlisted' | 'private';

  readme?: string;
}

export interface ValCreateOrUpdateParams {
  code: string;

  name: string;
}

export interface ValRunParams {
  args?: Array<unknown>;
}

export interface ValRunAnonymousParams {
  /**
   * TypeScript source code
   */
  code: string;

  args?: Array<unknown>;
}

export interface ValRunGetParams {
  args?: string;
}

export namespace Vals {
  export import ValCreateResponse = ValsAPI.ValCreateResponse;
  export import ValRetrieveResponse = ValsAPI.ValRetrieveResponse;
  export import ValRunAnonymousResponse = ValsAPI.ValRunAnonymousResponse;
  export import ValCreateParams = ValsAPI.ValCreateParams;
  export import ValUpdateParams = ValsAPI.ValUpdateParams;
  export import ValCreateOrUpdateParams = ValsAPI.ValCreateOrUpdateParams;
  export import ValRunParams = ValsAPI.ValRunParams;
  export import ValRunAnonymousParams = ValsAPI.ValRunAnonymousParams;
  export import ValRunGetParams = ValsAPI.ValRunGetParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionRetrieveResponse = VersionsAPI.VersionRetrieveResponse;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionListResponsesPageCursorURL = VersionsAPI.VersionListResponsesPageCursorURL;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionRetrieveParams = VersionsAPI.VersionRetrieveParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
}
