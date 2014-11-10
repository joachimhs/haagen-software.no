Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "render", "header", options))));
  data.buffer.push("\n\n<div id=\"mainArea\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<footer>\n    <div class=\"wrap\">\n        <div class=\"row\">\n            <div class=\"mediumTopPadding\"></div>\n\n            <div class=\"col-md-3 col-md-offset-1\">\n                <h1>Consuting</h1>\n                <hr align=\"center\" width=\"20px\">\n                <p>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("footerLink")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Consulting", "index", options) : helperMissing.call(depth0, "link-to", "Consulting", "index", options))));
  data.buffer.push("</p>\n            </div>\n            <div class=\"col-md-3 col-md-offset-1\">\n                <h1>Products</h1>\n                <hr align=\"center\" width=\"20px\">\n                <p>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("footerLink")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Our Products", "index", options) : helperMissing.call(depth0, "link-to", "Our Products", "index", options))));
  data.buffer.push("</p>\n            </div>\n            <div class=\"col-md-3 col-md-offset-1\">\n                <h1>Contact Us</h1>\n                <hr align=\"center\" width=\"20px\">\n                <p><a class=\"footerLink\" href=\"mailto:joachim@haagen-software.no\">joachim (@) haagen-software.no</a></p>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"mediumTopPadding\"></div>\n\n    <div class=\"almostBlack text-center\">\n        <div class=\"mediumTopPadding\"></div>\n\n        <p class=\"copyrightText\">Copyright 2014 Haagen Software AS</p>\n\n        <div class=\"mediumTopPadding\"></div>\n    </div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"/uploads/logo_white_medium.png\" id=\"logoImage\" />");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<img src=\"/uploads/logo_white_small.png\" id=\"logoImageSmall\" class=\"hidden\" />");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("headerLink")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "page.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<header id=\"header\" data-stellar-background-ratio=\"0.5\" data-stellar-vertical-offset=\"-350\">\n    <div class=\"wrap\">\n        <div id=\"headerLinkDiv\">\n            <div class=\"row\">\n                <div id=\"logoCols\" class=\"col-xs-12 col-sm-12 col-md-12\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div id=\"linkCols\" class=\"col-xs-12 col-sm-12 col-md-12\">\n                    <div id=\"headerLinkContainer\" class=\"pull-right\">\n                        Blog\n                        ");
  stack1 = helpers.each.call(depth0, "page", "in", "controller.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"topHeaderMargin\" />\n\n    <div class=\"wrap leadingHeader\">\n        <h1>Web and Java development</h1>\n    </div>\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"mediumTopMargin\"></div>\n            <div class=\"header\">Haagen Software</div>\n        </div>\n        <div class=\"col-md-7 col-sm-offset-1\">\n            <div class=\"mediumTopMargin\"></div>\n            <p class=\"frontPageParagraph\">Haagen Software delivers high quality bespoke software within modern web technology and Java. In 2014 Haagen Software arranged the second annual Ember Fest conference, a high-tech conference focussing on the Ember.js framework.</p>\n            ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Our projects &gt;", "index", options) : helperMissing.call(depth0, "link-to", "Our projects &gt;", "index", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n<div class=\"mediumTopMargin\"></div>\n\n\n<div class=\"konsertBoks indexBoxBackground\" data-stellar-background-ratio=\"0.5\">\n    <div class=\"xlargeTopMargin\"></div>\n    <div class=\"wrap\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"seeThruBox\">\n                    <h1>Conticious</h1>\n                    <p>Conticious is a Data Management System (DMS) developed with an Ember Data compliant API, as well as plug-in extendable APIs and backends. Conticious will help you our during development and testing of your Ember.js applications, as well as provide a stable hosting environment for your app!</p>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "&gt; Read more about Conticious!", "index", options) : helperMissing.call(depth0, "link-to", "&gt; Read more about Conticious!", "index", options))));
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"seeThruBox\">\n                    <h1>Montric</h1>\n                    <p>Montric is an application agnostic application performance tool that will keep you updated whenever your important metrics change and breach your carefully specified thresholds. Montric accepts the metrics that you have already gathered via a clean developer-friendly API.</p>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "&gt; Read more about Montric!", "index", options) : helperMissing.call(depth0, "link-to", "&gt; Read more about Montric!", "index", options))));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});