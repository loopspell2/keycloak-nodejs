import KcAdminClient from "@keycloak/keycloak-admin-client";
import config from "../config/config.js";

async function getRealmsAndClient(config) {
  console.log("-------------------------------------");
  const adminClient = new KcAdminClient(config);
  await adminClient.auth(config);

  const realms = await adminClient.realms.find();
  realms.forEach((realm) => {
    console.log(realm.realm, realm.displayName);
  });

  // console.log("");
  // existingrealm.forEach(er => {
  //   console.log("existing realms : ",er.realm);
  // })
  console.log("");

  const clients = await adminClient.clients.find();
  clients.forEach((client) => console.log(client.clientId, client.secret));

  console.log("-------------------------------------");
}

getRealmsAndClient(config.adminClient);
getRealmsAndClient(config.adminQuikstart);
