import jwt from  'jsonwebtoken'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static removeToken() {
    localStorage.removeItem('token')
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    const now = Math.round(Date.now() / 1000)
    return payload && now < payload.exp
  }

  static getCurrentUserId() {
    const payload = this.getPayload()
    return payload && payload.sub
  }

  /*FM: I've created the above function and changed the below:
    - The new function above was repeating some of the work of the one below, so I've tried to combine them.
    - However, this can be reverted, keeping in the new function and then work to combine them later perhaps.
  */
  static isCurrentUser(user) {
    return this.getCurrentUserId() === user._id
  }


}

export default Auth
