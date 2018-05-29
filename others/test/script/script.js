
function hover(element, id) {
  switch(id) {

    case "facebook":
      element.setAttribute('src', 'asset/facebook2.png');
      break;

    case "twitter":
      element.setAttribute('src', 'asset/twitter2.png');
      break;

    case "linkedin":
      element.setAttribute('src', 'asset/linkedin2.png');
      break;

    case "github":
      element.setAttribute('src', 'asset/github2.png');
      break;
  }
}

function unhover(element, id) {
  switch(id) {

    case "facebook":
      element.setAttribute('src', 'asset/facebook.png');
      break;

    case "twitter":
      element.setAttribute('src', 'asset/twitter.png');
      break;

    case "linkedin":
      element.setAttribute('src', 'asset/linkedin.png');
      break;

    case "github":
      element.setAttribute('src', 'asset/github.png');
      break;
  }
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function openId(id) {
  switch(id) {

    case "facebook":
      openInNewTab("https://www.facebook.com/nish31011995");
      break;

    case "twitter":
      openInNewTab("https://www.twitter.com/NishantSingh56");
      break;

    case "linkedin":
      openInNewTab("https://www.linkedin.com/in/nishant-singh-a42143a8/");
      break;

    case "github":
      openInNewTab("https://www.github.com/nishjan1996");
      break;
  }
}
