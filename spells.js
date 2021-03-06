// Syntax definition/example here: https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet/blob/master/additional%20content%20syntax/Homebrew%20Syntax%20-%20SpellsList.js
var iFileName = "Homebrew - SpellsList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

SpellsList["claw's pillars of lightning"] = { 

	name : "Claw's Pillars of Lightning",
	nameAlt : "Lightning Pillars",

	classes : ["sorcerer", "wizard"],

	source : ["HB", 0],

	level : 4,

	school : "Evoc",

	time : "1 a",

	range : "30 ft",

	components : "S,M",

	compMaterial : "Tufts of Fur",

	duration : "Conc, 1 min",

	save : "Con",

	description : "3 fur tufts; any creature contacting engulfed in 5ft wide 10ft high electricity; 6d6 lightning damage; save halves",

	descriptionFull : "Currents of wind scatter tufts of charged fur to three different unoccupied locations within range. When a creature enters a space occupied by one of these tufts for the first time on a turn or starts its turn there, the creature is engulfed by a 5-foot-radius, 10-foot-high pillar of discharged electricity and must make a Constitution saving throw as the current courses through its body. On a failed save, the creature takes 6d6 lightning damage and its speed is reduced to 0 for the rest of the turn. On a successful save, the creature takes half damage and its speed is not reduced." + "\n   " + "The tufts of fur are nearly invisible and require a successful Intelligence (Investigation) check against your spell save DC to determine their location." + "\n   " + "On each of your turns after you cast this spell, you may use a bonus action to move one of the tufts of fur to another unoccupied location within range." + "\n   " +"At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the number of charged tufts released increases by one for each spell level above 4th.",

	ritual : false,

	psionic : false,

};
