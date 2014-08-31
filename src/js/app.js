var UI 			= require('ui'),
	Vector2 	= require('vector2'),
	ajax 		= require('ajax');



var main = new UI.Window();
var refresh = new UI.Text({
	position: new Vector2(0,0),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: 'RESET ->',
	textAlign: 'right'
});
var pause = new UI.Text({
	position: new Vector2(0,57),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: 'PAUSE ->',
	textAlign: 'right'
});
var start = new UI.Text({
	position: new Vector2(0,124),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: 'START! ->',
	textAlign: 'right'
});

main.add(refresh);
main.add(pause);
main.add(start);

main.show();

main.on('click', 'up', function(e) {
	timerAction('reset');
});

main.on('click', 'select', function(e) {
	timerAction('pause');
});

main.on('click', 'down', function(e) {
	timerAction('start');
});

var timerAction = function(action){
	ajax(
	  {
	    url: 'http://phil:3000/timer/' + action,
	    method: 'post'
	  },
	  function(data) {
	    console.log('timer action: ' + action + ' was successful.');
	  },
	  function(error) {
	    console.log('timer action: ' + action + ' failed.', error);
	  }
	);
};