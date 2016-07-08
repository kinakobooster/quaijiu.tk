const tabs = [$("#tab1"), $("#tab2")]
const conts = [$("#cont1"), $("#cont2")]

tabs[0].click(function(){
  conts[0].show()
  conts[1].hide()

  // switch tab color
  tabs[0].css("background-color", "#0d0322")
  tabs[1].css("background-color", "#0d030f")
})

tabs[1].click(function(){
  conts[1].show()
  conts[0].hide()
  tabs[1].css("background-color", "#0d0322")
  tabs[0].css("background-color", "#0d030f")
})

$(".person").click(function(){
  $(this).toggleClass('active')
})
