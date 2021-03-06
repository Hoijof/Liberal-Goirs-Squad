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
	MALE: "Male",
	FEMALE: "Female",
	COMPLICATED: "It's Complicated",
	MAIN_SCREEN: {
		INTRODUCTION: "Liberal Crime Squad<br>Inspired by the 1983 version of Oubliette <br><br><br><br><br>v3.9 Copyright (C) 2002-4, Tarn Adams<br>A Bay 12 Games Production<br>www.bay12games.com<br><br>v4.07.0 Maintained by the Open Source Community<br>soruceforge.net/projects/lcsgame<br><br>V.0.0.1 Adapted to JavaScript by Hoijof<br>www.ivy-corp.com<br><br>Press ESC now to quit. Quitting later causes your progress to be saved.<br><br>Press any other key to pursue your liberal Agenda!"
	},
	CHARACTER_CREATION: {
		INTRODUCTION: "yez",
		OUTRO: "Press any other key to continue...",
		FIRST_QUESTION: {
			QUESTION: "New Game of Liberal Crime Squad: Advanced Gameplay Options",
			ANSWER_A: "[ ] A - Classic Mode: No Conservative Crime Squad.",
			ANSWER_B: "[ ] B - We Didn't Start The Fire: The CCS starts active and extremely strong.",
			ANSWER_C: "[ ] C - Nightmare Mode: Liberalism is forgotten. Is it too late to fight back?",
			ANSWER_D: "[ ] D - Extended Engame: Prevent Liberals from passing term limits.",
			ANSWER_E: "[ ] E - Marathon Mode: Prevent Liberals from purgin the Supreme court."
		},
		SECOND_QUESTION: {
			QUESTION: "New Game of Liberal Crime Squad: Your Agenda",
			ANSWER_A: "[X] A - No Compromise Classic - I will make all our laws Elite Liberal!",
			ANSWER_B: "[ ] B - Democrat Mode - Most laws must be Elite Liberal, some can be Liberal."
		},
		THIRD_QUESTION: {
			QUESTION: "The Founder of the Liberal Crime Squad",
			PART1_A: "FIRST NAME: ",
			PART2_A: "(Press A to have your parents reconsider)",
			PART1_B: "LAST NAME: ",
			PART2_B: "(Press B to be born to a different family)",
			PART1_C: "SEX: ",
			PART2_C: "(Press C to change your sex at birth)",
			PART1_D: "CITY: ",
			PART2_D: "(Press D to relocate)",
			PART1_E: "HISTORY: ",
			PART2_E: "(Press E to toggle childhood)",
			OUTRO: "Press another key when ready to begin...",
			HISTORY_SELF: "Let Me Choose",
			HISTORY_MACHINE: "Let Fate Decide" 
		}
	},
	SQUADS: {
		DELETE_SQUAD_CONFIRMATION: "Are you sure you want to delete the selected squad?"	
	}
	
},

OBJECTS = {},

