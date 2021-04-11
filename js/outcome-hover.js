$(document).ready(function() {

	var outcomes = $(".outcome");
	var outcome_ids = [];

	// Get all the metalanguage terms on the page and create empty template divs
	$.each(outcomes, function(index, outcome) {

		var outcome_id = outcome.innerText.toLowerCase().replace(/ /g, "-");

		outcome.id = "outcome-" + outcome_id 
		outcome_ids.push(outcome_id);

		var outcome_template_div = $("<div id='" + outcome_id + "-template' style='display: none'></div>");
		$('footer').before(outcome_template_div);
	});

	// Retrieves the glossary page and creates the templates for each of the terms from that content
	var temp_div = $('<div>');
	temp_div.load("../../outcomes.html", function() {
		$.each(outcome_ids, function(index, outcome_id) {
			var outcome_elements = $("#" + outcome_id, temp_div).nextUntil('h3');
			var account_preview = outcome_elements[0];
			var outcome_template_div = $("#" + outcome_id + "-template");
			outcome_template_div.html(account_preview);
			tippy("#outcome-" + outcome_id, {
				html: "#" + outcome_id + "-template",
				size: "large",
				theme: "light"
			});
		});
	});
});