var work = {
	"jobs": [{
           "employer": "Insight centre for Data Analytics",
           "title": "Research Assistant", 
           "location": "Galway, Ireland",
           "dates": "July 2015 - Future",
           "description": "Working in UIot & E-Governance EU project for ARCADIA project. Software design & development for service graph editor in java , data visualization using Sigmajs & D3 for IoT related projects, scripting in Python for data filtering of datasets."       
       }, {
           "employer": "Unisys",
           "title": "Software Consultant", 
           "location": "Bangalore, India",
           "dates": "May 2011 - Sept 2013",
           "description": "Support and configuration manager for URBIS-Build, Release and Configuration manager, leading 4-5 team members in the URBIS project. -Performed Build using EAE (Enterprise Application Environment) in UNIX environment and troubleshooting the same for issues. -Performed External (Client) Releases – Manual packaging and sending the package to the clients. Have performed deployment of URBIS product in Client location. -Created & Maintained the URBIS documents in Clear Case and the AB Suite Source code in TFS. Alongside, managed the defects management system in Clear Quest. -Performed creation and update of MSBuild script for creating MSI packages. -Performed script changes between Unix and Windows environment for EAE-AB Suite migration -Database deployment on Oracle 9i -11g and administration. -Maintained the Oracle database for daily usage. -Planned the infrastructure management for the URBIS project and the backup & disaster recovery for the project. -Acted as an interface for Developers and testing team during critical release and generated the system with the latest patch for the testing team to test for critical faults."          
       }],
       display: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formettedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formettedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		}
		},

	//Find all location that I have worked
	locationizer: function(_work) {
		var allLocation = [];
		for (var work in _work.jobs) {
			var _workLoc = _work.jobs[work].location;
			allLocation.push(_workLoc);
		}
		return allLocation;

	}
}
//////////////////////////////////////////////////BIO/////////////////////////////////////////////////////////////////

var bio = {
	"name" : "Srinivasan Arumugam",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "353899842889",
		"email" : "srinithin@gmail.com",
		"github" : "srinigalway",
		"twitter" : "@sricheez",
		"skype" : "sricheez",
		"location" : "Galway, Ireland"
	},
	"welcomeMessage" : "Welcome to my online resume page",
	"skills" : [
	"programming", "web development", "html", "css", "javascript", "d3", "data visualization", "nodeJS", "Jquery"
	],
	"bioPic" : "images/srini.jpg",

	//Dispay bio json object in resume page
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

	}
}

//////////////////////////////////////////////////EDUCATION/////////////////////////////////////////////////////////////////
var education = {
	"schools": [
	   {
	  	"name": "National University of Ireland, Galway",
        "location": "Galway, Ireland",
        "degree": "Masters",
        "majors": ["Information Systems Management"],
        "dates"  : 2015,
        "url": "http://www.nuigalway.ie/"
       },
       {
	  	"name": "University Visvesvariah College Of Engineering",
        "location": "Bangalore, India",
        "degree": "Bacherlor of Engineering",
        "majors": ["Electronics & Communication"],
        "dates"  : 2007,
        "url": "http://uvcebangalore.ac.in/"
       }
     ],
     "onlineCourses": [
     	{
           "title": "Programming the Internet of Things (IOT)",
           "school": "University of California, Irvine",
           "dates": "2016",
           "url": "https://www.coursera.org/account/accomplishments/verify/WKN4U7AQRNZY"
	  	},
	  	{
           "title": "Machine Learning",
           "school": "Stanford University",
           "dates": 2016,
           "url": "https://www.coursera.org/account/accomplishments/verify/9G6RC3YP2Q85"
	  	},
	  	{
           "title": "Data Visualization with D3.js",
           "school": "Lynda.com",
           "dates": 2016,
           "url": "https://www.lynda.com/ViewCertificate/803EA04D5FF94E44A876E8FD820C1C31?utm_source=linkedin&utm_medium=sharing&utm_campaign=certificate"
	  	}
     ],
     //Display education in my resume page
	display: function() {
		for (edu in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedNameAndDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameAndDegree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
			$(".education-entry:last").append(formattedLocation);
			if (education.schools[edu].majors.length > 0) {
				for (major in education.schools[edu].majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}

		}
		//online classes
		$('#education').append(HTMLonlineClasses)
		for (online in education.onlineCourses) {
			$('#education').append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedTitleAndSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleAndSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedDate);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL);

		}

	}
}



//////////////////////////////////////////////////PROJET/////////////////////////////////////////////////////////////////

var projects = {
	"projects" : [
		{
            "title": "Arcadia",
            "dates": "2015-2016",
            "description": "Software design & development for service graph editor in java , data visualization using Sigmajs & D3 for IoT related projects, scripting in Python for data filtering of datasets." 
        }
    ],
	//Display projects in resume page
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			

		}

	}
}



work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

