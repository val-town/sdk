// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * User object
 */
export interface User {
  id: string;

  /**
   * The user’s biography, if they have provided one
   */
  bio: string | null;

  /**
   * URL that points to the user’s profile image, if one exists
   */
  profileImageUrl: string | null;

  /**
   * The user’s handle that they chose for themselves. Does not include the @ symbol
   */
  username: string | null;
}
