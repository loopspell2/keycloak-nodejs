import express from "express";
import Keycloak from "keycloak-connect";
import session from "express-session";

const app = express();
const port = 3000;
const memoryStore = new session.MemoryStore();

// Configure session
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true, maxAge: 3600000 },
    store: memoryStore,
  })
);

const kcConfig = {
  "confidential-port": 8080,
  "auth-server-url": "http://localhost:8080/",
  resource: "resource-server",
  "ssl-required": "external",
  "bearer-only": false,
  realm: "quickstart",
  credentials: {
    secret: "hJsQLTSg7gWdriL1UVGoGwu00cWLOTWT",
  },
};

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);

app.set("trust proxy", true);
app.use(keycloak.middleware());

app.get("/public", (req, res) => {
  res.json({ message: "public" });
});

app.get("/complain", keycloak.protect(), (req, res) => {
  res.json({ message: "complain", kauth: req.kauth });
});

app.get("/secured", keycloak.protect("realm:user"), (req, res) => {
  res.json({ message: "secured" });
});

app.get("/admin", keycloak.protect("realm:admin"), (req, res) => {
  res.json({ message: "admin" });
});

// app.use("*", (req, res) => {
//   res.send("Not found!");
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