MALE_NAMES = [
      "Ryan",
      "Sergio",
      "Bill",
      "James",
      "Marty",
      "Angel",
      "Pat",
      "Toshiro",
      "Yan-ping",
      "Tetsuo",
      "Akira",
      "Jimmy",
      "Carlos",
      "William",
      "Billy Bob",
      "Manuel",
      "Douglas",
      "Steven",
      "Howard",
      "Donald",
      "Barry",
      "Thomas",
      "Derek",
      "Gary",
      "Archie",
      "Ned",
      "Randy",
      "Taylor",
      "Kim",
      "Roger",
      "Raymond",
      "Harvey",
      "Robert",
      "Michael",
      "Aaron",
      "George",
      "Noel",
      "Lex",
      "Chuck",
      "Charlie",
      "Charles",
      "Malcolm",
      "Martin",
      "Sean",
      "Raven",
      "Wolf",
      "Miguel",
      "Pablo",
      "Paul",
      "Jesus",
      "Ali",
      "Bruce",
      "Dick",
      "Phillip",
      "Kirk",
      "Kurt",
      "John",
      "Alexander",
      "David",
      "Beau",
      "Mumtaz",
      "Diwakar",
      "Dale",
      "Woody",
      "Ariel",
      "Hans",
      "Jun",
      "Chin-Yuan",
      "Deepak",
      "Christopher",
      "Matthew",
      "Joseph",
      "James",
      "Daniel",
      "Robert",
      "John",
      "Kennedy",
      "Jonathan",
      "Adam",
      "Justin",
      "Robin",
      "MrDefault"
],
FEMALE_NAMES = [
      "Amanda",
      "Laura",
      "Anne",
      "Jessica",
      "Lisa",
      "Bonita",
      "Angel",
      "Pat",
      "Yan-ping",
      "Carol",
      "Jenny",
      "Jennifer",
      "Manuela",
      "Kristin",
      "Bonnie",
      "Joann",
      "Mayumi",
      "Felicia",
      "Sherry",
      "Judy",
      "Elinor",
      "Taylor",
      "Kim",
      "Ruthanne",
      "Adrienne",
      "Linda",
      "Raven",
      "Ingrid",
      "Kweisi",
      "Susanna",
      "Sharon",
      "Marion",
      "Kathy",
      "Bruce",
      "Elsie",
      "Satya",
      "Ariel",
      "Barbara",
      "Jun",
      "Rosemary",
      "Chin-Yuan",
      "Aiko",
      "Vithara",
      "Ashley",
      "Alene",
      "Janette",
      "Stephanie",
      "Kelly",
      "Robin",
      "Tiffany",
      "Monica",
      "Jaqueline",
      "Latoya",
      "Veronica"
],
LAST_NAMES =  [
      "King",
      "Lewis",
      "Black",
      "White",
      "Ames",
      "Warner",
      "Simpson",
      "Parker",
      "Suave",
      "Mifune",
      "Gu",
      "Bolger",
      "Ross",
      "Ramirez",
      "Kurosawa",
      "Johnson",
      "Buchanan",
      "Adamson",
      "Hendrix",
      "Rojo",
      "Villa",
      "Fields",
      "Templeton",
      "Ivanson",
      "Blitzer",
      "Muhammed",
      "Stone",
      "Cho",
      "Childress",
      "Africa",
      "Balgos",
      "Baird",
      "Bailey",
      "Diaz",
      "Decker",
      "Ericson",
      "Loeb",
      "Meffert",
      "McLeod",
      "Tucker",
      "Takayoshi",
      "Tanner",
      "Lipman",
      "Little",
      "Logsdon",
      "Krasow",
      "Krieger",
      "Dahmer",
      "Gacy",
      "Krishna",
      "la Russa",
      "Savedra",
      "Scardino",
      "Keitel",
      "Wallace",
      "Buckman",
      "Fulsom",
      "Smith",
      "Venus",
      "Straley",
      "Purcell",
      "al Fadil",
      "Storm",
      "Patterson",
      "Pelton",
      "Ng",
      "Filler",
      "Buttman",
      "Fingleton",
      "Fenoglio",
      "de la Cruz",
      "Delgado",
      "Hatcher",
      "Jameson",
      "Franklin",
      "Washington",
      "Jefferson",
      "Strossen",
      "Hannemann",
      "Hammond",
      "Logan",
      "Hutchison",
      "Jimison",
      "Sawyer",
      "Santiago",
      "Rudkin",
      "Bump",
      "Simon",
      "Davis",
      "Reagan",
      "Bush",
      "Bradshaw",
      "Yamaguchi",
      "Roy",
      "Colt",
      "Rothstein",
      "Spears",
      "Lopez",
      "Aguilera",
      "Carey",
      "Griffith",
      "Valdez",
      "McGee",
      "Copeland",
      "Blackenship",
      "Faulkner",
      "Melendez",
      "Dunlap",
      "Guy",
      "Duke",
      "Villanueva",
      "Boggs",
      "Godwin",
      "Brewster",
      "Irvin",
      "Galindo",
      "Cordero",
      "Eubanks",
      "Youngblood",
      "Seay",
      "Hope",
      "Winslow",
      "Fox"
],
LOCATIONS = [
      "Abilene, TX",
      "Aguadilla, PR", // city in Puerto Rico
      "Akron, OH",
      "Albany, NY",
      "Albuquerque, NM", "Albuquerque, NM", "Albuquerque, NM",
      "Alexandria, VA",
      "Allentown, PA",
      "Amarillo, TX",
      "Anaheim, CA", "Anaheim, CA", "Anaheim, CA",
      "Anchorage, AK", "Anchorage, AK", "Anchorage, AK",
      "Ann Arbor, MI",
      "Antioch, CA",
      "Appleton, WI",
      "Arlington, TX", "Arlington, TX", "Arlington, TX",
      "Arvada, CO",
      "Asheville, NC",
      "Atlantic City, NJ",
      "Athens, GA",
      "Atlanta, GA", "Atlanta, GA", "Atlanta, GA",
      "Augusta, GA",
      "Aurora, CO", "Aurora, CO", "Aurora, CO",
      "Aurora, IL",
      "Austin, TX", "Austin, TX", "Austin, TX", "Austin, TX",
      "Bakersfield, CA", "Bakersfield, CA", "Bakersfield, CA",
      "Baltimore, MD", "Baltimore, MD", "Baltimore, MD", "Baltimore, MD",
      "Barnstable, MA",
      "Baton Rouge, LA", "Baton Rouge, LA",
      "Bayam�n, PR", "Bayam�n, PR", // city in Puerto Rico
      "Bellevue, WA",
      "Bellingham, WA",
      "Beaumont, TX",
      "Berkeley, CA",
      "Billings, MT",
      "Biloxi, MS",
      "Binghamton, NY",
      "Birmingham, AL", "Birmingham, AL",
      "Boise, ID", "Boise, ID",
      "Boston, MA", "Boston, MA", "Boston, MA", "Boston, MA",
      "Boulder, CO",
      "Bremerton, WA",
      "Bridgeport, CT",
      "Broken Arrow, OK",
      "Brooklyn, NY", "Brooklyn, NY",
      "Brownsville, TX",
      "Buffalo, NY", "Buffalo, NY",
      "Burbank, CA",
      "Burlington, VT",
      "Cambridge, MA",
      "Caguas, PR", // city in Puerto Rico
      "Canton, OH",
      "Cape Coral, FL",
      "Carlsbad, CA",
      "Carolina, PR", // city in Puerto Rico
      "Carrollton, TX",
      "Cary, NC",
      "Cedar Rapids, IA",
      "Centennial, CO",
      "Champaign, IL",
      "Chandler, AZ", "Chandler, AZ",
      "Charleston, SC",
      "Charleston, WV",
      "Charlotte, NC", "Charlotte, NC", "Charlotte, NC", "Charlotte, NC",
      "Charlotte Amalie, VI", // biggest city in U.S. Virgin Islands
      "Charlottesville, VA",
      "Chattanooga, TN",
      "Chesapeake, VA", "Chesapeake, VA",
      "Cheyenne, WY",
      "Chicago, IL", "Chicago, IL", "Chicago, IL", "Chicago, IL", "Chicago, IL",
      "Chico, CA",
      "Chula Vista, CA", "Chula Vista, CA",
      "Cincinnati, OH", "Cincinnati, OH",
      "Clarksville, TN",
      "Clearwater, FL",
      "Cleveland, OH", "Cleveland, OH", "Cleveland, OH",
      "College Station, TX",
      "Colorado Springs, CO", "Colorado Springs, CO", "Colorado Springs, CO",
      "Columbia, MO",
      "Columbia, SC",
      "Columbus, GA", "Columbus, GA",
      "Columbus, OH", "Columbus, OH", "Columbus, OH", "Columbus, OH",
      "Concord, CA",
      "Coral Springs, FL",
      "Corona, CA",
      "Corpus Christi, TX", "Corpus Christi, TX", "Corpus Christi, TX",
      "Costa Mesa, CA",
      "Crestview, FL",
      "Dallas, TX", "Dallas, TX", "Dallas, TX", "Dallas, TX", "Dallas, TX",
      "Daly City, CA",
      "Davenport, IA",
      "Dayton, OH",
      "Daytona Beach, FL",
      "Dededo, GU", // biggest city in Guam
      "Denton, TX",
      "Denver, CO", "Denver, CO", "Denver, CO", "Denver, CO",
      "Des Moines, IA", "Des Moines, IA",
      "Detroit, MI", "Detroit, MI", "Detroit, MI", "Detroit, MI",
      "Downey, CA",
      "Duluth, MN",
      "Durham, NC", "Durham, NC",
      "El Cajon, CA",
      "El Monte, CA",
      "El Paso, TX", "El Paso, TX", "El Paso, TX", "El Paso, TX",
      "Elgin, IL",
      "Elk Grove, CA",
      "Elkhart, IN",
      "Elizabeth, NJ",
      "Erie, PA",
      "Escondido, CA",
      "Eugene, OR",
      "Evansville, IN",
      "Everett, WA",
      "Fairfield, CA",
      "Fargo, ND",
      "Fayetteville, AR",
      "Fayetteville, NC", "Fayetteville, NC",
      "Flint, MI",
      "Florence, SC",
      "Fontana, CA", "Fontana, CA",
      "Fort Collins, CO",
      "Fort Lauderdale, FL",
      "Fort Smith, AR",
      "Fort Wayne, IN", "Fort Wayne, IN",
      "Fort Worth, TX", "Fort Worth, TX", "Fort Worth, TX", "Fort Worth, TX",
      "Fremont, CA", "Fremont, CA",
      "Fresno, CA", "Fresno, CA", "Fresno, CA",
      "Frisco, TX",
      "Fullerton, TX",
      "Gainesville, FL",
      "Garden Grove, CA",
      "Garland, TX", "Garland, TX",
      "Gilbert, AZ", "Gilbert, AZ",
      "Glendale, AZ", "Glendale, AZ",
      "Glendale, CA",
      "Grand Prairie, TX",
      "Grand Rapids, MI",
      "Greeley, CO",
      "Green Bay, WI",
      "Greensboro, NC", "Greensboro, NC",
      "Greenville, SC",
      "Gresham, OR",
      "Hagerstown, MD",
      "Hampton, VA",
      "Harrisburg, PA",
      "Hartford, CT",
      "Hayward, CA",
      "Hempstead, NY",
      "Henderson, NV", "Henderson, NV",
      "Hialeah, FL", "Hialeah, FL",
      "Hickory, NC",
      "High Point, NC",
      "Hollywood, CA",
      "Hollywood, FL",
      "Honolulu, HI", "Honolulu, HI", "Honolulu, HI",
      "Houma, LA",
      "Houston, TX", "Houston, TX", "Houston, TX", "Houston, TX", "Houston, TX",
      "Huntington, WV",
      "Huntington Beach, CA",
      "Huntsville, AL",
      "Independence, MO",
      "Indianapolis, IN", "Indianapolis, IN", "Indianapolis, IN", "Indianapolis, IN",
      "Inglewood, CA",
      "Irvine, CA", "Irvine, CA",
      "Irving, TX", "Irving, TX",
      "Jackson, MS",
      "Jacksonville, FL", "Jacksonville, FL", "Jacksonville, FL", "Jacksonville, FL",
      "Jersey City, NJ", "Jersey City, NJ",
      "Johnson City, TN",
      "Joliet, IL",
      "Kalamazoo, MI",
      "Kansas City, KS",
      "Kansas City, MO", "Kansas City, MO", "Kansas City, MO",
      "Kent, WA",
      "Killeen, TX",
      "Kingsport, TN",
      "Knoxville, TN",
      "Lafayette, IN",
      "Lafayette, LA",
      "Lake Charles, LA",
      "Lake Havasu City, AZ",
      "Lakeland, FL",
      "Lakewood, CO",
      "Lancaster, CA",
      "Lancaster, PA",
      "Lansing, MI",
      "Laredo, TX", "Laredo, TX",
      "Las Cruces, NM",
      "Las Vegas, NV", "Las Vegas, NV", "Las Vegas, NV", "Las Vegas, NV",
      "Lewisville, TX",
      "Lexington, KY", "Lexington, KY", "Lexington, KY",
      "Lincoln, NE", "Lincoln, NE",
      "Little Rock, AR",
      "Long Beach, CA", "Long Beach, CA", "Long Beach, CA",
      "Long Island, NY", "Long Island, NY", "Long Island, NY", "Long Island, NY",
      "Longview, TX",
      "Los Angeles, CA", "Los Angeles, CA", "Los Angeles, CA", "Los Angeles, CA", "Los Angeles, CA",
      "Louisville, KY", "Louisville, KY", "Louisville, KY", "Louisville, KY",
      "Lowell, MA",
      "Lubbock, TX", "Lubbock, TX",
      "Lynchburg, VA",
      "Macon, GA",
      "Madison, WI", "Madison, WI",
      "Manchester, NH",
      "Manhattan, NY", "Manhattan, NY",
      "Mayag�ez, PR", // city in Puerto Rico
      "McAllen, TX",
      "McKinney, TX",
      "Medford, OR",
      "Memphis, TN", "Memphis, TN", "Memphis, TN", "Memphis, TN",
      "Merced, CA",
      "Mesa, AZ", "Mesa, AZ", "Mesa, AZ",
      "Mesquite, TX",
      "Miami, FL", "Miami, FL", "Miami, FL",
      "Miami Gardens, FL",
      "Midland, TX",
      "Milwaukee, WI", "Milwaukee, WI", "Milwaukee, WI",
      "Minneapolis, MN", "Minneapolis, MN", "Minneapolis, MN",
      "Miramar, FL",
      "Mobile, AL",
      "Modesto, CA", "Modesto, CA",
      "Montgomery, AL", "Montgomery, AL",
      "Moreno Valley, CA", "Moreno Valley, CA",
      "Murfreesboro, TN",
      "Murrieta, CA",
      "Myrtle Beach, SC",
      "Naperville, IL",
      "Naples, FL",
      "Nashville, TN", "Nashville, TN", "Nashville, TN", "Nashville, TN",
      "New Haven, CT",
      "New London, CT",
      "New Orleans, LA", "New Orleans, LA", "New Orleans, LA",
      "New York, NY", "New York, NY", "New York, NY", "New York, NY", "New York, NY", "New York, NY",
      "Newark, NJ", "Newark, NJ",
      "Newport, RI",
      "Newport News, VA",
      "Norfolk, VA", "Norfolk, VA",
      "Norman, OK",
      "North Charleston, SC",
      "North Las Vegas, NV", "North Las Vegas, NV",
      "Norwalk, CA",
      "Oakland, CA", "Oakland, CA", "Oakland, CA",
      "Ocala, FL",
      "Oceanside, CA",
      "Odessa, TX",
      "Ogden, UT",
      "Oklahoma City, OK", "Oklahoma City, OK", "Oklahoma City, OK", "Oklahoma City, OK",
      "Olathe, KS",
      "Olympia, WA",
      "Omaha, NE", "Omaha, NE", "Omaha, NE",
      "Ontario, CA",
      "Orange, CA",
      "Orlando, FL", "Orlando, FL",
      "Overland Park, KS",
      "Oxnard, CA", "Oxnard, CA",
      "Palm Bay, FL",
      "Palmdale, CA",
      "Pasadena, CA",
      "Pasadena, TX",
      "Paterson, NJ",
      "Pearland, TX",
      "Pembroke Pines, FL",
      "Pensacola, FL",
      "Peoria, IL",
      "Peoria, AZ",
      "Philadelphia, PA", "Philadelphia, PA", "Philadelphia, PA", "Philadelphia, PA", "Philadelphia, PA",
      "Phoenix, AZ", "Phoenix, AZ", "Phoenix, AZ", "Phoenix, AZ", "Phoenix, AZ",
      "Pittsburgh, PA", "Pittsburgh, PA", "Pittsburgh, PA",
      "Plano, TX", "Plano, TX",
      "Pomona, CA",
      "Pompano Beach, FL",
      "Ponce, PR", // city in Puerto Rico
      "Port St. Lucie, FL",
      "Portland, ME",
      "Portland, OR", "Portland, OR", "Portland, OR", "Portland, OR",
      "Poughkeepsie, NY",
      "Prescott, AZ",
      "Providence, RI",
      "Provo, UT",
      "Pueblo, CO",
      "Queens, NY", "Queens, NY",
      "Raleigh, NC", "Raleigh, NC", "Raleigh, NC",
      "Rancho Cucamonga, CA",
      "Reading, PA",
      "Reno, NV", "Reno, NV",
      "Rialto, CA",
      "Richardson, TX",
      "Richland, WA",
      "Richmond, CA",
      "Richmond, VA", "Richmond, VA",
      "Riverside, CA", "Riverside, CA", "Riverside, CA",
      "Roanoke, VA",
      "Rochester, MN",
      "Rochester, NY", "Rochester, NY",
      "Rockford, IL",
      "Roseville, CA",
      "Round Rock, TX",
      "Sacramento, CA", "Sacramento, CA", "Sacramento, CA",
      "Saipan, MP", // biggest city in Northern Mariana Islands
      "Salem, OR",
      "Salinas, CA",
      "Salisbury, MD",
      "Salt Lake City, UT",
      "San Antonio, TX", "San Antonio, TX", "San Antonio, TX", "San Antonio, TX", "San Antonio, TX",
      "San Bernadino, CA", "San Bernadino, CA",
      "San Diego, CA", "San Diego, CA", "San Diego, CA", "San Diego, CA", "San Diego, CA",
      "San Francisco, CA", "San Francisco, CA", "San Francisco, CA", "San Francisco, CA",
      "San Jose, CA", "San Jose, CA", "San Jose, CA", "San Jose, CA",
      "San Juan, PR", "San Juan, PR", // biggest city in Puerto Rico
      "San Luis Obispo, CA",
      "San Mateo, CA",
      "Santa Ana, CA", "Santa Ana, CA", "Santa Ana, CA",
      "Santa Clara, CA",
      "Santa Clarita, CA",
      "Santa Cruz, CA",
      "Santa Maria, CA",
      "Santa Rosa, CA",
      "Sarasota, FL",
      "Savannah, GA",
      "Scottsdale, AZ", "Scottsdale, AZ",
      "Scranton, PA",
      "Seattle, WA", "Seattle, WA", "Seattle, WA", "Seattle, WA",
      "Shreveport, LA", "Shreveport, LA",
      "Sioux Falls, SD",
      "Simi Valley, CA",
      "South Bend, IN",
      "Spartanburg, SC",
      "Spokane, WA", "Spokane, WA",
      "Springfield, IL",
      "Springfield, MA",
      "Springfield, MO",
      "St. Louis, MO", "St. Louis, MO", "St. Louis, MO",
      "St. Paul, MN", "St. Paul, MN",
      "St. Petersburg, FL", "St. Petersburg, FL",
      "Stamford, CT",
      "Staten Island, NY",
      "Sterling Heights, MI",
      "Stockton, CA", "Stockton, CA",
      "Sunnyvale, CA",
      "Surprise, AZ",
      "Syracuse, NY",
      "Tacoma, WA", "Tacoma, WA",
      "Tafuna, AS", // biggest city in American Samoa
      "Tallahassee, FL",
      "Tampa, FL", "Tampa, FL", "Tampa, FL",
      "Temecula, CA",
      "Tempe, AZ",
      "The Bronx, NY", "The Bronx, NY",
      "Thornton, CO",
      "Thousand Oaks, CA",
      "Toledo, OH", "Toledo, OH",
      "Topeka, KS",
      "Torrance, CA",
      "Trenton, NJ",
      "Tuscaloosa, AL",
      "Tucson, AZ", "Tucson, AZ", "Tucson, AZ",
      "Tulsa, OK", "Tulsa, OK", "Tulsa, OK",
      "Tyler, TX",
      "Utica, NY",
      "Vallejo, CA",
      "Vancouver, WA",
      "Ventura, CA",
      "Victorville, CA",
      "Virginia Beach, VA", "Virginia Beach, VA", "Virginia Beach, VA",
      "Visalia, CA",
      "Waco, TX",
      "Warren, MI",
      "Washington, DC", "Washington, DC", "Washington, DC", "Washington, DC",
      "Waterbury, CT",
      "West Covina, CA",
      "West Jordan, UT",
      "West Palm Beach, FL",
      "West Valley City, UT",
      "Westminster, CO",
      "White Plains, NY",
      "Wichita, KS", "Wichita, KS", "Wichita, KS",
      "Wichita Falls, TX",
      "Wilmington, DE",
      "Wilmington, NC",
      "Winston-Salem, NC", "Winston-Salem, NC",
      "Worcester, MA",
      "Yakima, WA",
      "Yonkers, NY",
      "York, PA",
      "Youngstown, OH",
      "Yuma, AZ"
];

