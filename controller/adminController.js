const Utility = require("../services/utilityController");
module.exports = {
  isLogin: (req, res, err) => {
    console.log(req.baseUrl);
    console.log(req.query);
    Utility.sendSuccess(req, res, {
      isLoggedIn: true,
    });
  },

  login: (req, res, err) => {
    console.log(req.body);
    console.log(req.baseUrl);
    if (req.body.username == "Shree" && req.body.password == "123@1998") {
      Utility.sendSuccess(req, res, {
        username: req.body.username,
        isLoggedIn: true,
      });
    } else {
      Utility.sendFailure(req, res, "invalid Username or password");
    }
  },
};
