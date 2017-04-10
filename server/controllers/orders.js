var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

exports.pushtoorders = function (req, res) {
  console.log(req.body);
};
