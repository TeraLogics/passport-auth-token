/* global describe, it, expect, before */
/* jshint expr: true */

var Strategy = require('../lib/strategy');

describe('Strategy', function () {

	describe('handling a request with valid credentials in body using custom field name', function () {
		var strategy = new Strategy({ tokenFields: ['tok'] }, function (token, done) {
			if (token === 'abcdefghijklmnopqrstuvwxyz') {
				return done(null, {
					id: '1234'
				}, {
					scope: 'read'
				});
			}

			return done(null, false);
		});

		var user,
			info;

		before(function (done) {
			chai.passport.use(strategy)
				.success(function (u, i) {
					user = u;
					info = i;
					done();
				})
				.req(function (req) {
					req.body = {};
					req.body.tok = 'abcdefghijklmnopqrstuvwxyz';
				})
				.authenticate();
		});

		it('should supply user', function () {
			expect(user).to.be.an('object');
			expect(user.id).to.equal('1234');
		});

		it('should supply info', function () {
			expect(info).to.be.an('object');
			expect(info.scope).to.equal('read');
		});
	});

	describe('handling a request with valid credentials in body using custom field name with object notation', function () {
		var strategy = new Strategy({ tokenFields: ['user[token]'] }, function (token, done) {
			if (token === 'abcdefghijklmnopqrstuvwxyz') {
				return done(null, {
					id: '1234'
				}, {
					scope: 'read'
				});
			}

			return done(null, false);
		});

		var user,
			info;

		before(function (done) {
			chai.passport.use(strategy)
				.success(function (u, i) {
					user = u;
					info = i;
					done();
				})
				.req(function (req) {
					req.body = {};
					req.body.user = {};
					req.body.user.token = 'abcdefghijklmnopqrstuvwxyz';
				})
				.authenticate();
		});

		it('should supply user', function () {
			expect(user).to.be.an('object');
			expect(user.id).to.equal('1234');
		});

		it('should supply info', function () {
			expect(info).to.be.an('object');
			expect(info.scope).to.equal('read');
		});
	});

});
