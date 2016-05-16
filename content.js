chrome.storage.sync.get("blacklistWords", function(obj){
  var wordToFilter =  obj.blacklistWords.toString();
  $("p").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("a").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("h1").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("h2").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("h3").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("h4").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("h5").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("h6").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("span").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("li").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });

  $("code").each(function(){
    if ($(this).text().indexOf(wordToFilter) != -1) {
      $(this).css("display", "none");
    }
  });
});
