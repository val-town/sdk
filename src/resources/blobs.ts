// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Blob storage lets you store larger objects, including binary data
 */
export class Blobs extends APIResource {
  /**
   * List blobs in your account
   */
  list(
    query: BlobListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlobListResponse> {
    return this._client.get('/v1/blob', { query, ...options });
  }

  /**
   * Delete a blob
   */
  delete(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/blob/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a blob’s contents.
   */
  get(key: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/v1/blob/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Store data in blob storage
   */
  store(
    key: string,
    params: BlobStoreParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { blob } = params ?? {};
    return this._client.post(path`/v1/blob/${key}`, {
      body: blob,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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

export interface BlobStoreParams {
  /**
   * Binary input data
   */
  blob?: Uploadable;
}

export declare namespace Blobs {
  export {
    type BlobListResponse as BlobListResponse,
    type BlobListParams as BlobListParams,
    type BlobStoreParams as BlobStoreParams,
  };
}
