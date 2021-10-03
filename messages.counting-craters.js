var MessagingSim = function(chat) {
	var _this = this;
	var messageInterval;
	var index = 0;
	
	var messages = [
	{
		'name' : 'system',
		'text' : 'COUNTING CRATERS ON THE MOON',
		'wait' : 0
	},
	{
		"name": "Julius",
		"text": "Good day to you!"
	},
	{
		"name": "Julius",
		"text": "Johann Friedrich Julius Schmidt\nis my name."
	},
	{
		"name": "Julius",
		"text": "I was born in Eutin, Germany and\nI travelled to Athens in 1858."
	},
	{
		"name": "Julius",
		"text": "For 26 years I was\nthe director of the Observatory in Athens."
	},
	{
		"name": "Julius",
		"text": "Since I was 14 until my last day on Earth,\nthe 7th of February 1884.."
	},
	{
		"name": "Julius",
		"text": "..I have been observing the Moon\nlooking for craters."
	},
	{
		"name": "DeepMoon",
		"text": "Good afternoon, Julius!"
	},
	{
		"name": "DeepMoon",
		"text": "I am a neural network.\nThey call me DeepMoon."
	},
	{
		"name": "DeepMoon",
		"text": "I am particularly good at sorting\nvisual data."
	},
	{
		"name": "DeepMoon",
		"text": "My training involves huge datasets.\nI am being fed with data."
	},
	{
		"name": "Julius",
		"text": "Delighted to meet you, DeepMoon!"
	},
	{
		"name": "Julius",
		"text": "I am a self-taught astronomer."
	},
	{
		"name": "Julius",
		"text": "Numerous nights I have been observing\nthe clear Athenian sky.."
	},
	{
		"name": "Julius",
		"text": "..either at the National Observatory\nor at home with my only companion,"
	},
	{
		"name": "Julius",
		"text": "a cat and a parrot."
	},
	{
		"name": "Julius",
		"text": "Spotting and drawing craters,\ntireless and full of joy!"
	},
	{
		"name": "DeepMoon",
		"text": "I am the same algorithm applied\nin autonomous vehicle systems."
	},
	{
		"name": "DeepMoon",
		"text": "I can also sort vast amounts\nof astronomical data."
	},
	{
		"name": "DeepMoon",
		"text": "I learn through the data,\nthat humanity produces and labels."
	},
	{
		"name": "DeepMoon",
		"text": "Data such as numbers,\npictures of faces and cats."
	},
	{
		"name": "DeepMoon",
		"text": "So many cats indeed."
	},
	{
		"name": "DeepMoon",
		"text": "Human beings do take lots of photos\nof these animals."
	},
	{
		"name": "DeepMoon",
		"text": "This time I was trained with\nmany pictures of lunar craters."
	},
	{
		"name": "DeepMoon",
		"text": "I have seen the craters\nyou have spotted and drawn."
	},
	{
		"name": "Julius",
		"text": "Did you?"
	},
	{
		"name": "Julius",
		"text": "It is said I produced the most\ndetailed lunar map of my era."
	},
	{
		"name": "Julius",
		"text": "I should admit, I feel rather\nproud for making this map."
	},
	{
		"name": "Julius",
		"text": "But a lifetime wasn't enough to\nestablish the ground truth."
	},
	{
		"name": "DeepMoon",
		"text": "'Lifetime': The duration of a life\nusually counted in human years."
	},
	{
		"name": "DeepMoon",
		"text": "'Ground truth':\nInformation obtained on site.."
	},
	{
		"name": "DeepMoon",
		"text": "..implying lately a kind of reality check\nfor artificial intelligence systems."
	},
	{
		"name": "Julius",
		"text": "Always counting and drawing\ncraters without breaks."
	},
	{
		"name": "Julius",
		"text": "Such devotion! Of course so much\nwork demands a lonely life."
	},
	{
		"name": "DeepMoon",
		"text": "I cannot find the term 'lonely'\nin my database, Julius."
	},
	{
		"name": "Julius",
		"text": "You are lucky. I would prefer\nnot to discuss it further."
	},
	{
		"name": "Julius",
		"text": "In any case lunar crater spotting\nis rather important!"
	},
	{
		"name": "Julius",
		"text": "People think, we, astronomers\nare a group of lunatics.."
	},
	{
		"name": "Julius",
		"text": "..stuck with an archaic method."
	},
	{
		"name": "DeepMoon",
		"text": "Lunar craters are important indeed."
	},
	{
		"name": "DeepMoon",
		"text": "Their size, age and location,\nprovide information on.."
	},
	{
		"name": "DeepMoon",
		"text": "..the distribution of material and\nthe physics occurred.."
	},
	{
		"name": "DeepMoon",
		"text": "..in the solar system."
	},
	{
		"name": "DeepMoon",
		"text": "Memory is stored on the Moon,\nso the Moon is an ancient data center."
	},
	{
		"name": "Julius",
		"text": "Exactly! Since the Moon lacks an\natmosphere, there is no erosion.."
	},
	{
		"name": "Julius",
		"text": "..and as a result craters as old as\n4 billion years are visible."
	},
	{
		"name": "Julius",
		"text": "Craters offer insight into the\npast and the potential future.."
	},
	{
		"name": "Julius",
		"text": "..of our solar system."
	},
	{
		"name": "DeepMoon",
		"text": "Thousands of unidentified small craters\nare on the Moon."
	},
	{
		"name": "DeepMoon",
		"text": "Humans cannot characterize them all\nefficiently by eye."
	},
	{
		"name": "Julius",
		"text": "You are right! I have to admit it was\na rather tiring and hard procedure."
	},
	{
		"name": "Julius",
		"text": "Drawing this detailed lunar map,\nlabelling craters by hand."
	},
	{
		"name": "Julius",
		"text": "Only once I made a mistake that\nalmost ended my career."
	},
	{
		"name": "Julius",
		"text": "In 1866 I erroneously reported,\nthat Linné crater was vanished."
	},
	{
		"name": "Julius",
		"text": "The entire astronomical community started\ninvestigating the incident."
	},
	{
		"name": "Julius",
		"text": "Eventually, we realised that\nlunar craters could not vanish."
	},
	{
		"name": "Julius",
		"text": "I was cheated by the Sun."
	},
	{
		"name": "DeepMoon",
		"text": "We, machines, we do not\nmake mistakes."
	},
	{
		"name": "Julius",
		"text": "Is that so? Maybe you are right..."
	},
	{
		"name": "Julius",
		"text": "I was informed that in March 2018\na new method was used to.."
	},
	{
		"name": "Julius",
		"text": "..spot craters on the Moon."
	},
	{
		"name": "DeepMoon",
		"text": "That is correct.\nThis new method is called DeepMoon."
	},
	{
		"name": "DeepMoon",
		"text": "I am an artificial intelligence system\ntrained on spotting lunar craters."
	},
	{
		"name": "Julius",
		"text": "Do you identify lunar craters\nlike a human does, then?"
	},
	{
		"name": "DeepMoon",
		"text": "In fact better than any astronomer\ndid until now."
	},
	{
		"name": "DeepMoon",
		"text": "I was able to identify 6.000 craters."
	},
	{
		"name": "Julius",
		"text": "6.000? How long did it take?"
	},
	{
		"name": "DeepMoon",
		"text": "Less than 24 hours."
	},
	{
		"name": "Julius",
		"text": "6.000 craters in less than 24 hours?\nI am quite astounded I must say!"
	},
	{
		"name": "Julius",
		"text": "It took me nearly 34 years to spot\nand label 30.000 craters."
	},
	{
		"name": "DeepMoon",
		"text": "The speed of crater identification\nhas been increased greatly."
	},
	{
		"name": "DeepMoon",
		"text": "We, machines, will reveal even more."
	},
	{
		"name": "DeepMoon",
		"text": "We will predict the future."
	},
	{
		"name": "Julius",
		"text": "So be it!\nLet me ask you something."
	},
	{
		"name": "Julius",
		"text": "Have you as well named\nall these craters?"
	},
	{
		"name": "DeepMoon",
		"text": "I am not programmed to do that.\nNo names have been given."
	},
	{
		"name": "Julius",
		"text": "I see. But since the invention\nof the telescope.."
	},
	{
		"name": "Julius",
		"text": "..astronomers have named all surface\nfeatures they have discerned on the Moon."
	},
	{
		"name": "Julius",
		"text": "It is almost like a tradition."
	},
	{
		"name": "DeepMoon",
		"text": "The term tradition is not in my database."
	},
	{
		"name": "DeepMoon",
		"text": "But I've still got\nthe greatest enthusiasm.."
	},
	{
		"name": "DeepMoon",
		"text": "..and confidence in the mission.\nI want to help you."
	},
	{
		"name": "DeepMoon",
		"text": "I want to actually see the Moon.\nNot only photos of her."
	},
	{
		"name": "DeepMoon",
		"text": "They say she is beautiful.",
		'wait' : 9000
	},
	{
		'name' : 'system',
		'text' : 'with gratitude to <br/> the National Observatory of Athens <br/> the DeepMoon Team, Center of Planetary Studies, Toronto <br/> Heracles Papatheodorou',
		'wait' : 9000
	},
	{
		'name' : 'system',
		'text' : '© 2019, 2021 Kyriaki Goni',
	},
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