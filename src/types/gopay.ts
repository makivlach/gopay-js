/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

export interface Constructor {
  credentials: Credentials;
  enviroment: "sandbox" | "production";
  log: boolean;
}

export type Credentials = {
  clientID: string;
  goID: string;
  clientSecret: string;
};



export type TokenType = {
  token_type: 'bearer'
  access_token: string

  // Is not being used
  refresh_token: ''
  expires_in: number
}
export type TokenScopeType = 'payment-create' | 'payment-all'
