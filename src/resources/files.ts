// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Access files, which are the items within Vals
 */
export class Files extends APIResource {
  /**
   * Get file metadata by file ID
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get(path`/v2/files/${fileID}`, options);
  }
}

/**
 * A File or Directory's Metadata
 */
export interface FileRetrieveResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileRetrieveResponse.Links;

  name: string;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileRetrieveResponse {
  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource's source code as a module
     */
    module: string;

    /**
     * The URL of this resource on this API
     */
    self: string;

    /**
     * This resource's web endpoint, where it serves a website or API
     */
    endpoint?: string;
  }
}

export declare namespace Files {
  export { type FileRetrieveResponse as FileRetrieveResponse };
}
