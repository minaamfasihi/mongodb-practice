const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
	.once('open', () => console.log('Good to go'))
	.on('error', (error) => {
		console.warn('Warning', error);
	});


// describe, it and beforeEach are all called with a done callback which, when called, signals to mocha that it can continue 
// running further tests

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		done();
	});
});
