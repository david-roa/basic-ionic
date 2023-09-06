import {Injectable} from '@angular/core';
import {CipherService} from '../cipher/cipher.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private cipher: CipherService
  ) {
  }

  putLocal(key: string, value: string) {
    if (value) {
      const valCipher = this.cipher.cipher(value);
      localStorage.setItem(key, valCipher);
    }
  }

  getLocal(key: string) {
    const value = localStorage.getItem(key);
    if (value)
      return this.cipher.deCipher(value);
  }

  getObjLocal(key: string) {
    const value = localStorage.getItem(key);
    if (value)
      return JSON.parse(this.cipher.deCipher(value));
  }

  delLocal(key: string) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }
  putLocalSession(key: string, value: string) {
    if (value) {
      const valCipher = this.cipher.cipher(value);
      sessionStorage.setItem(key, valCipher);
    }
  }

  getLocalSession(key: string) {
    const value = sessionStorage.getItem(key);
    if (value)
      return this.cipher.deCipher(value);
  }

  getObjLocalSession(key: string) {
    const value = sessionStorage.getItem(key);
    if (value)
      return JSON.parse(this.cipher.deCipher(value));
  }

  delLocalSession(key: string) {
    sessionStorage.removeItem(key);
  }

  clearAllSession() {
    sessionStorage.clear();
  }
}
