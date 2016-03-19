

exports.getPages = function(req, res) {
  // to do: load more tahn pone json page
  var ababool = require("../../config/pages.json");
  return ababool.pages;
};

exports.getConfig = function(req, res) {
  // to do: add all variables to ths config JSON
  var config = require("../../config/ababool.json");
  return config;
};

exports.getCurrent = function(req, res, view, pages, char) {

  var current = '';
  var theurl = req.url.substr(char);
  if(theurl.slice(-1) == '/') theurl = theurl.replace("/", "");

  // search for the defaut page
  for (i in pages)
    if(pages[i]['default']==1) current = i;

  // set the current page as current if it is not blocked
  for (i in pages)
    if(theurl==i && pages[i]['blocked']!=1) current = i;

  // for AJAX request we check the id and that the page is AJAX ( 1 or 2 )
  if(view=='ajax') {
    var page = req.query.id; // remove query id and set param :page
    for (i in pages)
      if(page==i && pages[i]['ajax']>=1) current = i;
  }

  return current;
};


exports.getSchema = function(req, res, view, pages, current) {

  // probably we need to create auto ld-JSON Schemas
  var ldjson = '';
  //find ld-json
  if(pages[current]['ld-json'] && view !='ajax')
    ldjson = require('../../config/ld-json/' + pages[current]['ld-json']);

  return ldjson;
}


// module to get the current page propierties
exports.getParams = function(req, res, view, pages, current, config, ldjson, char) {

  var params = [];

  var lang = config.general.lang;
  if(pages[current].lang) lang = pages[current].lang;

  var title = config.general.sitename;
  var description = config.general.description;
  var author = config.general.author;
  var amp = 0;
  var rss = "";
  var ogimage = config.socialmedia.ogimage;
  var ogtype = config.socialmedia.ogtype;
  var twittercreator = config.socialmedia.twittercreator;

  if(pages[current].title) title = pages[current].title;
  if(pages[current].description) description = pages[current].description;
  if(pages[current].author) description = pages[current].author;
  if(pages[current].ogimage) ogimage = pages[current].ogimage;
  if(pages[current].ogtype) ogimage = pages[current].ogtype;
  if(pages[current].twittercreator) twittercreator = pages[current].twittercreator;
  if(pages[current].amp) amp = 1;
  if(pages[current].rss) ogimage = pages[current].rss;

  params.push({
      "id" : pages[current].id,
      "current" : current,
      "url" : req.url.substr(char),
      "token": req.session.token,
      "title" : title,
      "description"  : description,
      "ldjson" : ldjson,
      "lang" : lang,
      "view" : view,
      "rss" : rss,
      "author" : author,
      "amp" : amp,
      "tag" : "",
      "ogimage" : ogimage,
      "twittercreator" : twittercreator
  });

  //params = JSON.parse(params);


  return params;
}

// module to get the current tag page propierties
exports.getTagParams = function(req, res, view, pages, config, ldjson, char) {

  var params = [];

  var lang = config.general.lang;
  var author = config.general.author;
  var ogimage = config.socialmedia.ogimage;
  var ogtype = config.socialmedia.ogtype;
  var twittercreator = config.socialmedia.twittercreator;
  var title = req.params.tag;
  var description = config.general.description;

  /*
  if(config.tags[req.params.tag].title)
    title = config.tags[req.params.tag].title;

  if(config.tags[req.params.tag].description)
    description = config.tags[req.params.tag].description;
*/

  params.push({
      "id" : "tag",
      "current" : "tag",
      "url" : req.url.substr(char),
      "token": req.session.token,
      "title" : title,
      "description"  : description,
      "ldjson" : ldjson,
      "lang" : lang,
      "view" : view,
      "author" : author,
      "amp" : 1,
      "rss" : req.params.tag,
      "tag" : req.params.tag,
      "ogimage" : ogimage,
      "twittercreator" : twittercreator
  });

  return params;
}


exports.getPosts = function(pages, tag) {

  var posts = [];

  for( page in pages ) {
    var thepage = pages[page];
    if(thepage.tags) {
      var tags = thepage.tags;
      for( thetag in  tags) {

          //console.log("the tag:" + tags[thetag] + "=" + tag);

          if(tags[thetag]==tag) {
            posts.push({
                "id" : thepage.id,
                "slug" :  thepage.id,
                "title" : thepage.title,
                "teaser"  : thepage.description,
                "publishedAt" : thepage.date
            });
          }
      }
    }
  }

  function comp(a, b) {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  }

  console.log("posts: " + posts);

  var posts = posts.sort(comp);



  return posts;
}
