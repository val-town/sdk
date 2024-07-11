// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const valTown = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource username', () => {
  test('retrieve', async () => {
    const responsePromise = valTown.alias.username.retrieve('username');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.alias.username.retrieve('username', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
