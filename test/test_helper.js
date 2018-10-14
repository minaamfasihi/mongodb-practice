const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// before just runs once

before((done) => {
	mongoose.connect('mongodb://localhost/users_test');
	mongoose.connection
		.once('open', () => { done(); })
		.on('error', (error) => { done(); });
});


// describe, it and beforeEach are all called with a done callback which, when called, signals to mocha that it can continue 
// running further tests


// beforeEach runs before all the tests
beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		done();
	});
});
