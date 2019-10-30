$(document).ready(function() {
  $("button").click(function() {
    var introExtroResult = 0;
    var sensingIntuitionResult = 0;
    var thinkingFeelingResult = 0;
    var judingPerceivingResult = 0;
    var introExtroString;
    var sensingIntuitionString;
    var thinkingFeelingString;
    var judingPerceivingString;
    var ieCheck;
    var snCheck;
    var tfCheck;
    var jpCheck;
    var result;

    for(i = 1; i <= 4; i++) {
      introExtroResult += parseInt($('input[name="introextro' + i + '"]:checked').val());
      sensingIntuitionResult += parseInt($('input[name="senseintu' + i + '"]:checked').val());
      thinkingFeelingResult += parseInt($('input[name="thinkfeel' + i + '"]:checked').val());
      judingPerceivingResult += parseInt($('input[name="judgeperceive' + i + '"]:checked').val());
    }

    console.log("e or i score: " + introExtroResult);
    console.log("s or n score: " + sensingIntuitionResult);
    console.log("t or f score: " + thinkingFeelingResult);
    console.log("j or p score: " + judingPerceivingResult);

    if(introExtroResult > 0) {
      introExtroString = "E";
      ieCheck = true;
    }
    else if (introExtroResult <= 0) {
      introExtroString = "I";
      ieCheck = true;
    }
    else {
		introExtroString = "Empty";
		ieCheck = false;
	}

    if(sensingIntuitionResult > 0) {
      sensingIntuitionString = "S";
      snCheck = true;
    }
    else if (sensingIntuitionResult <= 0)  {
      sensingIntuitionString = "N";
      snCheck = true;
    }
    else {
		sensingIntuitionString = "Empty";
		snCheck = false;
	}

    if(thinkingFeelingResult > 0) {
      thinkingFeelingString = "T";
      tfCheck = true;
    }
    else if (thinkingFeelingResult <= 0) {
      thinkingFeelingString = "F";
      tfCheck = true;
    }
    else {
		thinkingFeelingString = "Empty";
		tfCheck = false;
	}

    if(judingPerceivingResult > 0) {
      judingPerceivingString = "J";
      jpCheck = true;
    }
    else if (judingPerceivingResult <= 0) {
      judingPerceivingString = "P";
      jpCheck = true;
    }
    else {
		judingPerceivingString = "Empty";
		jpCheck = false;
	}

    result = introExtroString.concat(sensingIntuitionString, thinkingFeelingString, judingPerceivingString);
    console.log(result);

    if (ieCheck && snCheck && tfCheck && jpCheck == true) {
      window.location = "resultats/" + result + ".html";
    }
    else alert("Remplissez le quiz au complet!");

  });
});

function createQuestion(DivID, Name, Question) {
    $("#"+DivID).append("<p>" + Question + "</p>");
    $("#"+DivID).append("<img src='d.png'>");
    for (i = -3; i <= 3;  i++) {
      $("#"+DivID).append("<input type='radio' name=" + Name + " value=" + i + ">");
    }
    $("#"+DivID).append("<img src='u.png'>")
}
