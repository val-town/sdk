// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown, { toFile } from '@valtown/sdk';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blobs', () => {
  test('list', async () => {
    const responsePromise = client.blobs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blobs.list({ prefix: 'prefix' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.blobs.delete('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support this response type https://docs.stoplight.io/docs/prism/1593d1470e4df-concepts#content-negotiation
  test.skip('store', async () => {
    const responsePromise = client.blobs.store('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support this response type https://docs.stoplight.io/docs/prism/1593d1470e4df-concepts#content-negotiation
  test.skip('store: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blobs.store(
        'x',
        { blob: await toFile(Buffer.from('# my file contents'), 'README.md') },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
