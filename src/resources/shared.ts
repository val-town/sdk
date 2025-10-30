// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cursor, PageCursorURL } from '../pagination';

/**
 * A Val
 */
export interface BasicVal {
  /**
   * This val's id
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

  links: BasicVal.Links;

  /**
   * The name of this val
   */
  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * Whether this val is available publicly on Val Town
   */
  public: boolean;

  /**
   * The type of a val. HTTP can receive web requests, Email can receive emails, Cron
   * runs periodically, and Script can be used for libraries or one-off calculations
   */
  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc' | 'httpnext';

  updatedAt: string;

  /**
   * The URL of this resource on the Val Town website
   */
  url: string;

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

  export interface Links {
    /**
     * The URL of this Val's source code as a module
     */
    module: string;

    /**
     * The URL of this val on this API
     */
    self: string;

    /**
     * The endpoint to retrieve this val's versions
     */
    versions: string;

    /**
     * This val's web endpoint, where it serves a website or API
     */
    endpoint?: string;
  }
}

/**
 * A Legacy Val
 */
export interface ExtendedVal {
  /**
   * This val's id
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

  /**
   * How many likes this val has received
   */
  likeCount: number;

  links: ExtendedVal.Links;

  /**
   * The name of this val
   */
  name: string;

  /**
   * This resource's privacy setting. Unlisted resources do not appear on profile
   * pages or elsewhere, but you can link to them.
   */
  privacy: 'public' | 'unlisted' | 'private';

  /**
   * Whether this val is available publicly on Val Town
   */
  public: boolean;

  /**
   * This val's readme, as Markdown
   */
  readme: string | null;

  referenceCount: number;

  /**
   * The type of a val. HTTP can receive web requests, Email can receive emails, Cron
   * runs periodically, and Script can be used for libraries or one-off calculations
   */
  type: 'interval' | 'http' | 'express' | 'email' | 'script' | 'rpc' | 'httpnext';

  updatedAt: string;

  /**
   * The URL of this resource on the Val Town website
   */
  url: string;

  /**
   * The version of this val, starting at zero
   */
  version: number;

  versionCreatedAt?: string;
}

export namespace ExtendedVal {
  /**
   * The user who created this val
   */
  export interface Author {
    id: string;

    username: string | null;
  }

  export interface Links {
    /**
     * The URL of this Val's source code as a module
     */
    module: string;

    /**
     * The URL of this val on this API
     */
    self: string;

    /**
     * The endpoint to retrieve this val's versions
     */
    versions: string;

    /**
     * This val's web endpoint, where it serves a website or API
     */
    endpoint?: string;
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

export class BasicValsPageCursorURL extends PageCursorURL<BasicVal> {}

export class ValsPageCursorURL extends PageCursorURL<Val> {}

export class ValsCursor extends Cursor<Val> {}
