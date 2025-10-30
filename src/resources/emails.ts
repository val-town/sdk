// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Val Town supports sending emails from vals
 */
export class Emails extends APIResource {
  /**
   * Send emails
   *
   * @example
   * ```ts
   * const response = await client.emails.send({
   *   html: 'Hello <strong>world</strong>',
   *   subject: 'An important message',
   *   text: 'Hello world',
   * });
   * ```
   */
  send(
    body: EmailSendParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailSendResponse> {
    return this._client.post('/v1/email', { body, ...options });
  }
}

/**
 * Successfully sent email
 */
export interface EmailSendResponse {
  message: string;
}

export interface EmailSendParams {
  /**
   * A list of attachments to add to the email
   */
  attachments?: Array<EmailSendParams.Attachment>;

  /**
   * A single email or list of emails for one of the address fields
   */
  bcc?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;

  /**
   * A single email or list of emails for one of the address fields
   */
  cc?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;

  /**
   * An email address and name
   */
  from?: string | EmailSendParams.EmailNameAndAddress;

  /**
   * A set of headers to include the email that you send
   */
  headers?: { [key: string]: string };

  /**
   * HTML content of the email. Can be specified alongside text
   */
  html?: string;

  /**
   * A reply-to list of email addresses
   */
  replyToList?: EmailSendParams.EmailNameAndAddress | Array<EmailSendParams.EmailList>;

  /**
   * The subject line of the email
   */
  subject?: string;

  /**
   * Text content of the email, for email clients that may not support HTML
   */
  text?: string;

  /**
   * A single email or list of emails for one of the address fields
   */
  to?: string | EmailSendParams.EmailNameAndAddress | Array<string | EmailSendParams.EmailNameAndAddress>;
}

export namespace EmailSendParams {
  export interface Attachment {
    content: string;

    filename: string;

    contentId?: string;

    disposition?: string;

    type?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailList {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }

  /**
   * An email address and name
   */
  export interface EmailNameAndAddress {
    email: string;

    name?: string;
  }
}

export declare namespace Emails {
  export { type EmailSendResponse as EmailSendResponse, type EmailSendParams as EmailSendParams };
}
