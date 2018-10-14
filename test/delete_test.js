const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
	let munnu;
	
	beforeEach((done) => {
		munnu = new User({ name: 'Munnu' });
		munnu.save()
			.then(() => {
				done();
			});
	});

	it('model instance remove', (done) => {
		munnu.remove()
			.then(() => User.findOne({ name: 'Munnu' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});

	it('class method remove', (done) => {
		User.remove({ name: 'Munnu' })
			.then(() => User.findOne({ name: 'Munnu' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});

	it('class method findOneAndRemove', (done) => {
		User.findOneAndRemove({ name: 'Munnu' })
			.then(() => User.findOne({ name: 'Munnu' }))
			.then((user) => {
				assert(user === null);
				done();
			})
	});

	it('class method findByIdAndRemove', () => {
		User.findByIdAndRemove(munnu._id)
			.then(() => User.findOne({ name: 'Munnu' }))
			.then((user) => {
				assert(user === null);
				done();
			});
	});
});
