const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
	let munnu;

	beforeEach((done) => {
		munnu = new User({ name: 'Munnu' });
		munnu.save()
			.then(() => done());
	});

	it('Finds all users with name of Munnu', (done) => {
		User.find({ name: 'Munnu' })
			.then((users) => {
				assert(users[0]._id.toString() === munnu._id.toString());
				done();
			});
	});
});