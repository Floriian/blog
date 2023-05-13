const adminDatabase = db.getSiblingDB("admin");

adminDatabase.createUser({
  user: "blog_user",

  pwd: "blog_password",

  roles: [
    {
      role: "readWrite",

      db: "blogdatabase",
    },
  ],
});

const tsmdb = db.getSiblingDB("blogdatabase");

tsmdb.createCollection("delete_this");
