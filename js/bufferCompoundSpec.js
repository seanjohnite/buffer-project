describe('Buffer maker - ', function () {

	beforeEach(function() {
		buffer = new Buffer(1, 'L');
	});

	it('Buffer is a constructor and has volume and volume units', function () {
		expect(buffer.volume.value).toEqual(1);
		expect(buffer.volume.units).toEqual('L');
		expect(buffer instanceof Buffer).toBeTruthy();
	});

	it('Compound is a constructor that takes a string', function () {
		var compound = Compound("NaCl");
		expect(compound instanceof Compound).toBeTruthy();
	});

	it('Compound stores the identity of the compound along with its molecular weight in grams per mole', function () {
		var compound1 = new Compound('NaCl');
		var compound2 = new Compound('C8H8O');
		var compound3 = new Compound('CH3CH(CH3)CH3');
		var compound4 = new Compound('C21H20BrN3');
		expect(compound1.formula).toEqual('NaCl');
		expect(compound1.molecularWeight).toEqual(58.44);
		expect(compound2.formula).toEqual('C8H8O');
		expect(compound2.molecularWeight).toEqual(120.15);
		expect(compound2.mWunits).toEqual('grams/mol');
		expect(compound3.molecularWeight).toEqual(58.12);
		expect(compound4.molecularWeight).toEqual(394.31);
	});

	it('Buffer should have an addComponent method', function() {
		expect(buffer.addComponent instanceof Function).toBeTruthy();
	});

});