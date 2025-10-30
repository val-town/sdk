// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageCursorURLResponse<Item> {
  data: Array<Item>;

  links: PageCursorURLResponse.Links;
}

export namespace PageCursorURLResponse {
  export interface Links {
    next?: string;

    prev?: string;
  }
}

export interface PageCursorURLParams {
  limit?: number;

  offset?: number;
}

export class PageCursorURL<Item> extends AbstractPage<Item> implements PageCursorURLResponse<Item> {
  data: Array<Item>;

  links: PageCursorURLResponse.Links;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorURLResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.links = body.links || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageCursorURLParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const url = this.links?.next;
    if (!url) return null;

    return { url: new URL(url) };
  }
}

export interface CursorResponse<Item> {
  data: Array<Item>;

  links: CursorResponse.Links;
}

export namespace CursorResponse {
  export interface Links {
    next?: string;
  }
}

export interface CursorParams {
  cursor?: string;
}

export class Cursor<Item> extends AbstractPage<Item> implements CursorResponse<Item> {
  data: Array<Item>;

  links: CursorResponse.Links;

  constructor(
    client: APIClient,
    response: Response,
    body: CursorResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.links = body.links || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CursorParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.links?.next;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor,
      },
    };
  }
}
