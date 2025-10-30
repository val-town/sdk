// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ValTown } from '../client';

export abstract class APIResource {
  protected _client: ValTown;

  constructor(client: ValTown) {
    this._client = client;
  }
}
