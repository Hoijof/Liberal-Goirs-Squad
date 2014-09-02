var MAX_SQUAD_SIZE = 6,

JUICE = {
	0   : 0,
	10  : 0,
	50  : 1,
	100 : 3,
	200 : 5,
	500 : 6
},

ERRORS = { 
	SQUAD : {
		'-1': "The Entity it's already in this squad",
		'-2': "Not enough space in the squad"
	},
	SQUADS : {
		'-1': "The squad doesn't exist",
		'-2': "User cenceled operation"
	}
},

I18 = {
	MAIN_SCREEN: {
		INTRODUCTION: "Liberal Crime Squad<br>Inspired by the 1983 version of Oubliette <br><br><br><br>v3.9 Copyright (C) 2002-4, Tarn Adams<br>A Bay 12 Games Production<br>www.bay12games.com<br><br>v4.07.0 Maintained by the Open Source Community<br>soruceforge.net/projects/lcsgame<br><br>Adapted to JavaScript by Hoijof<br>V.0.0.1<br>www.ivy-corp.com<br><br>Press ESC now to quit. Quitting later causes your progress to be saved.<br><br>Press any other key to pursue your liberal Agenda!"
	},
	CHARACTER_CREATION: {
		INTRODUCTION: "yez"
	},
	SQUADS: {
		DELETE_SQUAD_CONFIRMATION: "Are you sure you want to delete the selected squad?"	
	}
	
},

OBJECTS = {};