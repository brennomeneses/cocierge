$(document).ready(function(){

    generateFavoriteBuildingOptions();

});

favoriteBuildingArray = [["Comercial John Lennon", "Edifício Comercial John Lennon", 720]];

function generateFavoriteBuildingOptions(){

  $("#appendContentNearbyFavorites").html();
  content = "";
  for (i = 0; i < favoriteBuildingArray.length; i++){
    content += '<div class="buildingOptionsClick">';
      content += '<div class="topOptions"><p class="fLeft text-dark floatTextMargin"><b>' + favoriteBuildingArray[i][0] + '</b></p><p class="fRight configText text-dark floatTextMargin">More</p></div>';
      content += '<div class="middleOptions"><p class="fLeft text-dark floatTextMargin">' + favoriteBuildingArray[i][1] + '<br><span class="text-secondary">Distância ' + favoriteBuildingArray[i][2] + 'm</span></p></div>';
    content += '<div class="bOptions fLeft"><a href="#"><img class="footerWhiteBell" src="../img/icons/blackSettings.png"></a></div><div class="bOptions fRight divBorder">';
    content += '<a href="#"><img class="footerWhiteBell" src="../img/icons/blackEditIcon.png"></a></div></div>';
  }
  $("#appendContentNearbyFavorites").append(content);

}