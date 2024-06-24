// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import { isRequestOptions } from '@valtown/sdk/core';
import * as BlobsAPI from '@valtown/sdk/resources/blobs';
import { type Uploadable } from '@valtown/sdk/core';
import { type Response } from '@valtown/sdk/_shims/index';

export class Blobs extends APIResource {
  /**
   * List blobs in your account
   */
  list(query?: BlobListParams, options?: Core.RequestOptions): Core.APIPromise<BlobListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BlobListResponse>;
  list(
    query: BlobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/blob', { query, ...options });
  }

  /**
   * Delete a blob
   */
  delete(key: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/blob/${key}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get a blob’s contents.
   */
  get(key: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/blob/${key}`, { ...options, __binaryResponse: true });
  }

  /**
   * Store data in blob storage
   */
  store(key: string, body: BlobStoreParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/blob/${key}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

/**
 * List of blobs that you’ve stored
 */
export type BlobListResponse = Array<BlobListResponse.BlobListResponseItem>;

export namespace BlobListResponse {
  export interface BlobListResponseItem {
    key: string;

    /**
     * Creation date of the object
     */
    lastModified?: string;

    /**
     * Size in bytes of the object
     */
    size?: number;
  }
}

export interface BlobListParams {
  /**
   * If specified, only include blobs that start with this string
   */
  prefix?: string;
}

export type BlobStoreParams = Uploadable;

export namespace Blobs {
  export import BlobListResponse = BlobsAPI.BlobListResponse;
  export import BlobListParams = BlobsAPI.BlobListParams;
  export import BlobStoreParams = BlobsAPI.BlobStoreParams;
}
