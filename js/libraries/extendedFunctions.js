function characterCreation(player) {
	

	//$("#result").html(HtmlCreator.createElem('div', 'characterCreation', 'characterCreation', I18.CHARACTER_CREATION.INTRODUCTION));
}

function getRandomName(sex) {
	if (sex === I18.MALE) {
		return MALE_NAMES[getRandomInt(0, MALE_NAMES.length-1)];
	} else if (sex === I18.FEMALE) {
		return FEMALE_NAMES[getRandomInt(0, FEMALE_NAMES.length-1)];
	} else {
		return isAppening(50) ? MALE_NAMES[getRandomInt(0, MALE_NAMES.length-1)] : FEMALE_NAMES[getRandomInt(0, FEMALE_NAMES.length-1)];
	}
}

function getNextSex(sex) {
	if (sex === I18.MALE) return I18.FEMALE;
	if (sex === I18.FEMALE) return I18.COMPLICATED;
	if (sex === I18.COMPLICATED) return I18.MALE;
}

function getRandomSurname() {
	return LAST_NAMES[getRandomInt(0, LAST_NAMES.length-1)];
}

function getRandomCity() {
	return LOCATIONS[getRandomInt(0, LOCATIONS.length-1)];
}

function getNextHistory(actualHistory) {
	return actualHistory === I18.CHARACTER_CREATION.THIRD_QUESTION.HISTORY_MACHINE ? I18.CHARACTER_CREATION.THIRD_QUESTION.HISTORY_SELF : I18.CHARACTER_CREATION.THIRD_QUESTION.HISTORY_MACHINE;
}