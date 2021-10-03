var Chat = function() {
	var _this = this;
	var owner = "";
	var chatRoom = document.getElementById("chatroom");
	var chatHeight = chatRoom.offsetHeight

	var msgAudioIn = new Audio('./audio/sharp-592_01.ogg');
/*	msgAudioIn.mozPreservesPitch = false;
	msgAudioIn.webkitPreservesPitch = false;
	msgAudioIn.preservesPitch = false;
	msgAudioIn.playbackRate = 1;*/

	var msgAudioOut = new Audio('./audio/out.mp3');
/*	msgAudioOut.mozPreservesPitch = false;
	msgAudioOut.webkitPreservesPitch = false;
	msgAudioOut.preservesPitch = false;
	msgAudioOut.playbackRate = 0.8;*/

	function getTimeStamp() {
		var d = new Date();
		var h = d.getHours();
		var m = "0" + d.getMinutes();
		var ampm = (h >= 12) ? "PM" : "AM";
		h -= (h > 12) ? 12 : 0;
		h = (h === 0) ? 12 : h;
		
		return h + ":" + m.substring(m.length - 2) + " " + ampm;
	}
	
	_this.displayMsg = function(msg) {
		var li = document.createElement("li");
		if (msg.name !== 'system' && msg.name !== 'padding') {
			li.className = (msg.name === owner)? "self" : "other";
		}
		
		var divPic = document.createElement("div");
		divPic.className = "pic";
		
		var divDate = document.createElement("div");
		divDate.className = "date";
		divDate.innerHTML = getTimeStamp();
		
		// if(msg.imageUrl) {
			// divPic.style.backgroundImage = "url('" + msg.imageUrl + "')";
			divPic.style.backgroundImage = "url('./images/" + msg.name + ".png')";
		// }
		
		var divMsg = document.createElement("div");
		divMsg.className = (msg.name === 'system' ? 'msg-system' : 'msg' );
/*		switch(msg.name) {
			case 'system':
				divMsg.className = 'msg-system';
				break;
			case 'padding':
				divMsg.className = 'msg-padding';
				break;
			default:
				divMsg.className = 'msg';
		}*/
		// divMsg.innerHTML =  '<span class="name">' + ((msg.name === owner) ? "Me" : msg.name) + "</span><br>" + msg.text;
		divMsg.innerHTML =  '<span class="name">' + msg.name + "</span>" + msg.text;
		
		// li.appendChild(divDate);
		li.appendChild(divPic);
		li.appendChild(divMsg);
		
		chatRoom.appendChild(li);

		if (msg.name !== 'system') {
			if (msg.name !== owner) {
				/*if (msgAudioIn.paused) {
					msgAudioIn.play();
				}*/
				msgAudioIn.cloneNode(false).play(); // may cause memory issues, ok for small implementations
			} else {
				/*if (msgAudioOut.paused) {
					msgAudioOut.play();
				}*/
				msgAudioOut.cloneNode(false).play();
			}
		} else {
			//wait...
		}
		chatRoom.scrollTop = chatRoom.scrollHeight;
	};
	
	_this.setOwner = function(ownerName) {
		owner = ownerName;
	};
	
	return _this;
}

window.addEventListener('resize', function (){
	chatRoom.scrollTop = chatRoom.scrollHeight;
});