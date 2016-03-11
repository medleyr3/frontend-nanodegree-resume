/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
    "bio_pic": "images/russ300x300.png"
};

//  bio.display = function () {
//          if (bio.skills.length > 0) {
//     $('#header').append(HTMLskillsStart);
//     var numberOfSkills = bio.skills.length;
//     var currentSkill = 0;
//     while (currentSkill < numberOfSkills){
//       $('#skills').append(HTMLskills.replace('%data%',bio.skills[currentSkill]));
//       currentSkill = currentSkill + 1;
//     }

// }

//  }

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
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bio_pic);
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
        "majors": "Accounting",
        "dates": "2006-2008",
        "url": "http://www.uop.edu"

    }, {
        "name": "Norfolk State",
        "location": "Norfolk, VA",
        "degree": "BA",
        "majors": "Interdisciplinary Studies",
        "dates": "1995-1999",
        "url": "http://www.nsu.edu"
    }]
}

education.display = function() {

    $('#education').append(HTMLschoolStart);
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

    }
};
var onLineCourses = {

    "courses": [

        {
            "title": "Javascript Basics",
            "school": "Udacity.com",
            "dates": "2016",
            "url": "http://Udacity.com"
        }, {

            "title": "Jquery",
            "school": "Udacity.com",
            "dates": "2016",
            "url": "http://Udacity.com"

        }
    ]

}



onLineCourses.display = function() {

    $('#olc').append(HTMLonlineClasses);
    $('#olc').append(HTMLonlineStart);


    for (item1 = 0; item1 < onLineCourses.courses.length; item1++) {
        var onlineTitle = HTMLonlineTitle.replace('%data%', onLineCourses.courses[item1].title);
        var onlineSchool = HTMLonlineSchool.replace('%data%', onLineCourses.courses[item1].school);
        var onlineDates = HTMLonlineDates.replace('%data%', onLineCourses.courses[item1].dates);
        var onlineURL = HTMLonlineURL.replace('%data%', onLineCourses.courses[item1].url);

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

    for (work3 in work.jobs) {

        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[work3].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[work3].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[work3].location));
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[work3].dates));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[work3].projectDescription));

    }
};


//projects object

var projects = {

    "project": [

        {
            "projectName": "Portfolio Site",
            "projectDates": "2016 ",
            "projectDescription": "Basic Porfolio Site",
            "projectImage": "images/project-01.svg"
        }, {
            "projectName": "Resume Site",
            "projectDates": "2016",
            "projectDescription": "An advanced resume site using Javascript",
            "projectImage": "images/project-02.svg"
        }
    ]
};


projects.display = function() {

    for (item4 in projects.project) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[item4].projectName);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.project[item4].projectDates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[item4].projectDescription);
        $('.project-entry:last').append(formattedDescription)
        var formattedImage = HTMLprojectImage.replace('%data%', projects.project[item4].projectImage);
        $('.project-entry:last').append(formattedImage);
    }
};


var gmapDisplay = function() {
    $('#mapDiv').append(googleMap);

};


// function showHideArea(mainDiv,entryDiv){
// var md, ed; 
// md = mainDiv;
// ed = entryDiv;

//   $(entryDiv).css('display','none');

// $(mainDiv).on( 'click', function() {
//     $(entryDiv).toggleClass('bg-warning').toggle('slow', function(){

//     });
// });

// };