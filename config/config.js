const baseUrl = "http://localhost:8080";

export default {
  baseUrl: baseUrl,
  token: {
    username: "admin",
    password: "12345",
    grantType: "password",
    client_id: "test-cli",
    realmName: "master",
  },
  adminClient: {
    baseUrl: baseUrl,
    realmName: "master",
    username: "admin",
    password: "12345",
    grantType: "password",
    clientId: "admin-cli",
  },
  adminQuikstart: {
    baseUrl: baseUrl,
    realmName: "quickstart",
    username: "admin",
    password: "admin",
    grantType: "password",
    clientId: "admin-cli",
  },
};
