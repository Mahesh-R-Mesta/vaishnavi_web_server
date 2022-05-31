const StatusCode = require("../services/statusCode");
module.exports = {
  sendSuccess: (req, res, data) => {
    res.status(200).json({
      code: StatusCode.success,
      message: "success",
      data: data,
    });
  },
  sendFailure: (req, res, errMsg) => {
    res.status(200).json({
      code: StatusCode.failure,
      message: errMsg,
    });
  },
};
