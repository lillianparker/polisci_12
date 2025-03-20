
// define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

// 	var API = new APIConstructor();
	
	
// 	return ampExtension({
// 		primeCats :  [
// 			{
// 				nameForFeedback : 'Black people',  //Will be used in the user feedback 
// 				nameForLogging : 'Black people', //Will be used in the logging
// 				//An array of all media objects for this category.
// 				mediaArray : [
// 				    {image : 'b01.jpg'}, 
// 					{image : 'b02.jpg'}, 
// 					{image : 'b03.jpg'}, 
// 					{image : 'b04.jpg'}, 
// 					{image : 'b05.jpg'}, 
// 					{image : 'b06.jpg'}, 
// 					{image : 'b07.jpg'}, 
// 					{image : 'b08.jpg'}, 
// 					{image : 'b09.jpg'}, 
// 					{image : 'b10.jpg'}, 
// 					{image : 'b11.jpg'}, 
// 					{image : 'b12.jpg'}]

// 			}, 
// 			{
// 				nameForFeedback : 'White people',  //Will be used in the user feedback 
// 				nameForLogging : 'White people', //Will be used in the logging
// 				//An array of all media objects for this category.
// 				mediaArray : [
// 				    {image : 'w01.jpg'}, 
// 					{image : 'w02.jpg'}, 
// 					{image : 'w03.jpg'}, 
// 					{image : 'w04.jpg'}, 
// 					{image : 'w05.jpg'}, 
// 					{image : 'w06.jpg'}, 
// 					{image : 'w07.jpg'}, 
// 					{image : 'w08.jpg'}, 
// 					{image : 'w09.jpg'}, 
// 					{image : 'w10.jpg'}, 
// 					{image : 'w11.jpg'}, 
// 					{image : 'w12.jpg'}]
// 			}
// 		],

// 		examplePrimeStimulus : 
// 		{
// 			nameForLogging : 'examplePrime', //Will be used in the logging
// 			//An array of all media objects for this category.
// 			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
// 		},

// 		base_url : {//Where are your images at?
// 			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
// 		}
// 	});
// });


define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
                {
                    nameForFeedback: 'Islamic',
                    nameForLogging: 'Islamic',
                    mediaArray: [
                        { image: 'LO.jpg' },
                        { image: 'L1.jpg' },
                        { image: 'L2.jpg' },
                        { image: 'L3.jpg' },
                        { image: 'L4.jpg' },
                        { image: 'L5.jpg' },
                        { image: 'L6.jpg' },
                        { image: 'L7.jpg' },
                        { image: 'L8.jpg' },
                        { image: 'L9.jpg' },
                        { image: 'L10.jpg' },
                        { image: 'L11.jpg' }
                    ]
                }, 
                {
                    nameForFeedback: 'Non-Islamic',
                    nameForLogging: 'Non-Islamic',
                    mediaArray: [
                        { image: 'MO.jpg' },
                        { image: 'M1.jpg' },
                        { image: 'M2.jpg' },
                        { image: 'M3.jpg' },
                        { image: 'M4.jpg' },
                        { image: 'M5.jpg' },
                        { image: 'M6.jpg' },
                        { image: 'M7.jpg' },
                        { image: 'M8.jpg' },
                        { image: 'M9.jpg' },
                        { image: 'M10.jpg' },
                        { image: 'M11.jpg' }
                    ]
                }
		],

            examplePrimeStimulus: {
                nameForLogging: 'examplePrime',
                mediaArray: [
                    { image: 'armchair.jpg' },
                    { image: 'lamp.jpg' },
                    { image: 'umbrella.jpg' }
                ]
            },

		base_url : {//Where are your images at?
			// image: "https://lillianparker.github.io/images"
            image: 'https://lillianparker.github.io/polisci_12/images/'
		}
	});
});
