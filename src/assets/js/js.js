
jQuery(document).ready(function($){
	"use strict";
	jQuery("#menu-toggle").click(function(e) {
		e.preventDefault();
		jQuery("#outer-wrapper").toggleClass("toggled");
	});
	
	//datepicker
	jQuery("#startDate").datepicker();
	jQuery("#endDate").datepicker();
	jQuery("#studentDOB").datepicker({changeYear: true});
	
	//Student attendence detailed table
	jQuery('#attendenceDetailedTable').DataTable();
	jQuery('#emailArchiveTable').DataTable();
	jQuery('#emailProcessTable').DataTable();
	jQuery('#prepaid').DataTable();
	
});


