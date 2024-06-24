// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@valtown/sdk/core';
import { APIResource } from '@valtown/sdk/resource';
import * as BlobsAPI from '@valtown/sdk/resources/blobs';
import { type Uploadable } from '@valtown/sdk/core';
import { type Response } from '@valtown/sdk/_shims/index';

export class Blobs extends APIResource {
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

export type BlobStoreParams = Uploadable;

export namespace Blobs {
  export import BlobStoreParams = BlobsAPI.BlobStoreParams;
}
