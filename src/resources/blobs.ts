// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';

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
   * Store data in blob storage
   */
  store(key: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/blob/${key}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
