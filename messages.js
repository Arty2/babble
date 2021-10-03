var MessagingSim = function(chat) {
	var _this = this;
	var messageInterval;
	var index = 0;
	
	var messages = [
		{
		'name': 'system',
		'text': '💬',
		'wait': 3000
		},
		{
		'name': 'you',
		'text': 'Στις 11 μπορείς;'
		},
		{
		'name': 'me',
		'text': 'όχι, όχι'
		},
		{
		'name': 'you',
		'text': 'Στις 12 μπορείς;'
		},
		{
		'name': 'me',
		'text': 'όχι, όχι'
		},
		{
		'name': 'me',
		'text': 'Στις 4 μπορείς;'
		},
		{
		'name': 'you',
		'text': 'μπορώ, μπορώ'
		},
		{
		'name': 'me',
		'text': 'αλλά δεν μπορώ εγώ'
		},
		{
		'name': 'me',
		'text': 'Το Σάββατο μπορείς;'
		},
		{
		'name': 'you',
		'text': 'όχι, όχι'
		},
		{
		'name': 'me',
		'text': 'Την Κυριακή μπορείς;'
		},
		{
		'name': 'you',
		'text': 'όχι, όχι'
		},
		{
		'name': 'me',
		'text': 'Παρασκευή μπορείς;'
		},
		{
		'name': 'you',
		'text': 'μπορώ, μπορώ'
		},
		{
		'name': 'me',
		'text': 'αλλά δεν μπορώ εγώ'
		},
		{
		'name': 'me',
		'text': 'Δεν μπορεί, δεν μπορεί'
		},
		{
		'name': 'me',
		'text': 'κάπου θα συναντηθούμε'
		},
		{
		'name': 'you',
		'text': 'Δεν μπορεί, δεν μπορεί'
		},
		{
		'name': 'you',
		'text': 'στο ίδιο σπίτι ζούμε'
		},
		{
		'name': 'you',
		'text': 'Το Μάιο μπορείς;'
		},
		{
		'name': 'me',
		'text': 'όχι, όχι'
		},
		{
		'name': 'you',
		'text': 'Τον Αύγουστο μπορείς;'
		},
		{
		'name': 'me',
		'text': 'όχι, όχι'
		},
		{
		'name': 'you',
		'text': 'Δεκέμβριο μπορείς;'
		},
		{
		'name': 'me',
		'text': 'μπορώ, μπορώ, μπορώ'
		},
		{
		'name': 'you',
		'text': 'αλλά δεν μπορώ εγώ'
		},
		{
		'name': 'me',
		'text': 'Έτσι ε;'
		},
		{
		'name': 'you',
		'text': 'Τώρα να ‘ρθεις μπορείς;'
		},
		{
		'name': 'me',
		'text': 'όχι, όχι'
		},
		{
		'name': 'you',
		'text': 'Αν έρθω εγώ μπορείς;'
		},
		{
		'name': 'me',
		'text': 'όχι, όχι'
		},
		{
		'name': 'you',
		'text': 'Χαράματα μπορείς;'
		},
		{
		'name': 'me',
		'text': 'μπορώ, μπορώ'
		},
		{
		'name': 'you',
		'text': 'ναι, αλλά δεν μπορώ εγώ',
		'wait': 3000
		},
		{
		'name': 'system',
		'text': '💬'
		}
		// {
		// "name" : "Miriam",
		// "text" : "Yes! outside in the first table.",
		// "imageUrl" : "images/miriam.jpg"
		// },
		
	];
	
	function init() {
		sendMessage();
		console.time('init loop');
		// messageInterval = setInterval(sendMessage, 2500); // must be higher than the random base
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	async function sendMessage() {
		if (index < messages.length) {
			// await sleep(Math.random() * (messages[index].wait * 1) + (messages[index].text.length * 240));
			await sleep((messages[index].wait ? 0 : Math.random() * 1000 + (messages[index].text.length * 50)));
			chat.displayMsg(messages[index]);
			await sleep(messages[index].wait ? messages[index].wait : 0)
			index += 1;
			sendMessage();
			// setTimeout(function(msg) {
			// 	chat.displayMsg(msg);
			// }, Math.random() * 2000, messages[index]); // 240ms per letter
			// }, Math.random() * 1000 + (messages[index].text.length * 240), messages[index])
			// index += 1;
		} else {
			// clearInterval(messageInterval);
			// setTimeout(function (){
			// 	document.getElementById("chatroom").innerHTML = '';
			// 	index = 0;
			// 	init();
			// }, 12000);
			await sleep(9000);
			document.getElementById("chatroom").innerHTML = '';
			index = 0;
			console.timeEnd('init loop');
			init();
		}
	}
	
	init();
};