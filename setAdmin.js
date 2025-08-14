

import admin from "firebase-admin";
import path from "path";

// Ruta a tu JSON de credenciales
const serviceAccount = path.resolve("./magictlaxke.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Reemplaza con el UID del usuario que quieres como admin
const uidAdmin = "IZhezhxddJVRO35aIq5vlPIrg102";

admin.auth().setCustomUserClaims(uidAdmin, { admin: true })
  .then(() => console.log("✅ Usuario marcado como admin"))
  .catch(console.error);

