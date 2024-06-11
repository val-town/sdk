// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ValTown from 'val-town';
import { Response } from 'node-fetch';

const valTown = new ValTown({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emails', () => {
  test('send', async () => {
    const responsePromise = valTown.emails.send();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('send: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(valTown.emails.send({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ValTown.NotFoundError,
    );
  });

  test('send: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      valTown.emails.send(
        {
          attachments: [
            {
              content: 'string',
              filename: 'string',
              type: 'string',
              disposition: 'string',
              contentId: 'string',
            },
            {
              content: 'string',
              filename: 'string',
              type: 'string',
              disposition: 'string',
              contentId: 'string',
            },
            {
              content: 'string',
              filename: 'string',
              type: 'string',
              disposition: 'string',
              contentId: 'string',
            },
          ],
          bcc: 'string',
          cc: 'string',
          from: 'string',
          html: 'string',
          replyToList: { name: 'string', email: 'string' },
          subject: 'string',
          text: 'string',
          to: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ValTown.NotFoundError);
  });
});
