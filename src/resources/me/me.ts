// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProfileAPI from './profile';
import { Profile, ProfileRetrieveResponse } from './profile';
import * as ValsAPI from './vals';
import { ValListParams, Vals } from './vals';

/**
 * Methods to get information about your own profile and resources
 */
export class Me extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  vals: ValsAPI.Vals = new ValsAPI.Vals(this._client);
}

Me.Profile = Profile;
Me.Vals = Vals;

export declare namespace Me {
  export { Profile as Profile, type ProfileRetrieveResponse as ProfileRetrieveResponse };

  export { Vals as Vals, type ValListParams as ValListParams };
}
