

$("#tab1").click(() =>
  $("#cont1").show();
  $("#cont2").hide();

  // タブの色を切り替える。
  $("#tab1").css("background-color", "#0d0322")
  $("#tab2").css("background-color", "#0d030f")
);

$("#tab2").click(() =>
  $("#cont1").hide();
  $("#cont2").show();
  $("#tab1").css("background-color", "#0d0322")
  $("#tab2").css("background-color", "#0d030f")
);

$(".person").click(() =>
  $(this).toggleClass('active');
);
