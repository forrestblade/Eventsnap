interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'MCLC8l8HE0QSLAxd3EFHL4DVjzHNg3bk',
  domain: 'events-dev.auth0.com',
  callbackURL: 'http://localhost:4200'
};
