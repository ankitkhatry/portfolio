// creating functions
// simple js functions

// declairing the selectors

let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelectorAll(selector);

// set variables

var body = $('body');
var header = $('header');
var togmenu = $('.bars');
var gototop = $('.gototop');
var year = $('#year');
var date = new Date().getFullYear();
var sendMail = $('.sendmail');
var logo = $$('.siteload');
var a = $('.ms-wrap');
var b = $('.m-button');
b.onclick = () => {
    body.classList.toggle('toggle-ms')
}

//reload onclick logo
logo.forEach((x) => {
x.onclick = () => {
    window.location.reload();
}
});


//print year in footer

yearonly = () => {
	year.innerHTML = date;
}

//menu click

togmenu.onclick = () =>{
	body.classList.toggle('toggle');
	body.classList.toggle('togbars')
}

// sticky
window.onscroll = () => {
 var stickyheader = () => {
    var sticky = header.offsetTop;
	if(window.pageYOffset > sticky){
		header.classList.add('sticky');
        gototop.classList.add('show');
        $('.share').classList.add('show');
	}
    else if(window.pageYOffset >= 200){
    }
	else{
		header.classList.remove('sticky');
        gototop.classList.remove('show');
        $('.share').classList.remove('show');
	}
}
stickyheader()};

window.onload = () => {
    var setAttr = () => {
        var links = $$('.post .post-title h2 a');
        for(i = 0; i < links.length; i++){
            var a = links[i];
            a.setAttribute("target","_blank")
        }
    };

    var appendDiv = () => {
        var container = $$('.post .post-img');
        container.forEach((a) => {
            var content = a.innerHTML;
            var item = '<div class="post-overlay ts"><div class="overlay-icon"><i class="fas fa-image"></div></div>';
            a.innerHTML = content + item;
        })
    }
    appendDiv();
    setAttr();
}

 wrapCode = () => {
    var code = $$('code');
    code.forEach((x) => {
      var parent = x.parentNode;
      var content = parent.outerHTML;
      var htmlToInsert = '<div class="code-dot"><span></span><span></span><span></span></div>';
      parent.outerHTML = '<div class="code-box">'+ htmlToInsert+'<div class="code-code">'+content+'</div></div>';

  });

}

 changecodeblock = () => {
	var code = $$('.code-content code');
	code.forEach((c) => {
		c.classList.add('code');
		c.innerHTML = c.innerHTML.replace(/</g,"&lt;");
	});
}
changecodeblock();
wrapCode();
yearonly();

EnableButton = () => {
$("#textareamail").addEventListener("keyup", (a) => {
    var msg = a.value;
    if (msg != "" ) {
        sendMail.removeAttribute("disabled");
        sendMail.classList.add('work')
    } else {
        sendMail.setAttribute("disabled", "true");
        sendMail.classList.remove('work')
    }
});
}
EnableButton();
//send email

sendMail.onclick = (x) => {
    x.preventDefault();
    var email = "info.ankitkhatry@gmail.com";
    var name = $('#nameinput').value;
    var subject = $('#emailinput').value;
    var msg = $('#textareamail').value;
    var notiBox = $('.tv-noti');
    var errortext = "Sorry your input data is Wrong / Empty Or Invalid. Check it once and try again";
    if (name.length == ""){
        body.classList.toggle("closenoti");
        $('.append-text').innerHTML = "Enter your name";
    }

    else if (subject.length == ""){
            body.classList.toggle("closenoti");
            $('.append-text').innerHTML = " Input your subject";
        
    }
    else if (msg.length == ""){
            body.classList.toggle("closenoti");
            $('.append-text').innerHTML = " Input your massages";
        
    }
    else if (subject.length == "" || msg.length == "" || name.length == ""){
        body.classList.toggle('closenoti');
        $('.append-text').innerHTML = errortext;
    }
    else{
        window.location = "mailto:" + email + "?subject=" + subject + "&body=" + msg;
    }
}

$('.close-tv-noti').onclick = () =>{
    body.classList.toggle('closenoti')
}

//Working share menu click on the icons

function ShareLinks(){
    var titleLink = window.location.href;
    var fb = $('.share .fb');
    var tw = $('.share .tw');
    var ln = $('.share .ln');
    var pn = $('.share .pn');
    var wa = $('.share .wa');
    fb.onclick = () => {
        var url ="https://facebook.com/sharer.php?u=" + titleLink;
        window.open(url,"_blank","width=300,height=300");
    }
    tw.onclick = () => {
        var url="https://twitter.com/share?url=" + titleLink;
        window.open(url,"_blank","width=300,height=300");   
    }
        ln.onclick = () => {
        var url="https://www.linkedin.com/shareArticle?mini=true&url=" + titleLink;
        window.open(url,"_blank","width=300,height=300");   
    }
        pn.onclick = () => {
        var url="https://www.pinterest.com/pin/create/button/?url=" + titleLink;
        window.open(url,"_blank","width=300,height=300");   
    }
    wa.onclick = () => {
        var url = "https://api.whatsapp.com/send?text=" + titleLink;
        window.open(url,"_blank","width=300,height=300");
    }
}
ShareLinks();


