const errorHandler = (err, req, res, next) => {
  if(err.message){
    res.status(400).json({
      "status":"failed",
      "message": err.message
    });
  }
  else if(err){
    res.status(400).json({
      "status":"error",
      "message": err
    });
  }
  else{
    next();
  }

};

module.exports = { errorHandler };
