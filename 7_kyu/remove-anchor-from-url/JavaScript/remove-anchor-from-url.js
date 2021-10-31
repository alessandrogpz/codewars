const removeAfterAnchor = (url) => {
  /* Return an URL without the address after a '#' character. */

  return url.includes("#") ? url.slice(0, url.indexOf("#")) : url;
};

let url = "www.codewars.com?about";
console.log(removeAfterAnchor(url));
