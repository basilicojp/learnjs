descrive('LearnJS', function() {
	it ('can show a probrem view', function() {
        learnjs.showVies('#probrem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
	});
});