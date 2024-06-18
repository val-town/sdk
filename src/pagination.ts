// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageCursorURLResponse<Item> {
  data: Array<Item>;

  next_page: string;
}

export interface PageCursorURLParams {
  limit?: number;

  cursor?: string;
}

export class PageCursorURL<Item> extends AbstractPage<Item> implements PageCursorURLResponse<Item> {
  data: Array<Item>;

  next_page: string;

  constructor(
    client: APIClient,
    response: Response,
    body: PageCursorURLResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.next_page = body.next_page || '';
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
    const url = this.next_page;
    if (!url) return null;

    return { url: new URL(url) };
  }
}
