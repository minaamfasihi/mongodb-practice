const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
	it('saves a user', (done) => {
		const munnu = new User({ name: 'Munnu' });
		munnu.save()
			.then(() => {
				assert(!munnu.isNew);
				done();
			});
	});
});
