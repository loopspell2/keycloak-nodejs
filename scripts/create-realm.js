import { readFileSync } from 'node:fs';
import adminClient from './keycloak-admin-client.js';

await adminClient.realms.create(
  JSON.parse(readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8'))
);

// import { readFileSync } from 'node:fs';
// import adminClient from './keycloak-admin-client.js';

// async function createRealms() {
//   try {
//     // Read the JSON file containing realm definitions
//     const realmData = JSON.parse(
//       readFileSync(new URL('../config/realm-import.json', import.meta.url), 'utf8')
//     );
    
//     // Check if we have an array of realms or a wrapped object with a realms property
//     const realmsToCreate = Array.isArray(realmData) ? realmData : realmData.realms;
    
//     if (!realmsToCreate || !Array.isArray(realmsToCreate)) {
//       throw new Error('Invalid realm import format. Expected an array of realms.');
//     }
    
//     console.log(`Found ${realmsToCreate.length} realms to create`);
    
//     // Create each realm one by one
//     for (const realmConfig of realmsToCreate) {
//       try {
//         console.log(`Creating realm: ${realmConfig.realm}`);
//         await adminClient.realms.create(realmConfig);
//         console.log(`Successfully created realm: ${realmConfig.realm}`);
//       } catch (error) {
//         console.error(`Error creating realm ${realmConfig.realm}:`, error.message);
//         // Continue with next realm even if this one fails
//       }
//     }
    
//     console.log('Realm creation process completed');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Run the function
// await createRealms();