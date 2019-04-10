//Js for home page animation



  var cl;
  // var id=['about','Student','Parents','Contact'];
  // var p=[20,70,20,70];
  // var q=[20,20,70,70];
  function clickcount() {
    cl=0;
  }

  //Function invoked on clicking iCan logo
  function ican() {
    cl++;
    if (cl%2!=0) {//for odd number of clicks
      aboutfwd();
      document.getElementById('container').style.display = "block";
    }
    else
    {
      rev();
      document.getElementById('container').style.display = "none";
    }
  }

  // Function to expand Menu
    //About
    function aboutfwd() {
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
    function parentfwd() {
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

    }


  // Function to collapse Menu
  function rev() {
    // var elem = document.getElementById('');
    // var pos = 45;
    // var i = setInterval(frame, 5);
    // function frame() {
    //   if (pos == 0) {
    //     clearInterval(i);
    //   } else {
    //     --pos;
    //     elem.style.top = pos + "%";
    //     elem.style.left = pos + "%";
    //   }
    // }
    for (var z = 0; z < 4; z++) {
      var elem = document.getElementById(id[z]);
      var postop = p[z];
      var posleft = q[z];
      var i = setInterval(frame, 2);
      function frame() {
        if (postop == 0 && posleft==0) {
          clearInterval(i);
        } else {
          --postop;
          --posleft;
          elem.style.top = postop + "%";
          elem.style.left = posleft + "%";
        }
      }
    }
  }
