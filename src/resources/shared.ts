// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { PageCursorURL } from '../pagination';

/**
 * Links to use for pagination
 */
export interface PaginationLinks {
  /**
   * URL of this page
   */
  self: string;

  /**
   * URL of the next page, if any
   */
  next?: string;

  /**
   * URL of the previous page, if any
   */
  prev?: string;
}

/**
 * Result of executing an SQL statement.
 */
export interface ResultSet {
  /**
   * Names of columns.
   *
   * Names of columns can be defined using the `AS` keyword in SQL:
   *
   * ```sql
   * SELECT author AS author, COUNT(*) AS count FROM books GROUP BY author
   * ```
   */
  columns: Array<string>;

  /**
   * Types of columns.
   *
   * The types are currently shown for types declared in a SQL table. For column
   * types of function calls, for example, an empty string is returned.
   */
  columnTypes: Array<string>;

  /**
   * Rows produced by the statement.
   */
  rows: Array<Array<unknown>>;

  /**
   * Number of rows that were affected by an UPDATE, INSERT or DELETE operation.
   *
   * This value is not specified for other SQL statements.
   */
  rowsAffected: number;

  /**
   * ROWID of the last inserted row.
   *
   * This value is not specified if the SQL statement was not an INSERT or if the
   * table was not a ROWID table.
   */
  lastInsertRowid?: string | number | null;
}

/**
 * User object
 */
export interface User {
  /**
   * The ID of this user
   */
  id: string;

  /**
   * The user’s biography, if they have provided one
   */
  bio: string | null;

  links: User.Links;

  /**
   * URL that points to the user’s profile image, if one exists
   */
  profileImageUrl: string | null;

  /**
   * Whether this is a user or an organization
   */
  type: 'user' | 'org';

  /**
   * URL of this user’s profile on Val Town’s website
   */
  url: string;

  /**
   * The user’s handle that they chose for themselves. Does not include the @ symbol
   */
  username: string | null;
}

export namespace User {
  export interface Links {
    /**
     * URL of this user on this API
     */
    self: string;
  }
}

/**
 * A Val
 */
export interface Val {
  /**
   * The id of the val
   */
  id: string;

  author: Val.Author;

  createdAt: string;

  description: string | null;

  /**
   * The URL of this val's image
   */
  imageUrl: string | null;

  links: Val.Links;

  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';
}

export namespace Val {
  export interface Author {
    id: string;

    type: 'user' | 'org';

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

export class ValsPageCursorURL extends PageCursorURL<Val> {}
