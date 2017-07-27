
var filterHigh = false;
var filterMed = false;
var filterLow = false;

var filterAccounting = false;
var filterHR = false;
var filterIT = false;
var filterMgmt = false;
var filterMarketing = false;
var filterPM = false;
var filterRND = false;
var filterSales = false;
var filterSupport = false;
var filterTech = false;

var allDept = true;
var allSaralies = true;

parseArgs();

function parseArgs(){
	console.log("Parsing Arguments");

	var URL = window.location.href;
	console.log("current URL="+URL);

 	var searchParams = new URLSearchParams(URL);

 	//Iterate the search parameters.
	for (let p of searchParams) {
  		console.log(p);
	}

	filterHigh = searchParams.get("filterHigh");
	if(filterHigh===null) filterHigh = false;
	filterMed = searchParams.get("filterMed");
	if(filterMed===null) filterMed = false;
	filterLow = searchParams.get("filterLow");
	if(filterLow===null) filterLow = false;

	allSalaries = (!filterHigh && !filterMed && !filterLow);
	
	filterAccounting = searchParams.get("filterAccounting");
	if(filterAccounting===null) filterAccounting = false;
	filterHR = searchParams.get("filterHR");
	if(filterHR===null) filterHR = false;
	filterIT = searchParams.get("filterIT");
	if(filterIT===null) filterIT = false;
	filterMgmt = searchParams.get("filterMgmt");
	if(filterMgmt===null) filterMgmt = false;
	filterMarketing = searchParams.get("filterMarketing");
	if(filterMarketing===null) filterMarketing= false;
	filterPM = searchParams.get("filterPM");
	if(filterPM===null) filterPM = false;
	filterRND = searchParams.get("filterRND");
	if(filterRND===null) filterRND = false;
	filterSales = searchParams.get("filterSales");
	if(filterSales===null) filterSales = false;
	filterSupport = searchParams.get("filterSupport");
	if(filterSupport===null) filterSupport = false;
	filterTech = searchParams.get("filterTech");
	if(filterTech===null) filterTech = false;

	allDept = (!filterAccounting && !filterHR && !filterIT && !filterMgmt && !filterMarketing && 
		 !filterPM && !filterRND && !filterSales && !filterSupport && !filterTech);

}

function buildArgs(page){
	// window.alert("Building Arguments");

	var params = new URLSearchParams();
	//filterHigh=true;

	if(filterHigh) {params.set("filterHigh","true"); }
	if(filterMed) {params.set("filterMed","true");}
	if(filterLow) {params.set("filterLow","true"); }

	if(filterAccounting) {params.set("filterAccounting","true"); }
	if(filterHR) {params.set("filterHR","true");}
	if(filterIT) {params.set("filterIT","true");}
	if(filterMgmt) {params.set("filterMgmt","true");}
	if(filterMarketing) {params.set("filterMarketing","true"); }
	if(filterPM) {params.set("filterPM","true");}
	if(filterRND) {params.set("filterRND","true");}
	if(filterSales) {params.set("filterSales","true");}
	if(filterSupport) {params.set("filterSupport","true"); }
	if(filterTech) {params.set("filterTech","true"); }

	var URL = page;
	if(params.toString().trim().length >= 0)
		URL = URL+ "?q=URLUtils.searchParams&"+params.toString().trim();

	//window.alert(URL);
	return URL;
}

function applyFilter(page, checkbox){
	var filterName = checkbox.id;
	var isChecked = checkbox.checked===true;

	if("filterHigh".localeCompare(filterName)===0) filterHigh = !isChecked;
	if("filterMed".localeCompare(filterName)===0) filterMed = !isChecked;
	if("filterLow".localeCompare(filterName)===0) filterLow = !isChecked;

	if("filterAccounting".localeCompare(filterName)===0) filterAccounting = !isChecked;
	if("filterHR".localeCompare(filterName)===0) filterHR = !isChecked;
	if("filterIT".localeCompare(filterName)===0) filterIT = !isChecked;
	if("filterMgmt".localeCompare(filterName)===0) filterMgmt = !isChecked;
	if("filterMarketing".localeCompare(filterName)===0) filterMarketing = !isChecked;
	if("filterPM".localeCompare(filterName)===0) filterPM = !isChecked;
	if("filterRND".localeCompare(filterName)===0) filterRND = !isChecked;
	if("filterSales".localeCompare(filterName)===0) filterSales = !isChecked;
	if("filterSupport".localeCompare(filterName)===0) filterSupport = !isChecked;
	if("filterTech".localeCompare(filterName)===0) filterTech = !isChecked;

	window.location = buildArgs(page);
}

function setCheckboxValues(){
	// $("#filterHigh").prop("checked",!filterHigh);
	// document.getElementById("filterMed").checked = !filterMed;
	// document.getElementById("filterLow").checked = !filterLow;
	$("#filterAllSal").prop("checked", allSalaries);
	$("#filterHigh").prop("checked", !filterHigh);
	$("#filterMed").prop("checked", !filterMed);
	$("#filterLow").prop("checked", !filterLow);

	$("#filterAllDept").prop("checked", allDept);
	$("#filterAccounting").prop("checked", !filterAccounting);
	$("#filterHR").prop("checked", !filterHR);
	$("#filterIT").prop("checked", !filterIT);
	$("#filterMgmt").prop("checked", !filterMgmt);
	$("#filterMarketing").prop("checked", !filterMarketing);
	$("#filterPM").prop("checked", !filterPM);
	$("#filterRND").prop("checked", !filterRND);
	$("#filterSales").prop("checked", !filterSales);
    $("#filterSupport").prop("checked", !filterSupport);
	$("#filterTech").prop("checked", !filterTech);

}

function allSalaryRanges(page, checkbox){
	var filterName = checkbox.id;
	var isChecked = checkbox.checked===true;

	filterHigh = !isChecked;
	filterMed = !isChecked;
	filterLow = !isChecked;

	window.location = buildArgs(page);
}

function allDepartments(page, checkbox){
	var filterName = checkbox.id;
	var isChecked = checkbox.checked===true;

	filterAccounting = !isChecked;
	filterHR = !isChecked;
	filterIT = !isChecked;
	filterMgmt = !isChecked;
	filterMarketing = !isChecked;
	filterPM = !isChecked;
	filterRND = !isChecked;
	filterSales = !isChecked;
	filterSupport = !isChecked;
	filterTech = !isChecked;

	window.location = buildArgs(page);
}

function isFilterApplied(filterName){
	if("filterHigh".localeCompare(filterName)===0) return filterHigh;
	if("filterMed".localeCompare(filterName)===0) return filterMed;
	if("filterLow".localeCompare(filterName)===0) return filterLow;

	if("filterAccounting".localeCompare(filterName)===0) return filterAccounting;
	if("filterHR".localeCompare(filterName)===0) return filterHR;
	if("filterIT".localeCompare(filterName)===0) return filterIT;
	if("filterMgmt".localeCompare(filterName)===0) return filterMgmt;
	if("filterMarketing".localeCompare(filterName)===0) return filterMarketing;
	if("filterPM".localeCompare(filterName)===0) return filterPM;
	if("filterRND".localeCompare(filterName)===0) return filterRND;
	if("filterSales".localeCompare(filterName)===0) return filterSales;
	if("filterSupport".localeCompare(filterName)===0) return filterSupport;
	if("filterTech".localeCompare(filterName)===0) return filterTech;
}