import {Injectable} from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CipherService {

  private req = 'mywom';

  cipher(data: string) {
    const encrypt = crypto.AES.encrypt(JSON.stringify(data), this.req);
    return encrypt.toString();
  }

  deCipher(data: string) {
    if (data != null) {
      const bytes = crypto.AES.decrypt(data, this.req);
      return JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
  }
}
