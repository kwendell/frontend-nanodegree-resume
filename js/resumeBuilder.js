var name = "Kevin W. Duell";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Sales Engineer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

HTMLcontactGeneric.replace("%contact%", "mobile");

var mobile = HTMLmobile.replace("%data%","408-555-1212");

$("#header").append(mobile);

HTMLcontactGeneric.replace("%contact%", "email");

var email = HTMLemail.replace("%data%","kevin@supersaleseng.com");



$("#header").append(email);

var gitHub = HTMLgithub.replace("%data%","kwendell");

$("#header").append(gitHub);

//var location = HTMLlocation.replace("%data%","San Jose");



