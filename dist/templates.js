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
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "Consulting", "pages.page", "consulting", options) : helperMissing.call(depth0, "link-to", "Consulting", "pages.page", "consulting", options))));
  data.buffer.push("</p>\n            </div>\n            <div class=\"col-md-3 col-md-offset-1\">\n                <h1>Products</h1>\n                <hr align=\"center\" width=\"20px\">\n                <p>");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("footerLink")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Our Products", "products", options) : helperMissing.call(depth0, "link-to", "Our Products", "products", options))));
  data.buffer.push("</p>\n            </div>\n            <div class=\"col-md-3 col-md-offset-1\">\n                <h1>Contact Us</h1>\n                <hr align=\"center\" width=\"20px\">\n                <p><a class=\"footerLink\" href=\"mailto:joachim@haagen-software.no\">joachim (@) haagen-software.no</a></p>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"mediumTopPadding\"></div>\n\n    <div class=\"almostBlack text-center\">\n        <div class=\"mediumTopPadding\"></div>\n\n        <p class=\"copyrightText\">Copyright 2014 Haagen Software AS</p>\n\n        <div class=\"mediumTopPadding\"></div>\n    </div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["bransjeregister"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"smallTopPadding\"></div>\n\n<div class=\"wrap\">\n    <h1>Projects</h1>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <form role=\"form\">\n                <h4>Fritekstsøk</h4>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"fritekst\" placeholder=\"Tekstsøk\">\n                </div>\n                <h4>Aktører</h4>\n                <div class=\"form-group\">\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Arkitekter <span class=\"badge pull-right\">42</span>\n                    </label>\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Installatør <span class=\"badge pull-right\">12</span>\n                    </label>\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Leverandør <span class=\"badge pull-right\">9</span>\n                    </label>\n                </div>\n                <h4>Energitype</h4>\n                <div class=\"form-group\">\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Solstrøm <span class=\"badge pull-right\">34</span>\n                    </label>\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Solvarme<span class=\"badge pull-right\">19</span>\n                    </label>\n                </div>\n                <h4>Område</h4>\n                <div class=\"form-group\">\n                    <select multiple class=\"form-control\" style=\"height: 200px;\">\n                        <option>Oslo</option>\n                        <option>Akershus</option>\n                        <option>Vestfold</option>\n                        <option>Østfold</option>\n                        <option>Telemark</option>\n                        <option>Hedmark</option>\n                        <option>Oppland</option>\n                        <option>Buskerud</option>\n                        <option>Aust-Agder</option>\n                        <option>Vest-Agder</option>\n                        <option>Rogaland</option>\n                        <option>Hordaland</option>\n                        <option>Sogn og Fjordane</option>\n                        <option>Møre og Romsdal</option>\n                        <option>Sør-Trøndelag</option>\n                        <option>Nord-Trøndelag</option>\n                        <option>Troms</option>\n                        <option>Nordland</option>\n                        <option>Finnmark</option>\n                    </select>\n                </div>\n                <h4>Størrelse</h4>\n                <div class=\"form-group\">\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Lite/Hytte <span class=\"badge pull-right\">5</span>\n                    </label>\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Mellom/Hus <span class=\"badge pull-right\">12</span>\n                    </label>\n                    <label style=\"width: 100%;\">\n                        <input type=\"checkbox\"> Stort/Næring <span class=\"badge pull-right\">22</span>\n                    </label>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img src=\"/uploads/enova_logo.png\" />\n                </div>\n                <div class=\"col-md-8\">\n                    <p>Enova skal drive fram en miljøvennlig omlegging av energibruk og energiproduksjon, samt bidra til utvikling av energi- og klimateknologi. Dette gjøres hovedsaklig gjennom økonomisk støtte og rådgivning.</p>\n                    <span class=\"label label-primary\">Mer Info</span>\n                    <span class=\"label label-info\">Purehelp.no</span>\n                    <span class=\"label label-info\">Kart</span>\n                </div>\n            </div>\n            <div class=\"smallTopPadding\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img src=\"/uploads/catch_logo.jpg\" />\n                </div>\n                <div class=\"col-md-8\">\n                    <p>Catch Solar Energy AS har ny og patentert teknologi for flate solfangere og solvarme-systemer til å varme opp vann, varme opp bygninger eller kjøle bygninger med solenergi samtidig som du sparer penger og resurser</p>\n                    <span class=\"label label-primary\">Mer Info</span>\n                    <span class=\"label label-info\">Purehelp.no</span>\n                    <span class=\"label label-info\">Kart</span>\n                </div>\n            </div>\n            <div class=\"smallTopPadding\"></div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    ... Flere resultater nedover...\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"smallTopPadding\"></div>");
  
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
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "page.route", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("headerLink")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "page.route", options) : helperMissing.call(depth0, "link-to", "page.route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }
function program7(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "page.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("headerLink")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "pages.page", "page", options) : helperMissing.call(depth0, "link-to", "pages.page", "page", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            ");
  return buffer;
  }

  data.buffer.push("<header id=\"header\" data-stellar-background-ratio=\"0.5\" data-stellar-vertical-offset=\"-350\">\n    <div class=\"wrap\">\n        <div id=\"headerLinkDiv\">\n            <div class=\"row\">\n                <div id=\"logoCols\" class=\"col-xs-12 col-sm-12 col-md-12\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div id=\"linkCols\" class=\"col-xs-12 col-sm-12 col-md-12\">\n                    <div id=\"headerLinkContainer\" class=\"pull-right\">\n                        ");
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
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Our projects &gt;", "projects", options) : helperMissing.call(depth0, "link-to", "Our projects &gt;", "projects", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n<div class=\"mediumTopMargin\"></div>\n\n\n<div class=\"konsertBoks indexBoxBackground\" data-stellar-background-ratio=\"0.5\">\n    <div class=\"xlargeTopMargin\"></div>\n    <div class=\"wrap\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"seeThruBox\">\n                    <h1>Conticious</h1>\n                    <p>Conticious is a Data Management System (DMS) developed with an Ember Data compliant API, as well as plug-in extendable APIs and backends. Conticious will help you our during development and testing of your Ember.js applications, as well as provide a stable hosting environment for your app!</p>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "&gt; Read more about Conticious!", "products.product", "conticious", options) : helperMissing.call(depth0, "link-to", "&gt; Read more about Conticious!", "products.product", "conticious", options))));
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"seeThruBox\">\n                    <h1>Montric</h1>\n                    <p>Montric is an application agnostic application performance tool that will keep you updated whenever your important metrics change and breach your carefully specified thresholds. Montric accepts the metrics that you have already gathered via a clean developer-friendly API.</p>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "&gt; Read more about Montric!", "products.product", "montric", options) : helperMissing.call(depth0, "link-to", "&gt; Read more about Montric!", "products.product", "montric", options))));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["pages/page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["products/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <h2>");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-4\">\n            ");
  stack1 = helpers['if'].call(depth0, "product.cover", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n        <div class=\"col-md-8\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "product.intro", options) : helperMissing.call(depth0, "markdown", "product.intro", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "product.name", "products.product", "product", options) : helperMissing.call(depth0, "link-to", "product.name", "products.product", "product", options))));
  data.buffer.push("\n        </div>\n    </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("product.cover")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"mediumTopMargin\"></div>\n            <div class=\"header\">Products</div>\n        </div>\n        <div class=\"col-md-7 col-sm-offset-1\">\n            <div class=\"mediumTopMargin\"></div>\n            <p class=\"frontPageParagraph\">Haagen Software delivers Montric - a frontend and backend agnosting Application Performance Monitoring (APM) solution and Conticious - a Data Management System (DMS) that is fully compatible with the JSON API specification, as well as Ember Data. Both products are fully open source, released with a permissive Open Source License.</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"mediumTopMargin\"></div>\n\n<div class=\"wrap pageContent\">\n");
  stack1 = helpers.each.call(depth0, "product", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div class=\"mediumTopMargin\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["products/product"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("largeImg")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n            <p class=\"ingress\">");
  stack1 = helpers._triageMustache.call(depth0, "intro", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n            ");
  stack1 = helpers['if'].call(depth0, "largeImg", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Back to products", "products", options) : helperMissing.call(depth0, "link-to", "Back to products", "products", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>\n\n<div class=\"mediumTopMargin\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["projects"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["projects/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <h2>");
  stack1 = helpers._triageMustache.call(depth0, "project.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-4\">\n                ");
  stack1 = helpers['if'].call(depth0, "project.cover", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"col-md-8\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "project.intro", options) : helperMissing.call(depth0, "markdown", "project.intro", options))));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "project.name", "projects.project", "project", options) : helperMissing.call(depth0, "link-to", "project.name", "projects.project", "project", options))));
  data.buffer.push("\n            </div>\n        </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("project.cover")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"mediumTopMargin\"></div>\n            <div class=\"header\">Haagen Software</div>\n        </div>\n        <div class=\"col-md-7 col-sm-offset-1\">\n            <div class=\"mediumTopMargin\"></div>\n            <p class=\"frontPageParagraph\">Haagen Software delivers high quality bespoke software within modern web technology and Java. In 2014 Haagen Software arranged the second annual Ember Fest conference, a high-tech conference focussing on the Ember.js framework.</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"mediumTopMargin\"></div>\n\n<div class=\"wrap pageContent\">\n    ");
  stack1 = helpers.each.call(depth0, "project", "in", "arrangedContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div class=\"mediumTopMargin\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["projects/project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n            <p class=\"ingress\">");
  stack1 = helpers._triageMustache.call(depth0, "intro", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Back to projects", "projects", options) : helperMissing.call(depth0, "link-to", "Back to projects", "projects", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["trainings/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"col-md-12\">\n                <h2>");
  stack1 = helpers._triageMustache.call(depth0, "training.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "training.intro", options) : helperMissing.call(depth0, "markdown", "training.intro", options))));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "training.name", "trainings.training", "training", options) : helperMissing.call(depth0, "link-to", "training.name", "trainings.training", "training", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        ");
  stack1 = helpers.each.call(depth0, "training", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["trainings/training"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"wrap pageContent\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n            <p class=\"ingress\">");
  stack1 = helpers._triageMustache.call(depth0, "intro", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.markdown || (depth0 && depth0.markdown),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "content.content", options) : helperMissing.call(depth0, "markdown", "content.content", options))));
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Back to Training Overview", "trainings", options) : helperMissing.call(depth0, "link-to", "Back to Training Overview", "trainings", options))));
  data.buffer.push("\n        </div>\n    </div>\n</div>");
  return buffer;
  
});