
exports = module.exports = function(app, mongoose) {
	var commentSchema = new mongoose.Schema({
		name:   String,
		email:    String,
		comment: String,
		date: Date
	}, {collection : 'comments'});
	mongoose.model('Comment2', commentSchema);
};
