items = [];
items[10] = ['a KEY', '1', 'KEY']
items[11] = ['an AXE', '1', 'AXE']
items[12] = ['STICKS', '1', 'STICKS']
items[13] = ['sheeplegs', '0', 'sheeplegs']
items[14] = ['MUSHROOMS', '1', 'MUSHROOMS']
items[15] = ['MONEY', '1', 'MONEY']
items[16] = ['a BARREL', '1', 'BARREL']
items[17] = ['a sheeptrunk', '0', 'sheeptrunk']
items[18] = ['BERRIES', '1', 'BERRIES']
items[19] = ['WOOL', '1', 'WOOL']
items[20] = ['a sheepskin', '0', 'sheepskin']
items[21] = ['a BAG', '1', 'BAG']
items[22] = ['a RAG', '1', 'RAG']
items[23] = ['a sheephead', '0', 'sheephead']
items[24] = ['a SPADE', '1', 'SPADE']
items[25] = ['SULPHUR', '1', 'SULPHUR']
items[26] = ['a solidpoison', '0', 'solidpoison']
items[27] = ['a BUCKET', '1', 'BUCKET']
items[28] = ['TAR', '1', 'TAR']
items[29] = ['a liquidpoison', '0', 'liquidpoison']
items[30] = ['a deaddragon', '0', 'deaddragon']
items[31] = ['a STONE', '1', 'STONE']
items[32] = ['a FISH', '1', 'FISH']
items[33] = ['a KNIFE', '1', 'KNIFE']
items[34] = ['a DRAGONSKIN', '1', 'DRAGONSKIN']
items[35] = ['a dragonskinSHOES', '1', 'SHOES']
items[36] = ['a PRIZE', '1', 'PRIZE']
items[37] = ['a SHEEP', '1', 'SHEEP'];

itemsNameToID = [];
itemsNameToID["KEY"] = [10]
itemsNameToID["AXE"] = [11]
itemsNameToID["STICKS"] = [12]
itemsNameToID["sheeplegs"] = [13]
itemsNameToID["MUSHROOMS"] = [14]
itemsNameToID["MONEY"] = [15]
itemsNameToID["BARREL"] = [16]
itemsNameToID["sheeptrunk"] = [17]
itemsNameToID["BERRIES"] = [18]
itemsNameToID["WOOL"] = [19]
itemsNameToID["sheepskin"] = [20]
itemsNameToID["BAG"] = [21]
itemsNameToID["RAG"] = [22]
itemsNameToID["sheephead"] = [23]
itemsNameToID["SPADE"] = [24]
itemsNameToID["SULPHUR"] = [25]
itemsNameToID["solidpoison"] = [26]
itemsNameToID["BUCKET"] = [27]
itemsNameToID["TAR"] = [28]
itemsNameToID["liquidpoison"] = [29]
itemsNameToID["deaddragon"] = [30]
itemsNameToID["STONE"] = [31]
itemsNameToID["FISH"] = [32]
itemsNameToID["KNIFE"] = [33]
itemsNameToID["DRAGONSKIN"] = [34]
itemsNameToID["SHOES"] = [35]
itemsNameToID["PRIZE"] = [36]
itemsNameToID["SHEEP"] = [37];

itemsNames = ['KEY', 'AXE', 'STICKS', 'sheeplegs', 'MUSHROOMS', 'MONEY', 'BARREL',
	'sheeptrunk', 'BERRIES', 'WOOL', 'sheepskin', 'BAG', 'RAG', 'sheephead', 'SPADE',
	'SULPHUR', 'solidpoison', 'BUCKET', 'TAR', 'liquidpoison', 'deaddragon', 'STONE',
	'FISH', 'KNIFE', 'DRAGONSKIN', 'SHOES', 'PRIZE', 'SHEEP']

