import callbackToResponse from './wrap-callback-with-response';

module.exports.find = (model) => (req, res) => model.find({}, callbackToResponse(res));


module.exports.findById = (model) => (req, res) => model.findById(req.params.id, callbackToResponse(res));

module.exports.create = (model) => (req, res) => model.create(req.body, callbackToResponse(res));

module.exports.updateById = (model) => (req, res) => model.update({ _id: req.params.id },{$set:req.body}, callbackToResponse(res));

module.exports.deleteById = (model) => (req, res) => model.remove({ _id: req.params.id }, callbackToResponse(res));
