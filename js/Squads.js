function Squads() {
	this.squads = [] // vector of Squad
}


/*
 * Returns the id of the passed squad
*/
Squads.prototype.findSquadId = function(squad) {
	for(var i in this.squads) {
		if (this.squads[i] === squad) return i;
	}
	return false;
};

/*
 * Adds a squad to the squad list with a first member
*/
Squads.prototype.addSquad = function(member) {
	try {
		var newSquad = new Squad();
		newSquad.addMember(member);
		this.squads.push(newSquad);
		return true;
	} catch(e) {
		return false;
	}
};

/*
 * Deletes the squads if the user confirms it
*/
Squads.prototype.deleteSquad = function(squad) {
	var decision = confirm(I18.deleteSquadConfirmation),
	id = -1;
	if (decision) {
		id = this.findSquadId(squad);
		if (id !== false) {
			this.squads[id] = undefined; // deletes the squad
		} else {
			return -1; // squad doesn't exist
		}
		return true // user accepted and al ok
	} else {
		return -2; // user canceled 
	}
};