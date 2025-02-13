// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CommentsAPI from './comments';
import {
  CommentListParams,
  CommentListResponse,
  CommentListResponsesPageCursorURL,
  Comments,
} from './comments';
import * as LikesAPI from './likes';
import { LikeListParams, Likes } from './likes';
import * as ProfileAPI from './profile';
import { Profile, ProfileRetrieveResponse } from './profile';
import * as ProjectsAPI from './projects';
import {
  ProjectListParams,
  ProjectListResponse,
  ProjectListResponsesPageCursorURL,
  Projects,
} from './projects';
import * as ReferencesAPI from './references';
import {
  ReferenceListParams,
  ReferenceListResponse,
  ReferenceListResponsesPageCursorURL,
  References,
} from './references';

/**
 * Methods to get information about your own profile and resources
 */
export class Me extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  likes: LikesAPI.Likes = new LikesAPI.Likes(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
}

Me.Profile = Profile;
Me.Likes = Likes;
Me.Comments = Comments;
Me.CommentListResponsesPageCursorURL = CommentListResponsesPageCursorURL;
Me.References = References;
Me.ReferenceListResponsesPageCursorURL = ReferenceListResponsesPageCursorURL;
Me.Projects = Projects;
Me.ProjectListResponsesPageCursorURL = ProjectListResponsesPageCursorURL;

export declare namespace Me {
  export { Profile as Profile, type ProfileRetrieveResponse as ProfileRetrieveResponse };

  export { Likes as Likes, type LikeListParams as LikeListParams };

  export {
    Comments as Comments,
    type CommentListResponse as CommentListResponse,
    CommentListResponsesPageCursorURL as CommentListResponsesPageCursorURL,
    type CommentListParams as CommentListParams,
  };

  export {
    References as References,
    type ReferenceListResponse as ReferenceListResponse,
    ReferenceListResponsesPageCursorURL as ReferenceListResponsesPageCursorURL,
    type ReferenceListParams as ReferenceListParams,
  };

  export {
    Projects as Projects,
    type ProjectListResponse as ProjectListResponse,
    ProjectListResponsesPageCursorURL as ProjectListResponsesPageCursorURL,
    type ProjectListParams as ProjectListParams,
  };
}
