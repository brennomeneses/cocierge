$(document).ready(function(){

    generateBuildingOptions(allBuildings);

});

allBuildings = [["Residencial", "Residencial Morada das Palmeiras", 400], ["Comercial John Lennon", "Edifício Comercial John Lennon", 720]];
favoriteBuilding = [["Comercial John Lennon", "Edifício Comercial John Lennon", 720]];

function generateBuildingOptions(buildingArray){

  $("#appendContentNearby").html("");
  content = "";
  for (i = 0; i < buildingArray.length; i++){
    content += '<div class="buildingOptionsClick">';
    content += '<div class="topOptions"><p class="fLeft text-dark floatTextMargin"><b>' + buildingArray[i][0] + '</b></p><p class="fRight configText text-dark floatTextMargin">More</p></div>';
    content += '<div class="middleOptions"><p class="fLeft text-dark floatTextMargin">' + buildingArray[i][1] + '<br><span class="text-secondary">Distância ' + buildingArray[i][2] + 'm</span></p></div>';
    content += '<div class="bOptions fLeft"><a href="#"><img class="footerWhiteBell" src="../img/icons/blackSettings.png"></a></div><div class="bOptions fRight divBorder">';
    content += '<a href="#"><img class="footerWhiteBell" src="../img/icons/blackEditIcon.png"></a></div></div>';
  }
  $("#appendContentNearby").append(content);

  $("#nearbyBuildings").click(function(){
    generateBuildingOptions(allBuildings);
    $("#favorites").removeClass("selected");
    $("#nearby").addClass("selected");
  });

  $("#favoriteBuildings").click(function(){
    generateBuildingOptions(favoriteBuilding);
    $("#favorites").addClass("selected");
    $("#nearby").removeClass("selected");
  });

}
