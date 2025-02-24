// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

export class Files extends APIResource {
  /**
   * Get metadata for files and directories in a project at the root directory
   */
  list(
    projectId: string,
    query: FileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FileListResponsesPageCursorURL, FileListResponse> {
    return this._client.getAPIList(`/v1/projects/${projectId}/files`, FileListResponsesPageCursorURL, {
      query,
      ...options,
    });
  }
}

export class FileListResponsesPageCursorURL extends PageCursorURL<FileListResponse> {}

/**
 * A File or Directory's Metadata
 */
export interface FileListResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileListResponse.Links;

  name: string;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileListResponse {
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

export interface FileListParams extends PageCursorURLParams {
  /**
   * Id to query
   */
  branch_id?: string;

  /**
   * Whether to recursively list all files in the project
   */
  recursive?: boolean;

  /**
   * Specific branch version to query
   */
  version?: number;
}

Files.FileListResponsesPageCursorURL = FileListResponsesPageCursorURL;

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    FileListResponsesPageCursorURL as FileListResponsesPageCursorURL,
    type FileListParams as FileListParams,
  };
}