// Type writter plugins
writter = () => {
  const words = ["Web Developer.", "Web Designer.", "Programmer."];
  let i = 0;
  let timer;

  typingEffect = () => {
    let word = words[i].split("");
    var loopTyping = () => {
      if (word.length > 0) {
        $("#item").innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      }
      timer = setTimeout(loopTyping, 100); // Decreased timeout for faster typing
    };
    loopTyping();
  };

  deletingEffect = () => {
    let word = words[i].split("");
    var loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        $("#item").innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }
      timer = setTimeout(loopDeleting, 50); // Decreased timeout for faster deleting
    };
    loopDeleting();
  };

  typingEffect();
};

writter();

// Syntax highlighter by w3schools.com
// This is Syntax hightlighter by https://www.w3schools.com
// Author : w3schools.com

w3CodeColor(document.getElementById("myDiv"));

function w3CodeColor(elmnt, mode) {
  var lang = (mode || "html");
  var elmntObj = (document.getElementById(elmnt) || elmnt);
  var elmntTxt = elmntObj.innerHTML;
  var tagcolor = "#9dadff";
  var tagnamecolor = "#fc9";
  var attributecolor = "#9dadff";
  var attributevaluecolor = "#e09142";
  var commentcolor = "rgba(255,255,255,0.42)";
  var cssselectorcolor = "#fc9";
  var csspropertycolor = "#e09142";
  var csspropertyvaluecolor = "#9dadff";
  var cssdelimitercolor = "#9dadff";
  var cssimportantcolor = "red";  
  var jscolor = "#fc9";
  var jskeywordcolor = "#9dadff";
  var jsstringcolor = "#e09142";
  var jsnumbercolor = "#e09142";
  var jspropertycolor = "#9dadff";
  elmntObj.style.fontFamily = "monospace";
  if (!lang) {lang = "html"; }
  if (lang == "html") {elmntTxt = htmlMode(elmntTxt);}
  if (lang == "css") {elmntTxt = cssMode(elmntTxt);}
  if (lang == "js") {elmntTxt = jsMode(elmntTxt);}
  elmntObj.innerHTML = elmntTxt;

  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));      
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }
  function htmlMode(txt) {
    var rest = txt, done = "", php, comment, angular, startpos, endpos, note, i;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
    rest = comment.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {note = "css";}
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {note = "javascript";}        
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
    }
    return rest;
  }
  function tagMode(txt) {
    var rest = txt, done = "", startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {    
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span style=color:" + tagcolor + ">&gt;</span>";
    }
    return "<span style=color:" + tagnamecolor + ">" + result + "</span>";
  }
  function attributeMode(txt) {
    var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);      
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span style=color:" + attributecolor + ">" + done + rest + "</span>";
  }
  function attributeValueMode(txt) {
    return "<span style=color:" + attributevaluecolor + ">" + txt + "</span>";
  }
  function commentMode(txt) {
    return "<span style=color:" + commentcolor + ">" + txt + "</span>";
  }
  function cssMode(txt) {
    var rest = txt, done = "", s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {cc++; c++}
        if (midz.substr(i, 1) == "}") {cc--;}
        if (cc == 0) {break;}
      }
      if (cc != 0) {c = 0;}
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span style=color:" + cssdelimitercolor + ">{</span>");
    rest = rest.replace(/}/g, "<span style=color:" + cssdelimitercolor + ">}</span>");
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span style=color:" + cssselectorcolor + ">" + rest + "</span>";
  }
  function cssPropertyMode(txt) {
    var rest = txt, done = "", s, e, n, loop;
    if (rest.indexOf("{") > -1 ) { return cssMode(rest); }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span style=color:" + csspropertycolor + ">" + done + rest + "</span>";
  }
  function cssPropertyValueMode(txt) {
    var rest = txt, done = "", s;
    rest = "<span style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;    
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span style=color:" + cssdelimitercolor + ">;</span>";
    }
    return "<span style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
  }
  function cssImportantMode(txt) {
    return "<span style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
  }
  function jsMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span style=color:" + jscolor + ">" + rest + "</span>";
  }
  function jsStringMode(txt) {
    return "<span style=color:" + jsstringcolor + ">" + txt + "</span>";
  }
  function jsKeywordMode(txt) {
    return "<span style=color:" + jskeywordcolor + ">" + txt + "</span>";
  }
  function jsNumberMode(txt) {
    return "<span style=color:" + jsnumbercolor + ">" + txt + "</span>";
  }
  function jsPropertyMode(txt) {
    return "<span style=color:" + jspropertycolor + ">" + txt + "</span>";
  }
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      } 
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {e = txt.length;}
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }  
    return [-1, -1, func];
  }  
}

