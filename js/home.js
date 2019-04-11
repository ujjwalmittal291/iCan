//Js for home page animation
var cl=0;
function clicked() {
  cl++;
  if(cl%2!=0)
  {
    fwd();
  }
  else
  {
    rev();
  }
}
  //Function invoked on hovering over iCan logo
function fwd()
{
  document.getElementById('container').style.display = "block";
  aboutfwd();
}

// Function to expand Menu
//About
function aboutfwd()
{
  var elem = document.getElementById('about');
  var postop = 45;
  var   posleft = 45;
  var   i = setInterval(frame1, 5);
  function frame1()
  {
    if (postop >= 20 && posleft >= 20)
    {
      --postop;
      --posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  contactfwd();
}

//Contact us
function contactfwd()
{
  var   elem = document.getElementById('Contact');
  var   postop = 45;
  var   posleft = 45;
  var   i = setInterval(frame2, 5);
  function frame2()
  {
    if (postop <= 70 && posleft <= 70)
    {
      ++postop;
      ++posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  studentfwd();
}

//students
function studentfwd()
{
  var   elem = document.getElementById('Student');
  var     postop = 45;
  var     posleft = 45;
  var     i = setInterval(frame3, 5);
  function frame3()
  {
    if (postop <= 70 && posleft >= 20)
    {
      ++postop;
      --posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  parentfwd();
}

//Parents
function parentfwd()
{
  var   elem = document.getElementById('Parents');
  var   postop = 45;
  var     posleft = 45;
  var     i = setInterval(frame4, 5);
  function frame4()
  {
    if (postop >= 20 && posleft <= 70)
    {
      --postop;
      ++posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
}

// Function to collapse Menu
// function rev() {
//   // var elem = document.getElementById('');
//   // var pos = 45;
//   // var i = setInterval(frame, 5);
//   // function frame() {
//   //   if (pos == 0) {
//   //     clearInterval(i);
//   //   } else {
//   //     --pos;
//   //     elem.style.top = pos + "%";
//   //     elem.style.left = pos + "%";
//   //   }
//   // }
//   for (var z = 0; z < 4; z++) {
//     var elem = document.getElementById(id[z]);
//     var postop = p[z];
//     var posleft = q[z];
//     var i = setInterval(frame, 2);
//     function frame() {
//       if (postop == 0 && posleft==0) {
//         clearInterval(i);
//       } else {
//         --postop;
//         --posleft;
//         elem.style.top = postop + "%";
//         elem.style.left = posleft + "%";
//       }
//     }
//   }
// }

function rev()
{
  aboutrev();
  // var idd= setTimeout(no,10);

  //
}

function aboutrev()
{
  var elem = document.getElementById('about');
  var postop = 20;
  var posleft = 20;
  var i = setInterval(frame1, 5);
  function frame1()
  {
    if (postop <= 45 && posleft <= 45)
    {
      ++postop;
      ++posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  contactrev();
}

function contactrev()
{
  var   elem = document.getElementById('Contact');
  var   postop = 70;
  var   posleft = 70;
  var   i = setInterval(frame2, 5);
  function frame2()
  {
    if (postop >= 45 && posleft >= 45)
    {
      --postop;
      --posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  studentrev();
}

//students
function studentrev()
{
  var   elem = document.getElementById('Student');
  var     postop = 70;
  var     posleft = 20;
  var     i = setInterval(frame3, 5);
  function frame3()
  {
    if (postop >= 45 && posleft <= 45)
    {
      --postop;
      ++posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  parentrev();
}

//Parents
function parentrev()
{
  var   elem = document.getElementById('Parents');
  var   postop = 20;
  var     posleft = 70;
  var     i = setInterval(frame4, 5);
  function frame4()
  {
    if (postop <= 45 && posleft >= 45)
    {
      ++postop;
      --posleft;
      elem.style.top = postop + "%";
      elem.style.left = posleft + "%";
    }
    else
    {
      clearInterval(i);
    }
  }
  no();
}
function no() {
  document.getElementById('container').style.display = "none";
}
