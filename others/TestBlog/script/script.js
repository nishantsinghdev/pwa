// Fresh State


$("#displ").hide();
$("#main").hide();
$("#newvis").hide();
$("#text1").hide();
$("#info").hide();
$("#rume").hide();

$("#back").hide();
$("#foot").fadeIn(400);

visit();

var e420="<!DOCTYPE html><html><head><title>!AP96LT!</title><style type='text/css'>body{text-align: center;}</style></head><body style='background-color: #171717;color: #ffffff;'><h2></h2> <img src='../images/a.jpg' style='width: 130px;border-radius: 50%;margin-top: 100px;'> <p>Aakash Pandey <br> &copy; 2017 all rights reserved</p></body></html>";


function atrz(iframe) {
  $(iframe).height($(iframe).contents().find('html').height());
}

var resetDat = document.getElementById('posts').innerHTML;

function reset() {
  $("#main").hide();
  $("#disp").css("height", '300');
  $("#logo").show();
  $("#static").show();
  $("#main").fadeIn("fast");
  $("#about").show();
  $("#pheadcon").show();

 window.scrollTo(0, 0);

  document.getElementById('posts').innerHTML=resetDat;
  document.getElementById("posts").classList.remove("post");

  $("#posts").fadeIn();

  $("#displ").hide();
  $("#back").hide();


  $("#text1").hide();
  $("#info").hide();
  $("#rume").hide();


}

function read(n) {
  $('#disp').attr('src', "");

  post="post"+n

  hdr=document.getElementById(post).innerHTML;
  
  document.getElementById("posts").classList.add("post");

  document.getElementById('posts').innerHTML=hdr;

  loc = "articles/art" + n + ".html"
  $('#disp').attr('src', loc);


  $("#logo").hide();
  $("#static").hide();
  $("#pheadcon").hide();
  $("#displ").fadeIn(1200);
  window.scrollTo(0, 0);

}

function oldvis() {
  $("#main").removeClass('disab');
  $("#foot").removeClass('disab');
  localStorage.visit = 1;
  $("#newvis").fadeOut(400);
}

function contact() {
  //$("#logo").fadeIn();
  //$("#about").hide("slow");
  $("#pheadcon").hide();
  $("#posts").hide();
  $("#rume").hide();
  $("#displ").hide();
  $("#info").slideDown('slow');
}

function resume() {
  //$("#logo").fadeIn();
  //$("#about").hide("slow");
    $("#pheadcon").hide();
    $("#posts").hide();
    $("#info").hide();
    $("#displ").hide();
    $("#rume").slideDown('slow');
}

function action(act) {
  
  if (act == "git") {
    location.href = "https://github.com/aakashpandey";
  }
    
  else if (act == "rume") {
    resume();
  }

  else if (act == "contc") {
    contact();
  }

  else if (act == "ok") {
    oldvis();
  }

  else if (act == "skynotes") {
    window.top.location.href = "http://aakashpandey.96.lt/notesapp";
  }
}

function visit() {
  n = localStorage.visit;
  if (n == 1) {
    $("#newvis").hide();
  } else {
    $("#main").addClass('disab');
    $("#foot").addClass('disab');
    $("#newvis").css("display", "show");
    $("#newvis").slideDown(300);
  }
}

function pheadpos() {
  var h = $(document).height();
  
  if ($(window).width() < 960) {
   n="55px";
   var num = h/1.5-0.3;
  } 
  else {
    n="120px";
    var num = h/1.75;
  } 
  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('#pheadcon').addClass('fixed');
          $("#wall").css("margin-bottom", n);

      } else {
          $('#pheadcon').removeClass('fixed');
          $("#wall").css("margin-bottom", "0");

      }
  });
}


pheadpos();
$('body').on('contextmenu',function(){return false;});
$('body').keydown(function(event) {
  var x = event.which;
  
  if ( (x==123) || (event.ctrlKey && x==16) || (x==73 && event.ctrlKey)) {
    document.write(e420);
    return false;
  }
  else if (x==85 && event.ctrlKey) {
    return false;
  }
});



var element = new Image();
element.__defineGetter__('id', function() {
  document.write();
  document.write(e420);
  element = new Image();
});

setInterval(function() {
   console.log(element);
   console.clear();
}, 1000)


/*$('body').mouseout(function(){
   document.write("where?");
});
*/


$("#main").fadeIn(800);



 