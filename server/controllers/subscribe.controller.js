const subcscribeModel = require('../../db/models/subscribe.model');

exports.getOneEmail = (req, res) => {
  subcscribeModel.getOneEmail(req.params.email, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

exports.addEmail = (req, res) => {
  console.log(req);
  subcscribeModel.addEmail(req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};
