class User {
  private _accessToken: string | null;
  private _refreshToken: string | null;
  private _isAdmin: boolean;

  constructor() {
    this._accessToken = null;
    this._refreshToken = null;
    this._isAdmin = false;
  }

  getAccessToken() {
    return this._accessToken;
  }

  setAccessToken(newAccessToken: string) {
    this._accessToken = newAccessToken;
  }

  deleteAccessToken() {
    this._accessToken = null;
  }
  getRefreshToken() {
    return this._refreshToken;
  }

  setRefreshToken(newRefreshToken: string) {
    this._refreshToken = newRefreshToken;
  }

  deleteRefreshToken() {
    this._refreshToken = null;
  }

  isAdmin() {
    return this._isAdmin;
  }

  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }
}

export const user = new User();
