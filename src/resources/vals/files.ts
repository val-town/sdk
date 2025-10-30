// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PageCursorURL, type PageCursorURLParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Create a new file, project val or directory
   *
   * @example
   * ```ts
   * const file = await client.vals.files.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { path: 'path', type: 'directory' },
   * );
   * ```
   */
  create(valID: string, params: FileCreateParams, options?: RequestOptions): APIPromise<FileCreateResponse> {
    const { path: path_, branch_id, ...body } = params;
    return this._client.post(path`/v2/vals/${valID}/files`, {
      query: { path: path_, branch_id },
      body,
      ...options,
    });
  }

  /**
   * Get metadata for files and directories in a val. If path is an empty string,
   * returns files at the root directory.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fileRetrieveResponse of client.vals.files.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { limit: 1, offset: 0, path: 'path', recursive: true },
   * )) {
   *   // ...
   * }
   * ```
   */
  retrieve(
    valID: string,
    query: FileRetrieveParams,
    options?: RequestOptions,
  ): PagePromise<FileRetrieveResponsesPageCursorURL, FileRetrieveResponse> {
    return this._client.getAPIList(path`/v2/vals/${valID}/files`, PageCursorURL<FileRetrieveResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Update a file's content
   *
   * @example
   * ```ts
   * const file = await client.vals.files.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { path: 'path' },
   * );
   * ```
   */
  update(valID: string, params: FileUpdateParams, options?: RequestOptions): APIPromise<FileUpdateResponse> {
    const { path: path_, branch_id, ...body } = params;
    return this._client.put(path`/v2/vals/${valID}/files`, {
      query: { path: path_, branch_id },
      body,
      ...options,
    });
  }

  /**
   * Deletes a file or a directory. To delete a directory and all of its children,
   * use the recursive flag. To delete all files, pass in an empty path and the
   * recursive flag.
   *
   * @example
   * ```ts
   * await client.vals.files.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { path: 'path', recursive: true },
   * );
   * ```
   */
  delete(valID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { path: path_, recursive, branch_id } = params;
    return this._client.delete(path`/v2/vals/${valID}/files`, {
      query: { path: path_, recursive, branch_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Download file content
   *
   * @example
   * ```ts
   * const response = await client.vals.files.getContent(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { path: 'path' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getContent(valID: string, params: FileGetContentParams, options?: RequestOptions): APIPromise<Response> {
    const {
      'Cache-Control': cacheControl,
      'If-Match': ifMatch,
      'If-Modified-Since': ifModifiedSince,
      'If-None-Match': ifNoneMatch,
      'If-Unmodified-Since': ifUnmodifiedSince,
      ...query
    } = params;
    return this._client.get(path`/v2/vals/${valID}/files/content`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(cacheControl != null ? { 'Cache-Control': cacheControl } : undefined),
          ...(ifMatch != null ? { 'If-Match': ifMatch } : undefined),
          ...(ifModifiedSince != null ? { 'If-Modified-Since': ifModifiedSince } : undefined),
          ...(ifNoneMatch != null ? { 'If-None-Match': ifNoneMatch } : undefined),
          ...(ifUnmodifiedSince != null ? { 'If-Unmodified-Since': ifUnmodifiedSince } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }
}

export type FileRetrieveResponsesPageCursorURL = PageCursorURL<FileRetrieveResponse>;

/**
 * A File or Directory's Metadata
 */
export interface FileCreateResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileCreateResponse.Links;

  name: string;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileCreateResponse {
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

/**
 * A File or Directory's Metadata
 */
export interface FileUpdateResponse {
  /**
   * The id of the resource
   */
  id: string;

  links: FileUpdateResponse.Links;

  name: string;

  path: string;

  type: 'directory' | 'file' | 'interval' | 'http' | 'email' | 'script';

  updatedAt: string;

  version: number;
}

export namespace FileUpdateResponse {
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

export type FileCreateParams = FileCreateParams.Variant0 | FileCreateParams.Variant1;

export declare namespace FileCreateParams {
  export interface Variant0 {
    /**
     * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
     * empty string to represent the root directory.
     */
    path: string;

    /**
     * Body param:
     */
    type: 'directory';

    /**
     * Query param: The specified branch of the resource. Defaults to main if not
     * provided.
     */
    branch_id?: string;

    /**
     * Body param:
     */
    content?: null;
  }

  export interface Variant1 {
    /**
     * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
     * empty string to represent the root directory.
     */
    path: string;

    /**
     * Body param: File and val content. An empty string will create an empty file.
     * When creating a directory, the content should be null or undefined.
     */
    content: string;

    /**
     * Body param:
     */
    type: 'file' | 'interval' | 'http' | 'email' | 'script';

    /**
     * Query param: The specified branch of the resource. Defaults to main if not
     * provided.
     */
    branch_id?: string;
  }
}

export interface FileRetrieveParams extends PageCursorURLParams {
  /**
   * Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string
   * to represent the root directory.
   */
  path: string;

  /**
   * Whether to recursively act on all files in the project
   */
  recursive: boolean;

  /**
   * Id to query
   */
  branch_id?: string;

  /**
   * Specific branch version to query
   */
  version?: number;
}

export interface FileUpdateParams {
  /**
   * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
   * empty string to represent the root directory.
   */
  path: string;

  /**
   * Query param: The specified branch of the resource. Defaults to main if not
   * provided.
   */
  branch_id?: string;

  /**
   * Body param: File and val content. An empty string will create an empty file.
   * When creating a directory, the content should be null or undefined.
   */
  content?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param: Path to the directory you'd like to move this file to (e.g.
   * 'folder1/folder2')
   */
  parent_path?: string | null;

  /**
   * Body param:
   */
  type?: 'file' | 'interval' | 'http' | 'email' | 'script';
}

export interface FileDeleteParams {
  /**
   * Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an empty string
   * to represent the root directory.
   */
  path: string;

  /**
   * Whether to recursively act on all files in the project
   */
  recursive: boolean;

  /**
   * The specified branch of the resource. Defaults to main if not provided.
   */
  branch_id?: string;
}

export interface FileGetContentParams {
  /**
   * Query param: Path to a file or directory (e.g. 'dir/subdir/file.ts'). Pass in an
   * empty string to represent the root directory.
   */
  path: string;

  /**
   * Query param: Id to query
   */
  branch_id?: string;

  /**
   * Query param: Specific branch version to query
   */
  version?: number;

  /**
   * Header param:
   */
  'Cache-Control'?: string;

  /**
   * Header param:
   */
  'If-Match'?: string;

  /**
   * Header param:
   */
  'If-Modified-Since'?: string;

  /**
   * Header param:
   */
  'If-None-Match'?: string;

  /**
   * Header param:
   */
  'If-Unmodified-Since'?: string;
}

export declare namespace Files {
  export {
    type FileCreateResponse as FileCreateResponse,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileRetrieveResponsesPageCursorURL as FileRetrieveResponsesPageCursorURL,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileDeleteParams as FileDeleteParams,
    type FileGetContentParams as FileGetContentParams,
  };
}
