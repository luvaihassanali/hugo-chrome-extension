function Hugo(src){
  this.src = src;
}

var myHugosVertical = [
  new Hugo("https://dvdbash.files.wordpress.com/2012/04/lost_jorge_garcia_hurley_hugo_reyes_dvdbash_044.jpg"),
  new Hugo("https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Hurleylost.PNG/220px-Hurleylost.PNG"),
  new Hugo("http://image.wikifoundry.com/wiki/Hurley/image/1x2JNeMv+gLU7F+4VB7AjhA==18659/GW238H300"),
  new Hugo("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Jorge_Garcia_2014_%28cropped%29.jpg/220px-Jorge_Garcia_2014_%28cropped%29.jpg"),
  new Hugo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHt9f6W5B3WFwdEmVEEQj02klhBgR6uELy2guHxr2qQ6HCrpeJ"),
  new Hugo("https://vignette.wikia.nocookie.net/lostpedia/images/4/4e/6x12_EvenLibbyLovesHugo.jpg/revision/latest?cb=20100414095042"),
  new Hugo("https://qph.fs.quoracdn.net/main-qimg-db6b0f0c2d71536425a6029a3bdf3559-c"),
  new Hugo("https://vignette.wikia.nocookie.net/lostpedia/images/7/7a/6x12-Hugo_Reyes_of_Light.jpg/revision/latest?cb=20100907104738"),
  new Hugo("https://images-production.freetls.fastly.net/uploads/photos/file/117195/jorge-garcia-hugo-hurley-reyes.jpg"),
  new Hugo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSnuYlGOdJrR5Qkkglg4ISP4EJ2c3f7q0FONTlhWE9zvp99Sk")
]
var myHugosHorizontal = [
  new Hugo("http://images4.fanpop.com/image/photos/23500000/3x10-Tricia-Tanaka-is-Dead-hugo-hurley-reyes-23501804-400-225.jpg"),
  new Hugo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5p3XZkF_MkqpgVgI-LA8hZ0UezQWhtVmocoBFXaCY2rmanNW6A"),
  new Hugo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX1lnhKsXS03KWW8kNpNi83w7QvMW4spRPf3bJGaBaT0FGv_J"),
  new Hugo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZw2BVg804Va81VNAUhO2UQawKZwlXp2pSf99rrqYVjGmhpMh"),
  new Hugo("http://www.eatmedaily.com/wordpress/wp-content/uploads/2009/07/lost-hurley-hugo-reyes-chicken-shack.jpg"),
  new Hugo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Cr2Qn16TFGCedKPtRMJMQUZUdtblg6h9IKL6gpvs4qvTU45zg"),
  new Hugo("https://home.adelphi.edu/~je16953/hurley.jpg"),
  new Hugo("https://tv-fanatic-res.cloudinary.com/iu/s--294s-Tfa--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371089251/hugo-reyes.png"),
  new Hugo("http://i.dailymail.co.uk/i/pix/2014/01/29/article-2548229-1ACF28DC00000578-439_634x885.jpg"),
  new Hugo("https://peopledotcom.files.wordpress.com/2016/08/hurley-240-1.jpg?w=240")
]

var myHugosSquare = [
  new Hugo("http://pm1.narvii.com/6239/b1099898da2c5465108009c8c579e15bb1e2d802_00.jpg"),
  new Hugo("https://vignette.wikia.nocookie.net/lostpedia/images/f/f0/Hurleyalbumcover.jpg/revision/latest/scale-to-width-down/200?cb=20100809233942"),
  new Hugo("http://sketchoholic.com/uploads/old_files/11885/JorgeGarcia.jpg"),
  new Hugo("https://images-production.global.ssl.fastly.net/uploads/photos/file/32077/jorge-garcia-hurley-lost.jpg?auto=compress&crop=top&fit=max&q=55&w=750"),
  new Hugo("https://www.prolificliving.com/wp-content/uploads/2009/08/Hurleyseason5.jpg"),
  new Hugo("https://akns-images.eonline.com/eol_images/Entire_Site/20081126/300.garcia.jorge.lc.112608.jpg"),
  new Hugo("https://i.pinimg.com/736x/ba/e8/91/bae8915eccf9976130d10265eb03b23e--lost.jpg"),
  new Hugo("https://vz.cnwimg.com/thumbc-300x300/wp-content/uploads/2014/04/GettyImages-82398083.jpg"),
  new Hugo("http://static.metacritic.com/images/features/media/thumbs/tv-lost-season6ep12-180.jpg"),
  new Hugo("https://tvrecappersanonymous.files.wordpress.com/2010/04/hurley-food.jpg")
]

function getRatio(image) {
  var difference = image.height/image.width;
  if(difference > 1) {
    return "length";
  } else if(difference == 1) {
    return "square";
  } else if(difference < 1) {
    return "width";
  }
  return "width";
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.command === "reverse" ) {
      reverse();
    }
  }
);

function reverse(){
  document.images = array;
  location.reload();
}
var array;
window.onload = function(){
  array = document.images;
  var tracker = 0;
  for(var i=0; i<array.length; i++) {
    var diff = getRatio(document.images[i]);
    switch(diff) {
      case "length":
        var randomV = Math.floor(Math.random() * myHugosVertical.length);
        document.images[i].src = myHugosVertical[randomV].src;
        break;
      case "width":
        var randomH = Math.floor(Math.random() * myHugosHorizontal.length);
        document.images[i].src = myHugosHorizontal[randomH].src;
        break;i
      case "equal":
        var randomS = Math.floor(Math.random() * myHugosSquare.length);
        document.images[i].src = myHugosSquare[randomS].src;
        break;
    }
    tracker++;
    if(tracker == 10) tracker = 0;
  }
}

while(0) {
setTimeout(update, 5000);
}

function update() {
 array = document.images;
  var tracker = 0;
  for(var i=0; i<array.length; i++) {
    var diff = getRatio(document.images[i]);
    switch(diff) {
      case "length":
        var randomV = Math.floor(Math.random() * myHugosVertical.length);
        document.images[i].src = myHugosVertical[randomV].src;
        break;
      case "width":
        var randomH = Math.floor(Math.random() * myHugosHorizontal.length);
        document.images[i].src = myHugosHorizontal[randomH].src;
        break;i
      case "equal":
        var randomS = Math.floor(Math.random() * myHugosSquare.length);
        document.images[i].src = myHugosSquare[randomS].src;
        break;
    }
    tracker++;
    if(tracker == 10) tracker = 0;
	}
}
