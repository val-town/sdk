// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from '@valtown/sdk';
import { Response } from 'node-fetch';

const valTown = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eval', () => {
  test('run: only required params', async () => {
    const responsePromise = valTown.eval.run({ code: 'console.log(1);' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: required and optional params', async () => {
    const response = await valTown.eval.run({ code: 'console.log(1);', args: [{}, {}, {}] });
  });
});
