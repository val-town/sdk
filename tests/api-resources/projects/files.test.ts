// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const client = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('create: only required params', async () => {
    const responsePromise = client.projects.files.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
      type: 'directory',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.projects.files.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
      type: 'directory',
      branch_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      content: null,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.projects.files.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      limit: 1,
      offset: 0,
      path: 'path',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.projects.files.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      limit: 1,
      offset: 0,
      path: 'path',
      branch_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      recursive: true,
      version: 0,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.projects.files.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.projects.files.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
      branch_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      content: 'content',
      name: 'name',
      parent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'file',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.projects.files.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.projects.files.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
      branch_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      recursive: true,
    });
  });

  test('getContent: required and optional params', async () => {
    const response = await client.projects.files.getContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      path: 'path',
      branch_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      version: 0,
      'Cache-Control': 'Cache-Control',
      'If-Match': 'If-Match',
      'If-Modified-Since': 'If-Modified-Since',
      'If-None-Match': 'If-None-Match',
      'If-Unmodified-Since': 'If-Unmodified-Since',
    });
  });
});
