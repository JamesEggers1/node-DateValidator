DateValidator
==============

The DateValidator project is to create a simple Date validator for both client-side and server-side JavaScript. At the moment, the goal is to keep things small and focus only on ensuring Day, Month, and Year are valid.  It is not intended to have the power of the node-dateutils project.

## Installation ##

    npm install DateValidator

## Testing the Package ##

Once the package is installed, you can run the unit tests associated with the package also using NPM.

    npm test DateValidator

## Usage ##

DateValidator at the moment provides an object with a single method `validate`.  The `validate` method expects a year, month, and day string parameters and will validate based on such.

    var date_validator = require("DateValidator").DateValidator;
	var is_valid = date_validator.validate("2012", "12", "31"); //true
	
The `validate` method will return `false` for the following conditions:
- if any parameter is `undefined`
- if any parameter is not numeric
- if any parameter is less than or equal to (<=) 0
- if the month is greater than 12
- if the day is invalid for the provided month (i.e. Feb 31);