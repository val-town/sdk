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

/**
 * Projects let you organize multiple files and collaborate with pull requests
 */
export class Projects extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);

  /**
   * [BETA] Get a project by id
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectRetrieveResponse> {
    return this._client.get(`/v1/projects/${projectId}`, options);
  }
}

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

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * The URL of this resource on the Val Town website
   */
  valTownUrl: string;
}

export namespace ProjectRetrieveResponse {
  export interface Author {
    id: string;

    username: string | null;
  }
}

Projects.Branches = Branches;
Projects.BranchListResponsesPageCursorURL = BranchListResponsesPageCursorURL;

export declare namespace Projects {
  export { type ProjectRetrieveResponse as ProjectRetrieveResponse };

  export {
    Branches as Branches,
    type BranchRetrieveResponse as BranchRetrieveResponse,
    type BranchListResponse as BranchListResponse,
    BranchListResponsesPageCursorURL as BranchListResponsesPageCursorURL,
    type BranchListParams as BranchListParams,
  };
}
