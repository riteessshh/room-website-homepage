$(".close-button").click(()=>{
  $("#menu").toggleClass("hide")
  $("#navbar").toggleClass("hide")
})
$(".menu-button").click(()=>{
  $("#menu").toggleClass("hide")
  $("#navbar").toggleClass("hide")
})


var num = 0
const list = [".b1", ".b2", ".b3"]
$(".right-arrow").click(()=>{
  if (num < 2) {
    $(list[num]).toggleClass("hide")
    console.log(list[num] + "hidden");
    $(list[num + 1]).toggleClass("hide")
    console.log(list[num + 1] + "visible");
    num++
    console.log(num);
  } else if (num == 2) {
    num = 0
    $(list[num]).toggleClass("hide")
    console.log(list[num] + "visible");
    $(list[2]).toggleClass("hide")
    console.log(list[2] + "hidden");
    console.log(num);
  }
})
$(".left-arrow").click(()=>{
  if (num > 0) {
    $(list[num - 1]).toggleClass("hide")
    console.log(list[num - 1] + "visible");
    $(list[num]).toggleClass("hide")
    console.log(list[num] + "hidden");
    num--
    console.log(num);
  } else if (num == 0) {
    num = 2
    $(list[num]).toggleClass("hide")
    console.log(list[num] + "visible");
    $(list[0]).toggleClass("hide")
    console.log(list[0] + "hidden");
    console.log(num);
  }
})
