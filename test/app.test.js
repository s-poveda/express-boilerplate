const app = require('../src/app');
const { expect } = require('chai');
const superTest = require('superTest');

describe('App', ()=>{
	it('GET responds 200 at "/"', ()=>{
		return superTest(app)
			.get('/')
			.expect(200);
	});
});
