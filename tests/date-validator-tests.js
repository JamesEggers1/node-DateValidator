"use strict";

var mocha = require("mocha")
	, should = require("should")
	, validator = require("../src/date-validator").DateValidator;
	
describe("Date Validator", function(){
	
	describe("Happy Path", function(){
		it("should return true with a valid date.", function(){
			var year = "2012"
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.true;
		});
	});
	
	describe("Non-Numeric String Input", function(){
	
		it("should return false if no parameters are passed into it.", function(){
			validator.validate().should.be.false;
		});
		
		it("should return false if year is undefined (2 parameter scenario).", function(){
			var year
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if month is undefined.", function(){
			var year = "2012"
				, month
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if day is undefined.", function(){
			var year = "2012"
				, month = "01"
				, day;
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if year is not numeric.", function(){
			var year = "YYYY"
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if month is not numeric.", function(){
			var year = "2012"
				, month = "MM"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if day is not numeric.", function(){
			var year = "2012"
				, month = "01"
				, day = "DD";
			
			validator.validate(year, month, day).should.be.false;
		});
	});
	
	describe("Numeric Input", function(){
		it("should return false if year is negative.", function(){
			var year = "-2012"
				, month = "01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if month is negative.", function(){
			var year = "2012"
				, month = "-01"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if day is negative.", function(){
			var year = "2012"
				, month = "01"
				, day = "-01";
			
			validator.validate(year, month, day).should.be.false;
		});
		
		it("should return false if month is greater than 12.", function(){
			var year = "2012"
				, month = "13"
				, day = "01";
			
			validator.validate(year, month, day).should.be.false;
		});
	});
	
	describe("Days In a Month", function(){
		describe("Months with 31 Days", function(){
			it("January", function(){
				var year = "2012"
					, month = "01"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("March", function(){
				var year = "2012"
					, month = "03"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("May", function(){
				var year = "2012"
					, month = "05"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("July", function(){
				var year = "2012"
					, month = "07"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("August", function(){
				var year = "2012"
					, month = "08"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("October", function(){
				var year = "2012"
					, month = "10"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("December", function(){
				var year = "2012"
					, month = "12"
					, day = "31";

				validator.validate(year, month, day).should.be.true;
			});
		});
		
		describe("Months with 30 Days", function(){
			it("April", function(){
				var year = "2012"
					, month = "04"
					, day = "30";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("June", function(){
				var year = "2012"
					, month = "06"
					, day = "30";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("September", function(){
				var year = "2012"
					, month = "09"
					, day = "30";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("November", function(){
				var year = "2012"
					, month = "11"
					, day = "30";

				validator.validate(year, month, day).should.be.true;
			});
		});

		describe("Leap Year", function(){
			it("should return false for February 29, 2011 (non-leap year).", function(){
				var year = "2011"
					, month = "02"
					, day = "29";

				validator.validate(year, month, day).should.be.false;
			});
			
			it("should return true for February 29, 2012 (mid-centuary leap year).", function(){
				var year = "2012"
					, month = "02"
					, day = "29";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("should return true for February 29, 2000 (centuary leap year).", function(){
				var year = "2000"
					, month = "02"
					, day = "29";

				validator.validate(year, month, day).should.be.true;
			});
			
			it("should return false for February 29, 1900 (not a centuary leap year).", function(){
				var year = "1900"
					, month = "02"
					, day = "29";

				validator.validate(year, month, day).should.be.false;
			});
		});
	});
	
});