// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BranchesAPI from './branches';
import {
  BranchListParams,
  BranchListResponse,
  BranchListResponsesPageCursorURL,
  BranchRetrieveResponse,
  Branches,
} from './branches';
import * as FilesAPI from './files';
import {
  FileContentParams,
  FileContentResponse,
  FileListParams,
  FileListResponse,
  FileListResponsesPageCursorURL,
  FileRetrieveParams,
  FileRetrieveResponse,
  Files,
} from './files';
import { PageCursorURL, type PageCursorURLParams } from '../../pagination';

/**
 * Projects let you organize multiple files and collaborate with pull requests
 */
export class Projects extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * [BETA] Get a project by id
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectRetrieveResponse> {
    return this._client.get(`/v1/projects/${projectId}`, options);
  }

  /**
   * [BETA] Lists all public projects
   */
  list(
    query: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesPageCursorURL, ProjectListResponse> {
    return this._client.getAPIList('/v1/projects', ProjectListResponsesPageCursorURL, { query, ...options });
  }
}

export class ProjectListResponsesPageCursorURL extends PageCursorURL<ProjectListResponse> {}

/**
 * A Project
 */
export interface ProjectRetrieveResponse {
  /**
   * The id of the project
   */
  id: string;

  author: ProjectRetrieveResponse.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this project's image
   */
  imageUrl: string | null;

  links: ProjectRetrieveResponse.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace ProjectRetrieveResponse {
  export interface Author {
    id: string;

    username: string | null;
  }

  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

/**
 * A Project
 */
export interface ProjectListResponse {
  /**
   * The id of the project
   */
  id: string;

  author: ProjectListResponse.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this project's image
   */
  imageUrl: string | null;

  links: ProjectListResponse.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace ProjectListResponse {
  export interface Author {
    id: string;

    username: string | null;
  }

  export interface Links {
    /**
     * The URL of this resource on Val Town
     */
    html: string;

    /**
     * The URL of this resource on this API
     */
    self: string;
  }
}

export interface ProjectListParams extends PageCursorURLParams {}

Projects.ProjectListResponsesPageCursorURL = ProjectListResponsesPageCursorURL;
Projects.Branches = Branches;
Projects.BranchListResponsesPageCursorURL = BranchListResponsesPageCursorURL;
Projects.Files = Files;
Projects.FileListResponsesPageCursorURL = FileListResponsesPageCursorURL;

export declare namespace Projects {
  export {
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    ProjectListResponsesPageCursorURL as ProjectListResponsesPageCursorURL,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Branches as Branches,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchListParams as BranchListParams,
  };

  export {
    Files as Files,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileContentResponse as FileContentResponse,
    FileListResponsesPageCursorURL as FileListResponsesPageCursorURL,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileContentParams as FileContentParams,
  };
}
