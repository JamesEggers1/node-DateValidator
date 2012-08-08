DateValidator  [![Build Status](https://secure.travis-ci.org/JamesEggers1/node-DateValidator.png)](http://travis-ci.org/JamesEggers1/node-DateValidator)
==============

The DateValidator project is to create a simple Date validator for both client-side and server-side JavaScript. At the moment, the goal is to keep things small and focus only on ensuring Day, Month, and Year are valid.  It is not intended to have the power of the node-dateutils project.

## Installation ##

    npm install DateValidator

## Testing the Package ##

Once the package is installed, you can run the unit tests associated with the package also using NPM.

    npm test DateValidator

## Node Usage ##

DateValidator at the moment provides an object with a single method `validate`.  The `validate` method expects a year, month, and day string parameters and will validate based on such.

```javascript
var date_validator = require("DateValidator").DateValidator;
var is_valid = date_validator.validate("2012", "12", "31"); //true
```

## Using Luhn Client-Side ##
In addition to being usable as a Node.js module, the validator can also be used client-side in the user's web browser.  When you install `DateValidator` using `npm`, instructions will appear how to install it for client-side JavaScript consumption.

While you can copy the `date-validator.js` file from the module's installation directory under `node_modles`, an automated script has been provided to assist you in this copy process and to make it more streamlined.  To do a client-side install, simply type the following `npm` command:

    npm run-script DateValidator client-install

Once you run that command, you'll be prompted to provide the path to which to install `date-validator.js` for use by your client-side JavaScript.  At that point, you can reference the file in your html and JavaScript code as shown below.


#### Html ####

```html
<script type="text/javascript" src="path/to/date-validator.js"></script>
```

#### JavaScript ####

```javascript
var validator = DateValidator;
var is_valid = date_validator.validate("2012", "12", "31"); //true
```

By default, the DateValidator module places itself into the global scope in the browser.  If you would prefer to NOT have it be directly attached to the `window` object, you can add your own `namespace` at the top of the date-validator.js file.
	
## False Conditions ##
	
The `validate` method will return `false` for the following conditions:
- if any parameter is `undefined`
- if any parameter is not numeric
- if any parameter is less than or equal to (<=) 0
- if the month is greater than 12
- if the day is invalid for the provided month (i.e. Feb 31);

## License (MIT) ##
Copyright (c) 2012 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.