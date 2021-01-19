function DateDecribeExample() {

	var months = [];
	for(var month = 0; month < 12; month++){
		var _month = new Date(1900,month, 1, 0,0,0,0).toLocaleString('pt-br',{month: 'long'});
		months.push({ month: month+1, name: _month.substr(0,1).toUpperCase() + _month.substr(1,_month.length - 1) });
	}
	console.log(months);


	/* ################################ */

	var years = [];
	var _yearEnd = new Date().getFullYear() + 3;
	for(var year = 2018; year < _yearEnd; year++){
		years.push({ year: year, name: year.toString() });
	}
	console.log(years);	
	
}