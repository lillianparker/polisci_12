define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Islamic',  // Will be used in the user feedback 
				nameForLogging : 'Islamic', // Will be used in the logging
				// An array of all media objects for this category.
				mediaArray : [
				    {image : 'i_00.png'}, 
					{image : 'i_01.png'}, 
					{image : 'i_02.png'}, 
					{image : 'i_03.png'}, 
					{image : 'i_04.png'}, 
					{image : 'i_05.png'}, 
					{image : 'i_06.png'}, 
					{image : 'i_07.png'}, 
					{image : 'i_08.png'}, 
					{image : 'i_09.png'}, 
					{image : 'i_10.png'}, 
					{image : 'i_11.png'}
				]
			}, 
			{
				nameForFeedback : 'Non-Islamic',  // Will be used in the user feedback 
				nameForLogging : 'Non-Islamic', // Will be used in the logging
				// An array of all media objects for this category.
				mediaArray : [
					{image : 'ni_00.png'}, 
					{image : 'ni_01.png'}, 
					{image : 'ni_02.png'}, 
					{image : 'ni_03.png'}, 
					{image : 'ni_04.png'}, 
					{image : 'ni_05.png'}, 
					{image : 'ni_06.png'}, 
					{image : 'ni_07.png'}, 
					{image : 'ni_08.png'}, 
					{image : 'ni_09.png'}, 
					{image : 'ni_10.png'}, 
					{image : 'ni_11.png'}
				]
			}
		],

		examplePrimeStimulus : {
			nameForLogging : 'examplePrime', // Will be used in the logging
			// An array of all media objects for this category.
			mediaArray : [
				{image : 'ampchair.png'}, 
				{image : 'amplamp.png'}, 
				{image : 'ampumbrella.png'}
			]
		},

		base_url : { // Where are your images?
			image : 'https://lillianparker.github.io/images'
		}
	});
});
