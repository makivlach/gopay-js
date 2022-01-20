/**
 * gopay-js
 *
 * @license MIT
 * @author Froneb s.r.o. <hello@froneb.com>
 * @year 2022
 */

import { GoPay } from "../factory/GoPay";

export namespace misc {
  export interface Constructor {
    client: GoPay;
  }
}