function Location(x, y, heading, image, color, move, items, sheep) {
	this.x = x;
	this.y = y;
	this.heading = heading;
	this.image = image;
	this.color = color;
	this.move = move;
	this.items = items;
	this.sheep = sheep;

}
function UpdateUI(loc) {
	this.init = function () {
		var p = document.getElementById('head').children[0];
		p.innerHTML = loc.heading
		var bg = document.getElementById('image');
		bg.style.background = loc.color;
		bg.innerHTML = "";
		img = new Image();
		img.src = "img/" + loc.image;
		bg.appendChild(img);

		var p = document.getElementById('moves');
		p.innerHTML = loc.move;

		document.getElementById('whatnow').innerHTML = "";
		document.getElementById('see').innerHTML = "";

		console.log(loc.items)

		if (loc.items.length == 0) {
			var p = document.getElementById('see');
			p.innerHTML = "You see nothing";
		}
		if (loc.items[0] != null) {
			var p = document.getElementById('see');
			p.innerHTML = "You see " + items[loc.items[0]][0];
			console.log(items[loc.items[0]])
		}
		if (loc.items[1] != null) {
			var p = document.getElementById('see');
			p.innerHTML += ", " + items[loc.items[1]][0];
			console.log(items[loc.items[1]][0])
		}
		if (loc.items[2] != null) {
			var p = document.getElementById('see');
			p.innerHTML += ", " + items[loc.items[2]][0];
			console.log(items[loc.items[2]][0])
		}
		if (loc.sheep != null) {
			if (loc.sheep[0] != null) {
				var p = document.getElementById('see');
				if(loc.items.length==0)
				p.innerHTML ="You see " + loc.sheep[0];
				else
				p.innerHTML += ", " + loc.sheep[0];
			}
			if (loc.sheep[1] != null) {
				var p = document.getElementById('see');
				p.innerHTML += ", " + loc.sheep[1];
			}
			if (loc.sheep[2] != null) {
				var p = document.getElementById('see');
				p.innerHTML += ", " + loc.sheep[2];
			}
			if (loc.sheep[3] != null) {
				var p = document.getElementById('see');
				p.innerHTML += ", " + loc.sheep[3];
			}
			if (loc.sheep[4] != null) {
				var p = document.getElementById('see');
				p.innerHTML += ", " + loc.sheep[4];
			}
			if (loc.sheep[5] != null) {
				var p = document.getElementById('see');
				p.innerHTML += ", " + loc.sheep[5];
			}
		}
		if (Dratewka.eq[0] != null) {
			var p = document.getElementById('carrying');
			p.innerHTML = "You carrying " + Dratewka.eq[0];
		} else {
			var p = document.getElementById('carrying');
			p.innerHTML = "Your are carrying nothing";
		}


		//kompas

		var compass = document.getElementById("compass");

		var compassN = compass.getElementsByTagName("div")[0];
		var compassS = compass.getElementsByTagName("div")[1];
		var compassW = compass.getElementsByTagName("div")[2];
		var compassE = compass.getElementsByTagName("div")[3];

		compassN.style.color = "black";
		compassS.style.color = "black";
		compassW.style.color = "black";
		compassE.style.color = "black";

		if (loc.move.includes("NORTH")) {
			compassN.style.color = "white";
		}
		if (loc.move.includes("SOUTH")) {
			compassS.style.color = "white";
		}
		if (loc.move.includes("WEST")) {
			compassW.style.color = "white";
		}
		if (loc.move.includes("EAST")) {
			compassE.style.color = "white";
		}


	}
	this.init();
}
locations: {
	locations = []

	locations[1] = []
	locations[1][1] = new Location(1, 1, "You are inside a brimstone mine", "11.gif", "rgb(235,211,64)", ['EAST'], [])
	locations[1][2] = new Location(1, 2, "You are at the entrance to the mine", "12.gif", "rgb(89,93,87)", ['WEST', 'EAST'], [])
	locations[1][3] = new Location(1, 3, "A hill", "13.gif", "rgb(117,237,243)", ['SOUTH', 'WEST', 'EAST'], [31])
	locations[1][4] = new Location(1, 4, "Some bushes", "14.gif", "rgb(202,230,51)", ['WEST', 'EAST'], [])
	locations[1][5] = new Location(1, 5, "An old deserted hut", "15.gif", "rgb(220,204,61)", ['WEST', 'EAST'], [27])
	locations[1][6] = new Location(1, 6, "The edge of a forest", "16.gif", "rgb(167,245,63)", ['WEST', 'EAST'], [])
	locations[1][7] = new Location(1, 7, "A dark forest", "17.gif", "rgb(140,253,99)", ['SOUTH', 'WEST'], [14])

	locations[2] = []
	locations[2][1] = new Location(2, 1, "A man nearby making tar", "21.gif", "rgb(255,190,99)", ['SOUTH', 'EAST'], [])
	locations[2][2] = new Location(2, 2, "A timber yard", "22.gif", "rgb(255,190,99)", ['SOUTH', 'WEST', 'EAST'], [])
	locations[2][3] = new Location(2, 3, "You are by a roadside shrine", "23.gif", "rgb(167,245,63)", ['SOUTH', 'WEST', 'NORTH', 'EAST'], [10])
	locations[2][4] = new Location(2, 4, "You are by a small chapel", "24.gif", "rgb(212,229,36)", ['WEST', 'EAST'], [])
	locations[2][5] = new Location(2, 5, "You are on a road leading to a wood", "25.gif", "rgb(167,245,63)", ['SOUTH', 'WEST', 'EAST'], [])
	locations[2][6] = new Location(2, 6, "You are in a forest", "26 i 65.gif", "rgb(167,245,63)", ['WEST', 'EAST'], [])
	locations[2][7] = new Location(2, 7, "You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", ['WEST', 'NORTH'], [18])

	locations[3] = []
	locations[3][1] = new Location(3, 1, "You are by the Vistula River", "31.gif", "rgb(122,232,252)", ['NORTH', 'EAST'], [])
	locations[3][2] = new Location(3, 2, "You are by the Vistula River", "32.gif", "rgb(140,214,255)", ['WEST', 'NORTH'], [32])
	locations[3][3] = new Location(3, 3, "You are on a bridge over river", "33.gif", "rgb(108,181,242)", ['SOUTH', 'NORTH'], [])
	locations[3][4] = new Location(3, 4, "You are by the old tavern", "34.gif", "rgb(255,189,117)", ['EAST'], [])
	locations[3][5] = new Location(3, 5, "You are at the town's end", "35.gif", "rgb(255,190,99)", ['SOUTH', 'WEST', 'NORTH'], [])
	locations[3][6] = new Location(3, 6, "You are in a butcher's shop", "36.gif", "rgb(255,188,102)", ['SOUTH'], [])
	locations[3][7] = new Location(3, 7, "You are in a cooper's house", "37.gif", "rgb(255,188,102)", ['SOUTH'], [])

	locations[4] = []
	locations[4][1] = new Location(4, 1, "You are in the Wawel Castle", "41.gif", "rgb(255,176,141)", ['EAST'], [])
	locations[4][2] = new Location(4, 2, "You are inside a dragon's cave", "42.gif", "rgb(198,205,193)", ['WEST', 'EAST'], [])
	locations[4][3] = new Location(4, 3, "A perfect place to set a trap", "43.gif", "rgb(255,176,141)", ['WEST', 'NORTH'], [], SheepParts/*tutaj czesci owcy*/)
	locations[4][4] = new Location(4, 4, "You are by the water mill", "44.gif", "rgb(255,190,99)", ['EAST'], [21])
	locations[4][5] = new Location(4, 5, "You are at a main crossroad", "45.gif", "rgb(255,190,99)", ['SOUTH', 'WEST', 'NORTH', 'EAST'], [])
	locations[4][6] = new Location(4, 6, "You are on a town street", "46.gif", "rgb(255,190,99)", ['WEST', 'NORTH', 'EAST'], [])
	locations[4][7] = new Location(4, 7, "You are in a frontyard of your house", "47.gif", "rgb(255,190,99)", ['SOUTH', 'WEST', 'NORTH'], [])

	locations[5] = []
	locations[5][4] = new Location(5, 4, "You are by a swift stream", "54.gif", "rgb(108,181,242)", ['EAST'], [])
	locations[5][5] = new Location(5, 5, "You are on a street leading forest", "55.gif", "rgb(255,190,99)", ['SOUTH', 'WEST', 'NORTH'], [33])
	locations[5][6] = new Location(5, 6, "You are in a woodcutter's backyard", "56.gif", "rgb(255,190,99)", ['SOUTH'], [])
	locations[5][7] = new Location(5, 7, "You are in a shoemaker's house", "57.gif", "rgb(254,194,97)", ['NORTH'], [])

	locations[6] = []
	locations[6][4] = new Location(6, 4, "You are in a bleak funeral house", "64.gif", "rgb(254,194,97)", ['EAST'], [24])
	locations[6][5] = new Location(6, 5, "You are on a path leading to the wood", "26 i 65.gif", "rgb(167,245,63)", ['WEST', 'NORTH', 'EAST'], [])
	locations[6][6] = new Location(6, 6, "You are at the edge of a forest", "66.gif", "rgb(167,245,63)", ['WEST', 'NORTH', 'EAST'], [])
	locations[6][7] = new Location(6, 7, "You are in a deep forest", "27 i 67.gif", "rgb(140,253,99)", ['WEST'], [])
}

