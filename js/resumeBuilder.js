var name = "Kevin W. Duell";
var role = "Sales Engineer";
var contact_info = {
	"mobile":"408-555-1212",
	"email":"kevin@supersaleseng.com"
};
var skills = ["Cage Fighting","Musicianship","Encourager/Mentor"];
var bio = {
	"name":name,
	"role":role,
	"contact_info": contact_info,
	"welcome_msg":"Wherever you go,...there you are.",
	"profile_picture_url":"images/kevin.jpg",
	"skills":skills
}




var formattedName = HTMLheaderName.replace("%data%",bio.name);


var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length>0) {
	var headerDiv = $("div[id='header'");
	$("#header").append(HTMLskillsStart);
	for (var i=0;i<bio.skills.length;i++)  {

		var tempHTMLskills = HTMLskills.replace("%data%",bio.skills[i]);
      
		$("#skills").append(tempHTMLskills);
	}

} else {

}

HTMLcontactGeneric.replace("%contact%", bio.contact_info.mobile);

var mobile = HTMLmobile.replace("%data%",bio.contact_info.mobile);

$("#topContacts").append(mobile);

HTMLcontactGeneric.replace("%contact%", bio.contact_info.email);


var email = HTMLemail.replace("%data%",bio.contact_info.email);



$("#topContacts").append(email);

var gitHub = HTMLgithub.replace("%data%","kwendell");

$("#topContacts").append(gitHub);

//var location = HTMLlocation.replace("%data%","San Jose");
var pic = HTMLbioPic.replace("%data%","images/kevin.jpg");

$("#header").append(pic);	

var work =
	[{
    "employer":"Altierre, Inc",
	"title":"Sales Engineer",
	"dates":"5/23/05-present",
	"location":"San Jose",
    "description":"Digital Signage"
    },
    {
    "employer":"Lightbridge, Inc",
    "title":"Principal Engineer",
    "dates":"6/2000-4/2005",
    "location":"Fremont",
    "description":"Mobile Platform"
    },
    {
    "employer":"Savi Technology",
    "title":"Business Process Analyst",
    "dates":"11/98-5/2000",
    "location":"Sunnyvale",
    "description":"RFID"
    }
    ]


;

//var HTMLworkEmployer = '<a href="#">%data%';
//var HTMLworkTitle = ' - %data%</a>';
//var HTMLworkStart = '<div class="work-entry"></div>';

for (Employers in work) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work[Employers].employer);

var title = HTMLworkTitle.replace("%data%", work[Employers].title);

$(".work-entry:last").prepend(formattedEmployer+title);
//var HTMLworkDates = '<div class="date-text">%data%</div>';
var formattedWorkDates = HTMLworkDates.replace("%data%", work[Employers].dates);
$(".work-entry:last").append(formattedWorkDates);

//var HTMLprojectDescription = '<p><br>%data%</p>';
var formattedDescription = HTMLprojectDescription.replace("%data%", work[Employers].description);
$(".work-entry:last").append(formattedDescription);
}

var projects = {
    "ALD":{
    	"description":"Authoring Tool for Price Tag Templates",
    	"technologies":["XML","Swing"]
    },
    "ASGC":{
    	"description":"Web Application for Retail Operations",
    	"technologies":["HTML","CSS", "Struts 2", "AJAX" ]
    },
    "Integration":{
    	"description":"Architect and Maintain Integration Layer",
    	"technologies":["XML","XML Schema"]
    }

};


	var eduation =   {
    "schools": [
        {
            "name": "UC Berkeley",
            "city": "Berkeley  CA",
            "major": "Applied Mathematics",
            "degree": "BA"
        }
    ],
    "online_courses": [
        {
            "name": "UC Extension",
            "city": "Santa Clara  CA",
            "course": "Introduction to CSS"
        },
        {
            "name": "UC Extension",
            "city": "Santa Clara  CA",
            "course": "JQuery"
        },
        {
            "name": "UC Extension",
            "city": "Santa Clara  CA",
            "course": "C++"
        },
        {
            "name": "UC Extension",
            "city": "Santa Clara  CA",
            "course": "Java Swing"
        }
    ]
};






	

//$("#workExperience > h2").append(work["employer"]);
