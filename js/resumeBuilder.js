var name = "Kevin W. Duell";
var role = "Sales Engineer, Pixel Pusher, U/I Development, Content Generator";
var contact_info = {
	"mobile":"408-555-1212",
	"email":"kevin@supersaleseng.com",
    "location":"3001 Mary Helen Lane San Jose, CA 95136"
};
var skills = ["Cage Fighting","Musicianship","Encouragement/Mentoring", "Java","Struts 2"];

//locations.push(bio.contacts.location);
bio = {
	"name":name,
	"role":role,
	"contacts": contact_info,
	"welcome_msg":"Wherever you go,...there you are.",
	"profile_picture_url":"images/profile-on-sticky.png",
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

} 

HTMLcontactGeneric.replace("%contact%", bio.contacts.mobile);

var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

$("#topContacts").append(mobile);

HTMLcontactGeneric.replace("%contact%", bio.contacts.email);


var email = HTMLemail.replace("%data%",bio.contacts.email);


$("#topContacts").append(email);

var gitHub = HTMLgithub.replace("%data%","kwendell");

$("#topContacts").append(gitHub);

//var location = HTMLlocation.replace("%data%","San Jose");

var pic =HTMLbioPic.replace("%data%",bio.profile_picture_url);

$("#header").append(pic);	



    

//var HTMLworkEmployer = '<a href="#">%data%';
//var HTMLworkTitle = ' - %data%</a>';
//var HTMLworkStart = '<div class="work-entry"></div>';
//$(document).click(function(event) {logClicks(event.pageX,event.pageY)});
/*function locationizer(work)  {
    
    var workLocs= [];
    for (var i=0;i<work.length;i++)  {
        workLocs.push(work[i].location);
    }
    return workLocs;
}
*/

//var internationalizeButton = '<button>Internationalize</button>';
/*
$("#main").append(internationalizeButton);
function inName(fullName)  {

    var retName = "";
    var parts = fullName.split(" ");
    parts[parts.length-1] = parts[parts.length-1].toUpperCase();

    for (var i=0;i<parts.length;i++) {
        retName+=parts[i]+" ";
    }

return retName;

}
*/

//console.log(inName(name));

var work =
    {"jobs":
    [{
    "employer":"Altierre, Inc",
    "title":"Sales Engineer",
    "dates":"5/23/05-present",
    "location":"San Jose CA",
    "description":"Digital Signage"
    },
    {
    "employer":"Lightbridge, Inc",
    "title":"Principal Engineer",
    "dates":"6/2000-4/2005",
    "location":"Fremont CA",
    "description":"Mobile Platform"
    },
    {
    "employer":"Savi Technology",
    "title":"Business Process Analyst",
    "dates":"11/98-5/2000",
    "location":"Sunnyvale CA",
    "description":"RFID"
    }
    ]
};

var locations=[];
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }


for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);


var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);

$(".work-entry:last").prepend(formattedEmployer+title);
//var HTMLworkDates = '<div class="date-text">%data%</div>';
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedWorkDates);

//var HTMLprojectDescription = '<p><br>%data%</p>';
var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}

var projects = {
    "projectContent":{
    "Altierre Layout Designer":{
    	"description":"Authoring Tool for Price Tag Templates",
    	"technologies":["XML","Swing"],
        "dates":"6/2005-present",
        "images" :["http://placehold.it/64x64","http://placehold.it/64x64"]
    },
    "Altierre Store Gateway Console":{
    	"description":"Web Application for Retail Operations",
    	"technologies":["HTML","CSS", "Struts 2", "AJAX" ],
        "dates":"6/2005-present",
        "images" :["http://placehold.it/64x64","http://placehold.it/64x64"]
    },
    "Retail Integration Framework":{
    	"description":"Architect and Maintain Integration Layer",
    	"technologies":["XML","XML Schema"],
        "dates":"6/2008-present",
        "images" :["http://placehold.it/64x64","http://placehold.it/64x64"]
    }
    }
    ,
   
};


projects.display = function() {
    for (project in projects.projectContent) {
        $("#projects").append(HTMLprojectStart);

        var projectTitle = HTMLprojectTitle.replace("%data%", project);
        $(".project-entry:last").append(projectTitle);
      
        var projectDates = HTMLprojectDates.replace("%data%",projects.projectContent[project].dates);
         $(".project-entry:last").append(projectDates);
        
         var projectDescription = HTMLprojectDescription.replace("%data%",projects.projectContent[project].description);
         $(".project-entry:last").append(projectDescription);
         if (projects.projectContent[project].images.length>0)  {
            for (image in projects.projectContent[project].images) {
                 
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projectContent[project].images[image]);
                
                $(".project-entry:last").append(formattedImage);
            }           

         }    
    }
}
projects.display(); 


	var education =   {
    "schools": [
        {
            "name": "UC Berkeley",
            "location": "Berkeley, California",
            "major": "Applied Mathematics",
            "degree": "BA",
            "dates":"1/80-6/83"
        },
        {
            "name": "DeAnza College",
            "location": "Cupertino, California",
            "major": "Computer Science",
            "degree": "AA",
            "dates":"9/78-12/79"
        },
        {
           "name": "UC Santa Cruz Extension",
            "location": "Santa Clara, California",
            "major": "Software Engineering",
            "degree": "none",
            "dates":"6/96-6/13"   
        }
    ],
    
    "online_courses": [
        {
            "name": "UC Extension",
            "location": "Santa Clara, California",
            "course": "Introduction to CSS",
            "dates": "9/2013-12/2013",
            "url":"www.ucsc-extension.edu"
        },
        {
            "name": "ed2go",
            "location": "Santa Clara, California",
            "course": "AJAX Fundamentals",
            "dates":"1/2015-3/2015",
            "url":"ed2go/santaclara"
        }
    ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
   
    for (school in education.schools) {

        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    
        formattedDegree = formattedSchoolName+formattedDegree;
         $(".education-entry:last").append(formattedDegree);
    
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
   
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
       
    }
 
    $("#education").append(HTMLonlineClasses);
    
    $("#education").append(HTMLschoolStart);
    for (course in education.online_courses)  {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online_courses[course].course);
       
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.online_courses[course].name);
        var line = formattedOnlineTitle+formattedOnlineSchool;

       $(".education-entry:last").append(line);
        
       var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online_courses[course].dates);
       $(".education-entry:last").append(formattedOnlineDates);

       var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.online_courses[course].url);
       $(".education-entry:last").append(formattedOnlineUrl);

      
      
     
    }
}
education.display();

/*

var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/



$("#mapDiv").append(googleMap);

/*
for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }
    */





	

//$("#workExperience > h2").append(work["employer"]);
