var mongoose = require('mongoose');
var Exercise = mongoose.model('exercises');


var exercisesSeed = [
	{
		name: 'Basic HTML',
		description: 'Used HTML and CSS to copy images that were provided.',
		tags: ['HTML, CSS']
	},
	{
		name: 'CSS Card Flip',
		description: 'Use CSS to create a 3D effect to flip a card.',
		tags: ['HTML, CSS']
	},
	{
		name: 'Javascript Browser Basics',
		description: 'Use javascript to prompt a user for information.',
		tags: ['HTML, Javascript']
	},
	{
		name: 'Javascript Conditionals',
		description: 'Prompt user for information and validate.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Loops Part1',
		description: 'Use loops to solve different exercises.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Functions Part1',
		description: 'Use functions to solve the exercises.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Functions Part2',
		description: 'Use functions to solve the exercises.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Iteration',
		description: 'Use loops to solve exercises and then work with the DOM.',
		tags: ['HTML, Javascript']
	},
	{
		name: 'Javascript Match Maker',
		description: 'Prompt user for information and then match the student to a mentor.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Deck of Cards',
		description: 'Clear and append cards on the DOM.',
		tags: ['Javascript']
	},
	{
		name: 'CSS Grid System',
		description: 'Build a grid system using CSS.',
		tags: ['HTML, CSS']
	},
	{
		name: 'CSS Exercises',
		description: 'Use CSS to complete the exercises.',
		tags: ['HTML, CSS']
	},
];


function databaseSeed() {
  Exercise.find({}, function(err, documents){
    if(!err && documents.length===0) {
      for (var i = 0; i < exercisesSeed.length; i++) {
        var newExercise = new Exercise(exercisesSeed[i]);
        newExercise.save(function(err, success){
          if(!err) {
            console.log('database seeded object!');
          }
        });
      }
    }
  });
}


module.exports = databaseSeed;
