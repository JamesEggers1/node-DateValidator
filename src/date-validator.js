var namespace;
(function (ns) {
	"use strict";
	ns.DateValidator = (function () {

		function validate(year, month, day) {
			if (typeof year === "undefined"
				|| typeof month === "undefined"
				|| typeof day === "undefined"){
				return false;
			}
			
			if (isNaN(month) || isNaN(day) || isNaN(year)) {
				return false;
			}
			
			month = parseInt(month, 10);
			day = parseInt(day, 10);
			year = parseInt(year, 10);
			
			if (month < 1 || day < 1 || year < 1) {
				return false;
			}
			
			var tmp_date = new Date(month + "/" + day + "/" + year);
			if (isNaN(tmp_date.getDate())) {
				return false;
			}
			
			if (tmp_date.getDate() !== day) {
				return false;
			}
			
			if (tmp_date.getMonth() + 1 !== month) {
				return false;
			}
			
			return true;
		}

		// exports
		return {
			validate: validate
		};
	} ());
}((typeof window === "undefined") ? exports : namespace || window));