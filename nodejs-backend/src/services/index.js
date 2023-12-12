const users = require("./users/users.service.js");
const groups = require("./groups/groups.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(groups);
    // ~cb-add-configure-service-name~
};