usingelement = [
	{
		"idBefore": 10,
		"pos": 56,
		"idAfter": 11,
		"alert": " You opened a tool shed and took an axe",
		"sheep": null
	},
	{
		"idBefore": 11,
		"pos": 67,
		"idAfter": 12,
		"alert": " You cut sticks for sheeplegs",
		"sheep": null
	},
	{
		"idBefore": 12,
		"pos": 43,
		"idAfter": 13,
		"alert": " You prepared legs for your fake sheep",
		"sheep": 1
	},
	{
		"idBefore": 14,
		"pos": 34,
		"idAfter": 15,
		"alert": " The tavern owner paid you money",
		"sheep": null
	},
	{
		"idBefore": 15,
		"pos": 37,
		"idAfter": 16,
		"alert": " The cooper sold you a new barrel",
		"sheep": null
	},
	{
		"idBefore": 16,
		"pos": 43,
		"idAfter": 17,
		"alert": " You made a nice sheeptrunk",
		"sheep": 1
	},
	{
		"idBefore": 18,
		"pos": 36,
		"idAfter": 19,
		"alert": " The butcher gave you wool",
		"sheep": null
	},
	{
		"idBefore": 19,
		"pos": 43,
		"idAfter": 20,
		"alert": " You prepared skin for your fake sheep",
		"sheep": 1
	},
	{
		"idBefore": 21,
		"pos": 57,
		"idAfter": 22,
		"alert": " You used your tools to make a rag",
		"sheep": null
	},
	{
		"idBefore": 22,
		"pos": 43,
		"idAfter": 23,
		"alert": " You made a fake sheephead",
		"sheep": 1
	},
	{
		"idBefore": 24,
		"pos": 11,
		"idAfter": 25,
		"alert": "That's enough sulphur for you",
		"sheep": null
	},
	{
		"idBefore": 25,
		"pos": 43,
		"idAfter": 26,
		"alert": " You prepared a solid poison",
		"sheep": 1
	},
	{
		"idBefore": 27,
		"pos": 21,
		"idAfter": 28,
		"alert": " You got a bucket full of tar",
		"sheep": null
	},
	{
		"idBefore": 28,
		"pos": 43,
		"idAfter": 29,
		"alert": " You prepared a liquid poison",
		"sheep": 1
	},
	{
		"idBefore": 37,
		"pos": 43,
		"idAfter": 30,
		"alert": " The dragon noticed your gift...",
		"sheep": 1
	},
	{
		"idBefore": 33,
		"pos": 43,
		"idAfter": 34,
		"alert": " You cut a piece of dragon's skin",
		"sheep": null
	},
	{
		"idBefore": 34,
		"pos": 57,
		"idAfter": 35,
		"alert": " You used your tools to make shoes",
		"sheep": null
	},
	{
		"idBefore": 35,
		"pos": 41,
		"idAfter": 36,
		"alert": " The King is impressed by your shoes",
		"sheep": null
	},
	{
		"idBefore": 36,
		"pos": null,
		"idAfter": null,
		"alert": "THIS IS TheEnd",
		"sheep": null

	}
];

