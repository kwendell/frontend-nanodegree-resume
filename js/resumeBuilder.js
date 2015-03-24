var name = "Kevin W. Duell";
var role = "Sales Engineer, Pixel Pusher, U/X";
var contact_info = {
	"mobile":"408-555-1212",
	"email":"kevin@supersaleseng.com",
    "location":"3001 Mary Helen Lane San Jose, CA 95136"
};
var skills = ["jQuery", "Swing", "Slide",
"AJAX","Comet","HopscotchJS","TRAINS on RAILS"];


bio = {
	"name":name,
	"role":role,
	"contacts": contact_info,
	"welcome_msg":'"Wherever you go,...there you are."',
	"profile_picture_url":"images/profile-on-sticky.png",
	"skills":skills
}
// encapsulate, populate bio object
bio.display =  function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var pic =HTMLbioPic.replace("%data%",bio.profile_picture_url);
  $("#header div div div:first").append(pic); 
  var myWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome_msg);
  $("#header div div div:last").append(myWelcome);
    if (bio.skills.length>0) {
    
    $("#header div div div:last").append(HTMLskillsStart);
        for (var i=0;i<bio.skills.length;i++)  {

            var tempHTMLskills = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(tempHTMLskills);
        }

    } 
    var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(mobile);

    var email = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(email);

    var gitHub = HTMLgithub.replace("%data%","kwendell");

     $("#topContacts").append(gitHub);

     /* footer info */

    $("#footerContacts").append(bio.contacts.mobile);
    $("#footerContacts").append(bio.contacts.email);
    $("#footerContacts").append(bio.contacts.gitHub);
};
bio.display();



var work =
    {"jobs":
    [{
    "employer":"Altierre, Inc",
    "title":"Integration Architect",
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

/*  Encapsulate display method for for work object */
work.display = function() {

var locations=[];
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title); 

        $(".work-entry:last").prepend(formattedEmployer+title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
    work.display();



var projects = {
    "projectContent":{
        "Layout Designer":{
    	   "description":"Authoring Tool for Price Tag Templates",
    	   "technologies":["XML","Swing"],
           "dates":"6/2005-present",
           "images" :["images/camera.png"],
           "imageUrl":"images/ALD_screen.png"
        },
        "Store Gateway Console":{
    	   "description":"Web Application for Retail Operations",
    	   "technologies":["HTML","CSS", "Struts 2", "AJAX" ],
           "dates":"6/2005-present",
           "images" :["images/camera.png"],
           "imageUrl":"images/ASGC_screen.png"
        },
        "Gateway Console Single Page App Version":{
    	   "description":"Reworked UI of current application to SPA paradigm using REST",
    	   "technologies":["jQuery","CSS", "HTML"],
           "dates":"6/2012-7/2012",
           "images" :["images/camera.png"],
           "imageUrl":"images/SPA_screen.png"
        }
    }
   
};

/* Encapsulate display method for project object */
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
                formattedImage = formattedImage.replace("%data2%",projects.projectContent[project].imageUrl);
                
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

$("#mapDiv").append(googleMap);