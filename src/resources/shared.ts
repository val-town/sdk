// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { PageCursorURL } from '@valtown/sdk/pagination';

/**
 * A Val
 */
export interface BasicVal {
  /**
   * This val’s id
   */
  id: string;

  /**
   * The user who created this val
   */
  author: BasicVal.Author | null;

  /**
   * TypeScript code associated with this val
   */
  code: string | null;

  createdAt: string;

  /**
   * The name of this val
   */
  name: string;

  /**
   * This val’s privacy setting. Unlisted vals do not appear on profile pages or
   * elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * Whether this val is available publicly on Val Town
   */
  public: boolean;

  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  /**
   * The version of this val, starting at zero
   */
  version: number;
}

export namespace BasicVal {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

/**
 * A Val
 */
export interface ExtendedVal {
  /**
   * This val’s id
   */
  id: string;

  /**
   * The user who created this val
   */
  author: ExtendedVal.Author | null;

  /**
   * TypeScript code associated with this val
   */
  code: string | null;

  createdAt: string;

  likeCount: number;

  /**
   * The name of this val
   */
  name: string;

  /**
   * This val’s privacy setting. Unlisted vals do not appear on profile pages or
   * elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * Whether this val is available publicly on Val Town
   */
  public: boolean;

  readme: string | null;

  referenceCount: number;

  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc';

  /**
   * The version of this val, starting at zero
   */
  version: number;
}

export namespace ExtendedVal {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }
}

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

export class BasicValsPageCursorURL extends PageCursorURL<BasicVal> {}
