const StatusCode = require("../services/statusCode");
module.exports = {
  sendSuccess: (req, res, data,status) => {
    res.status(200).json({
      code: StatusCode.success,
      message: "success",
      data: data,
    });
  },
  sendFailure: (req, res, errMsg) => {
    console.log(e)
    res.status(400).json({
      code: StatusCode.failure,
      message: errMsg,
    });
  },
  sendDuplicateError:(req, res, msg)=>{
    res.status(409).json({
      code: StatusCode.userExist,
      message: msg
    })
  },
  sendAuthError:(req,res,err)=>{
    res.status(403).json({
      code: StatusCode.userNotFound,
      message:"User not found"
    })
  },
  isNotEmpty:(value)=>{
    if(value === undefined || value === '' || value === 'undefined'){
     return false; 
    }
    return true;
  },
  validNumber:(number)=>{
    return number.length != 10
  }
};
