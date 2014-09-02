function Squad() {
	this.name = "Default"; // name of the squad
	this.members = []; // vector of Entity.
}

/*
 * Finds the id of the passed member
*/
Squad.prototype.searchMemberId = function(member) {
	for(var i in this.members) {
		if (this.members[i] === member) return i;
	}
	return false;
};

/*
 * Adds a member to the squad if its not in it and the squad has enough space.
*/
Squad.prototype.addMember = function(member) {
	var i = 0;
	for (i; i < this.members.length; i++) {
		if (this.members[i] === undefined) break;
		if (this.members[i] === member) {
			retun -1; // the member already is in the squad >:(
		}
	}

	if (i < MAX_SQUAD_SIZE) {
		this.members[i] = member; // add the member
		return 1;
	} else return -2; // not enough space
};

/*
 * Remove a member from a squad and if it's the last member prepares a deletion.
*/
Squad.prototype.removeMember = function(member) {
	for (var id in this.members) {
		if (this.members[id] === member) {
			this.members[id] = undefined // found the member and deletes it
			if (id === this.members.length) this.deleteSquad();
		}
	}
};