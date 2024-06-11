// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@valtown/sdk/resource';
import * as CommentsAPI from '@valtown/sdk/resources/me/comments';
import * as LikesAPI from '@valtown/sdk/resources/me/likes';
import * as ProfileAPI from '@valtown/sdk/resources/me/profile';
import * as ReferencesAPI from '@valtown/sdk/resources/me/references';

export class Me extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  likes: LikesAPI.Likes = new LikesAPI.Likes(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

export namespace Me {
  export import Profile = ProfileAPI.Profile;
  export import ProfileRetrieveResponse = ProfileAPI.ProfileRetrieveResponse;
  export import Likes = LikesAPI.Likes;
  export import LikeListResponse = LikesAPI.LikeListResponse;
  export import LikeListParams = LikesAPI.LikeListParams;
  export import Comments = CommentsAPI.Comments;
  export import CommentListResponse = CommentsAPI.CommentListResponse;
  export import CommentListParams = CommentsAPI.CommentListParams;
  export import References = ReferencesAPI.References;
  export import ReferenceListResponse = ReferencesAPI.ReferenceListResponse;
  export import ReferenceListParams = ReferencesAPI.ReferenceListParams;
}
