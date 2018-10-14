const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
	let munnu;

	beforeEach((done) => {
		munnu = new User({ name: 'Munnu', postCount: 1 });
		munnu.save()
			.then(() => done());
	});

	function assertName(operation, done) {
		operation
			.then(() => User.find({}))
			.then((users) => {
				assert(users.length === 1);
				assert(users[0].name === 'Minaam');
				done();
			})
	}

	it('instance type using set and save', (done) => {
		munnu.set('name', 'Minaam');
		assertName(munnu.save(), done);
	});

	it('model instance can update', (done) => {
		assertName(munnu.update({ name: 'Minaam' }, done));
	});

	it('a model class can update', (done) => {
		assertName(
			User.update({ name: 'Munnu' }, { name: 'Minaam' }),
			done
		);
	});

	it('a model class can update one record', (done) => {
		assertName(
			User.findOneAndUpdate({ name: 'Munnu' }, { name: 'Minaam' }),
			done
		);
	});

	it('a model class can find a record with an id and update', (done) => {
		assertName(
			User.findByIdAndUpdate(munnu._id, { name: 'Minaam' }),
			done
		);
	});

	it('A user can have their postCount incremented by 1', (done) => {
		User.update({ name: 'Munnu' }, { $inc: { postCount: 1 } })
			.then(() => User.findOne({ name: 'Munnu' }))
			.then((user) => {
				assert(user.postCount === 2);
				done();
			});
	});
});