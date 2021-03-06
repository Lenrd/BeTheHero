const connection = require('../databases/connection');

module.exports = {
	async index(req, res) {
		const ong_id = req.ong;

		const incidents = await connection('incidents').where('ong_id', ong_id).select('*');
		return res.json(incidents);
	}
};
