SheepParts = [];
function Player() {
	this.x = 7;
	this.y = 4;
	this.eq = [];

	this.getitem = function (item, itemID) {
		console.log(item)
		if (Dratewka.eq[0] == null) {
			if (item[1] == 1) {
				Dratewka.eq = item;
				//usuwanie itemu z YOU SEE
				locations[Dratewka.y][Dratewka.x].items.splice
					(locations[Dratewka.y][Dratewka.x].items.indexOf(itemID), 1);
				DratewkaAlerts("You are taking " + item[0]);
			}
			else {
				DratewkaAlerts("You can't carry it");
			}

		}
		else {
			DratewkaAlerts("You are carrying something");
		}
	}
	this.dropitem = function () {
		console.log(itemsNameToID[Dratewka.eq[2]][0])
		locations[Dratewka.y][Dratewka.x].items.push(itemsNameToID[Dratewka.eq[2]][0])
		DratewkaAlerts("You are about to drop " + Dratewka.eq[0]);
		Dratewka.eq = [];
	}
	this.useitem = function (itemID) {
		for (var i = 0; i < usingelement.length; i++) {
			if (usingelement[i].idBefore == itemID) {
				console.log(usingelement[i])
				console.log(Dratewka.y, Dratewka.x)
				if (usingelement[i].idBefore == 36) {
					console.log("YOU WIN")
					Win();
				}
				if (usingelement[i].pos == (Dratewka.y.toString() + Dratewka.x.toString())) {
					if (usingelement[i].idAfter == "34") {
						if (DragonLive == false) {
							Dratewka.eq = [];
							var item = items[usingelement[i].idAfter];
							DratewkaAlerts(usingelement[i].alert);
							Dratewka.eq = item;
						}
						else {
							DratewkaAlerts("You can't use it here");
						}
					}
					else {

						Dratewka.eq = [];
						var item = items[usingelement[i].idAfter];
						console.log("I:", item)
						if (usingelement[i].sheep != 1) {
							console.log(items[usingelement[i].idAfter])
							Dratewka.eq = item;
						}

						else {
							SheepParts.push(item[0])
							console.log("sheep part")

							if (item[2] == "deaddragon") {
								console.log("użyłeś Sheepa")
								killDragon();
							}
							if (SheepParts.length == 6) {
								var item = items[37];
								Dratewka.eq = item;
								SheepParts = [];
								locations[4][3].sheep = SheepParts;
								DratewkaAlerts("Your fake sheep is full of poison and ready to be eaten by the dragon");
							}
						}
						if (usingelement[i].idBefore == 24) {
							console.log("DIG HERE")
							DratewkaAlerts("You are digging...")
							setTimeout(() => {
								DratewkaAlerts("and digging...")
								setTimeout(() => {
									DratewkaAlerts("That's enough sulphur for you")
								}, 1200);
							}, 1200);
						} else {
							DratewkaAlerts(usingelement[i].alert);
						}
					}
				}
				else DratewkaAlerts("You can't use it here");
			}
		}
	}
}
Dratewka = new Player;
