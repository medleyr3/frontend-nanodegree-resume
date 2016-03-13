//'use strict';
//Bio Object
var bio = {

    "name": "Russell Medley",
    "role": "Web Developer",
    "contacts": {
        "mobile": "304.777.8408",
        "email": "medleyr3@gmail.com",
        "location": "Pittsburgh",
        "github": "medleyr3",
        "twitter": "medleyr3"
    },


    "welcomeMessage": "Hello, my name is Russell. I live in Pittsburgh. My favorite way to work is in the morning when I won't be distracted. In my free time, I like to make videos, music, and draw.",
    "skills": ["Javascript", "Html", "CSS", "Github"],
    "biopic": "images/russ300x300.png"
};


bio.display = function() {


    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts, #footerContacts').append(formattedGithub);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts, #footerContacts').append(formattedMobile);


    var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#pic-wel').append(formattedBioPic);
    $('#pic-wel').append(formattedMessage);


    $('#skil').append(HTMLskillsStart);
    for (item = 0; item < bio.skills.length; item++) {

        var formattedSkills = HTMLskills.replace('%data%', bio.skills[item]);

        $('#skills').append(formattedSkills);
    }


    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts, #footerContacts').append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $('#topContacts, #footerContacts').append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts, #footerContacts').append(formattedLocation);
};



//educations object

var education = {

    "schools": [{
        "name": "Univesity Of Phoenix",
        "location": "Phoenix, AZ",
        "degree": "MBA",
        "majors": ["Accounting"],
        "dates": "2006-2008",
        "url": "http://www.uop.edu"

    }, {
        "name": "Norfolk State",
        "location": "Norfolk, VA",
        "degree": "BA",
        "majors": ["Interdisciplinary Studies"],
        "dates": "1995-1999",
        "url": "http://www.nsu.edu"
    }],

    "onlineCourses": [

        {
            "title": "Javascript Basics",
            "school": "Udacity.com",
            "dates": "2016-2016",
            "url": "http://Udacity.com"
        }, {

            "title": "Jquery",
            "school": "Udacity.com",
            "dates": "2016-2016",
            "url": "http://Udacity.com"



        }


    ]
};

education.display = function() {

    $('#education').append(HTMLschoolStart);
    $('#olc').append(HTMLonlineClasses);
    $('#olc').append(HTMLonlineStart);

    for (item1 = 0; item1 < education.schools.length; item1++) {



        var formattedName = HTMLschoolName.replace('%data%', education.schools[item1].name);

        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[item1].location);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[item1].degree);
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[item1].majors);
        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[item1].dates);
        var formattedUrl = HTMLonlineURL.replace('%data%', education.schools[item1].url);
        $('.education-entry').append(formattedMajor);
        $('.education-entry').append(formattedDegree);
        $('.education-entry').append(formattedName);

        $('.education-entry').append(formattedDates);
        $('.education-entry').append(formattedLocation);

        $('.education-entry').append(formattedUrl);

    };
    for (item1 = 0; item1 < education.onlineCourses.length; item1++) {
        var onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[item1].title);
        var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[item1].school);
        var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[item1].dates);
        var onlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[item1].url);

        $('.olc-entry').append(onlineSchool);
        $('.olc-entry').append(onlineTitle);
        $('.olc-entry').append(onlineDates);
        $('.olc-entry').append(onlineURL);

    }
};


//Work object

var work = {
    "jobs": [{
            "employer": "Russell Coders",
            "title": "Lead Developer",
            "location": "Morgantown",
            "dates": "2007 - Present",
            "projectDescription": "freelancer of web projects"
        }, {
            "employer": "IRISMAGIC",
            "title": "Web Designer/Application Developer",
            "location": "Morgantown",
            "dates": "2007 - Present",
            "projectDescription": "Design Apps and Build,Maintain the website"
        }

    ]
};


work.display = function() {

    for (var job in work.jobs) {

        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].projectDescription));

    }
};


//projects object

var projects = {

    "project": [

        {
            "title": "Portfolio Site",
            "dates": "2015-2016 ",
            "description": "Basic Porfolio Site",
            "images": ["images/project-01.svg"]
        }, {
            "title": "Resume Site",
            "dates": "2016-2016",
            "description": "An advanced resume site using Javascript",
            "images": ["images/project-02.svg", "images/project-03.svg"]
        }
    ]
};


projects.display = function() {

    for (var project in projects.project) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.project[project].dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[project].description);
        $('.project-entry:last').append(formattedDescription)

        var consolProject = projects.project[project].images;
        for (var item in consolProject) {
            var formattedImage = HTMLprojectImage.replace('%data%', consolProject[item]);

            $('.project-entry:last').append(formattedImage);
        };
    };

};


var gmapDisplay = function() {
    $('#mapDiv').append(googleMap);

};