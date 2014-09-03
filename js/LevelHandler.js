function LevelHandler () {
	this.stage = "mainScreen";
	this.subStage = 0;
}

LevelHandler.prototype.update = function() {
	var that = this,
		content = "",
		subContent = "",
		newVal = "";
	dance:
	switch(this.stage)  {
		case "mainScreen": /******************/
			// load the view
			$("#topbar").hide();
			showBar = false;
			$("#result").html(HtmlCreator.createElem('div', 'mainScreen', 'mainScreen', I18.MAIN_SCREEN.INTRODUCTION));
			// load the bindings
			$(document).on("keydown", function(e){
				console.log(e.keyCode);
				if (e.keyCode === 27) {
					window.location = window.location;
				} else if(e.keyCode !== 116) {
					that.changeStage("characterCreation");
				}
			});
			$("#result").on("click", function(){
				that.changeStage("characterCreation");
			})
		break;	
		case "characterCreation": /******************/
			// finish check
			if (that.subStage === 3) {
				that.changeStage("loadMenu");
				break dance;
			}
			// load the view
			switch (that.subStage) {
				case 0:
					content = HtmlCreator.createElem('div', 'question', '', I18.CHARACTER_CREATION.FIRST_QUESTION.QUESTION);
					content += '<br>' + HtmlCreator.createElem('div', 'answerA', 'answer', I18.CHARACTER_CREATION.FIRST_QUESTION.ANSWER_A);
					content += '<br>' + HtmlCreator.createElem('div', 'answerB', 'answer', I18.CHARACTER_CREATION.FIRST_QUESTION.ANSWER_B);
					content += '<br>' + HtmlCreator.createElem('div', 'answerC', 'answer', I18.CHARACTER_CREATION.FIRST_QUESTION.ANSWER_C);
					content += '<br>' + HtmlCreator.createElem('div', 'answerD', 'answer', I18.CHARACTER_CREATION.FIRST_QUESTION.ANSWER_D);
					content += '<br>' + HtmlCreator.createElem('div', 'answerE', 'answer', I18.CHARACTER_CREATION.FIRST_QUESTION.ANSWER_E);
					content += '<br><br>' + HtmlCreator.createElem('div', '', '', I18.CHARACTER_CREATION.OUTRO);
					$("#result").html(HtmlCreator.createElem('div', 'mainScreen', 'mainScreen', content));
				break;
				case 1:
					content = HtmlCreator.createElem('div', 'question', '', I18.CHARACTER_CREATION.SECOND_QUESTION.QUESTION);
					content += '<br>' + HtmlCreator.createElem('div', 'answerA', 'answer', I18.CHARACTER_CREATION.SECOND_QUESTION.ANSWER_A);
					content += '<br>' + HtmlCreator.createElem('div', 'answerB', 'answer', I18.CHARACTER_CREATION.SECOND_QUESTION.ANSWER_B);					content += '<br><br>' + HtmlCreator.createElem('div', '', '', I18.CHARACTER_CREATION.OUTRO);
					$("#result").html(HtmlCreator.createElem('div', 'mainScreen', 'mainScreen', content));
				break;
				case 2:
					content = '<br>' + HtmlCreator.createElem('div', 'question', '', I18.CHARACTER_CREATION.THIRD_QUESTION.QUESTION);
					content += '<br>' + HtmlCreator.createElem('div', 'answerA', 'answer', I18.CHARACTER_CREATION.THIRD_QUESTION.PART1_A + HtmlCreator.createElem('span', 'nameInput', '', getRandomName('male')) + HtmlCreator.createElem('span', '', 'optionGray', I18.CHARACTER_CREATION.THIRD_QUESTION.PART2_A));
					content += '<br>' + HtmlCreator.createElem('div', 'answerB', 'answer', I18.CHARACTER_CREATION.THIRD_QUESTION.PART1_B + HtmlCreator.createElem('span', 'lastNameInput', '', getRandomSurname()) + HtmlCreator.createElem('span', '', 'optionGray', I18.CHARACTER_CREATION.THIRD_QUESTION.PART2_B));
					content += '<br>' + HtmlCreator.createElem('div', 'answerC', 'answer', I18.CHARACTER_CREATION.THIRD_QUESTION.PART1_C + HtmlCreator.createElem('span', 'sexInput', '', I18.MALE, 'style="color: #41fafa;"') + HtmlCreator.createElem('span', '', 'optionGray', I18.CHARACTER_CREATION.THIRD_QUESTION.PART2_C));
					content += '<br>' + HtmlCreator.createElem('div', 'answerD', 'answer', I18.CHARACTER_CREATION.THIRD_QUESTION.PART1_D + HtmlCreator.createElem('span', 'cityInput', '', getRandomCity()) + HtmlCreator.createElem('span', '', 'optionGray', I18.CHARACTER_CREATION.THIRD_QUESTION.PART2_D));
					content += '<br>' + HtmlCreator.createElem('div', 'answerE', 'answer', I18.CHARACTER_CREATION.THIRD_QUESTION.PART1_E + HtmlCreator.createElem('span', 'historyInput', '', I18.CHARACTER_CREATION.THIRD_QUESTION.HISTORY_SELF, 'style="color: lime;"') + HtmlCreator.createElem('span', '', 'optionGray', I18.CHARACTER_CREATION.THIRD_QUESTION.PART2_E));
					content += '<br><br>' + HtmlCreator.createElem('div', '', '', I18.CHARACTER_CREATION.THIRD_QUESTION.OUTRO);
					$("#result").html(HtmlCreator.createElem('div', 'mainScreen', 'mainScreen', content));
				break;
			}
			
			
			// load the bindings

			$(document).on("keydown", function(e){
				switch(e.keyCode) {
					case 65:
						$("#answerA").click();
					break;
					case 66:
						$("#answerB").click();
					break;
					case 67:
						$("#answerC").click();
					break;
					case 68:
						$("#answerD").click();
					break;
					case 69:
						$("#answerE").click();
					break;
					case 18:
					case 116:
					break;
					default:
						that.subStage += 1;
						that.exitStage();
						that.update();
				}
			});

			if (that.subStage === 0) {
				$(".answer").on("click", function() {
					if ($(this).html().indexOf("[ ]") === -1) {
						if(this.id === "answerA") $("#answerB").css("color", "white");
						$(this).html($(this).html().replace("[X]", "[ ]"));
					} else {
						if(this.id === "answerA") $("#answerB").css("color", "gray");
						$(this).html($(this).html().replace("[ ]", "[X]"));
					}
				});
			} else if (that.subStage === 2) {
				$(".answer").on("click", function(){
					switch (this.id) {
						case "answerA":
							$("#nameInput").html(getRandomName($("#sexInput").html()));
						break;
						case "answerB":
							$("#lastNameInput").html(getRandomSurname());
						break;
						case "answerC":
							newVal = getNextSex($("#sexInput").html());
							switch (newVal)  {
								case I18.MALE :
									$("#sexInput").css("color", "#41fafa");
								break;
								case I18.FEMALE :
									$("#sexInput").css("color", "magenta");
								break;
								case I18.COMPLICATED :
									$("#sexInput").css("color", "yellow");
								break;
							}
							$("#sexInput").html(newVal);
							$("#nameInput").html(getRandomName($("#sexInput").html()));
						break;
						case "answerD":
							$("#cityInput").html(getRandomCity());
						break;
						case "answerE":
							newVal = getNextHistory($("#historyInput").html());
							switch (newVal)  {
								case I18.CHARACTER_CREATION.THIRD_QUESTION.HISTORY_SELF :
									$("#historyInput").css("color", "lime");
								break;
								case I18.CHARACTER_CREATION.THIRD_QUESTION.HISTORY_MACHINE :
									$("#historyInput").css("color", "red");
								break;
							}
							$("#historyInput").html(newVal);
						break;
					}
				});
			} else {
				$(".answer").on("click", function() {
					$(".answer").each(function(){
						$(this).html($(this).html().replace("[X]", "[ ]"));
					});
					$(this).html($(this).html().replace("[ ]", "[X]"));
				});
			}
		break;
		case "loadMenu": /******************/
			showBar = true;
			$("#topbar").show();
			$("#result").html(HtmlCreator.createElem('div', 'mainScreen', 'mainScreen', "<br><br>THAT'S ALL FOR NOW.<br><br>WAIT FOR THE NEXT UPDATE!"));
		break;
	}
};

LevelHandler.prototype.changeStage = function(stage, subStage) {
	this.exitStage();
	this.stage = stage;
	typeof subStage !== "undefined" ? this.subStage = subStage : this.subStage = 0;
	this.update();
};

LevelHandler.prototype.exitStage = function() {
	switch(stage) {
		case "mainScreen":
			$(document).unbind();
			$("#result").unbind("click");
		break;
		case "characterCreation":
			$(document).unbind();
			$(".answer").unbind("click");
		break;
	}
};