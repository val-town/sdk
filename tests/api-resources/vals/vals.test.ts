// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const valTown = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vals', () => {
  test('retrieve', async () => {
    const responsePromise = valTown.vals.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      valTown.vals.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = valTown.vals.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.vals.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.vals.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { name: 'x', privacy: 'public', readme: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = valTown.vals.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.vals.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('run', async () => {
    const responsePromise = valTown.vals.run('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(valTown.vals.run('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ValTown.NotFoundError,
    );
  });

  test('run: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.vals.run('string', { args: [{}, {}, {}] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });

  test('runGet', async () => {
    const responsePromise = valTown.vals.runGet('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runGet: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(valTown.vals.runGet('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      ValTown.NotFoundError,
    );
  });

  test('runGet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.vals.runGet('string', { args: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
