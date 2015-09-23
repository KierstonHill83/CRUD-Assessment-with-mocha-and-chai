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
	{
		name: 'CSS Bootstrap Exercise',
		description: 'Use Bootstrap to complete the exercises.',
		tags: ['HTML, CSS, Bootstrap']
	},
		{
		name: 'Javascript Tip Calculator',
		description: 'Make a tip calculator using Javascript.',
		tags: ['HTML, CSS, Javascript']
	},
	{
		name: 'CSS Media Queries and Responsive Design',
		description: 'Build an app for a phone.',
		tags: ['HTML, CSS']
	},
	{
		name: 'jQuery Playground',
		description: 'Use jQuery to complete the exercises.',
		tags: ['HTML, CSS, jQuery']
	},
	{
		name: 'jQuery Calculator',
		description: 'Build a calculator using jQuery.',
		tags: ['HTML, CSS, jQuery']
	},
	{
		name: 'jQuery Page Analytics',
		description: 'Use jQuery to access information on a website.',
		tags: ['HTML, CSS, jQuery']
	},
	{
		name: 'Javascript Event Delegation',
		description: 'Use an event handler to remove an element from the DOM.',
		tags: ['HTML, CSS, Javascript']
	},
	{
		name: 'Javascript Conditionals, Loops, Testing',
		description: 'Use Javascript to complete the exercises.',
		tags: ['HTML, CSS, Javascript']
	},
	{
		name: 'jQuery Image Filtering',
		description: 'Filter through a list of cabins.',
		tags: ['HTML, CSS, Javascript, jQuery']
	},
	{
		name: 'Javascript Loops Part 2',
		description: 'Use loops to complete exercises.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Loops Part 3',
		description: 'Use loops to complete exercises.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Functions Part 2',
		description: 'Use functions to complete exercises.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Playlist',
		description: 'Use object oriented programming.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript OOP Basics',
		description: 'Use object oriented programming.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Methods, This, Constructors',
		description: 'Use object oriented programming and jasmine to solve the exercieses.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Rock, Paper, Scissors',
		description: 'Create the game rock, paper, scissors.',
		tags: ['HTML, CSS, Javascript']
	},
	{
		name: 'Javascript OOP Autoshop',
		description: 'Use object oriented programming.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript OOP Zoo',
		description: 'Use object oriented programming.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Tic Tac Toe',
		description: 'Use object oriented programming to make the game tic tac toe.',
		tags: ['HTML, CSS, Javascript']
	},
	{
		name: 'Javascript Jasmine Review',
		description: 'Write tests in Jasmine.',
		tags: ['Javascript']
	},
	{
		name: 'Javascript Game Library',
		description: 'Make a game library that can be dynamically added to.',
		tags: ['HTML, CSS, Javascript']
	},
	{
		name: 'learnyounode',
		description: 'Practice using node.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'Node CSV to Markdown',
		description: 'Practice using node.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'JS Bubble Sort',
		description: 'Use Javascript to write function for bubble sorting.',
		tags: ['Javascript']
	},
	{
		name: 'Node Signup Form',
		description: 'Practice using routes and views.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'Node Shuffle and Chunk',
		description: 'Practice using node.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'Node Form Validation',
		description: 'Practice using node with validation.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'expressworks',
		description: 'Practice using node.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'Node Shopping List API',
		description: 'Practice using node with routes and views.',
		tags: ['HTTP, CSS, Javascript, Node.js']
	},
	{
		name: 'Node Github Contest App',
		description: 'Use node to vote on profiles.',
		tags: ['HTTP, CSS, Javascript, Node.js']
	},
	{
		name: 'Node, Express, Swig, Mongo Primer',
		description: 'Intro to using mongo.',
		tags: ['Javascript, Node.js, Express, Mongo']
	},
	{
		name: 'Asynchronous JS-Nested Callbacks',
		description: 'Practice using callback functions.',
		tags: ['Javascript, Node.js']
	},
	{
		name: 'Intro to Mongo',
		description: 'Practice using mongo.',
		tags: ['Mongo']
	},
	{
		name: 'Node Countries',
		description: 'Add countries with data to a database.',
		tags: ['Javascript, Node.js, Express, Mongo']
	},
	{
		name: 'Angular Tip Calculator',
		description: 'Make a calculator using angular.',
		tags: ['Javascript, Angular']
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
