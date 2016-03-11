/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //Bio Object

var bio = {
	
 "name" : "Russell Medley",
 "role" : "Web Developer",
	 "contacts" : {
	 	"mobile" : "304.777.8408",
	 	"email" : "medleyr3@gmail.com",
	 	"location" : "Pittsburgh",
	 	"github" : "medleyr3"
	 			  },


 "welcomeMessage" : "Hello, my name is Russell. I live in Pittsburgh. My favorite way to work is in the morning when I won't be distracted. In my free time, I like to make videos, music, and draw.",
 	"skills" : ["Javascript", "Html", "CSS", "Github"],
     "bio_pic" : "images/russ300x300.png"
}



//educations object

var education = {

	"schools": [
	{
		"name": "Univesity Of Phoenix",
		"city": "Phoenix, AZ",
		"degree": "MBA",
		"major": ["Accounting"],
		"date" : "2008"
	},
	 {
		"name": "Norfolk State",
		"city": "Norfolk, Va",
		"degree": "BA",
		"major": ["Interdisciplinary Studies"],
		"date" : "1999"
	}],
   
   "online_courses" : [
{
        "course_name": "Javascript Basics",
		"school_name": "Udacity.com",
		"date" : "2016"
}

   ]

}

//Work object

var work = {

"current_position": "Lead Developer",
"employer" :  "Russell Coders",
"years_worked" : "2007 - Present",
"work_city" : "Morgantown"
}

//projects object

var projects = { 

	titles : [

{
"projectName" = "Portfolio Site",
"projectDates" = "2016 ",
"projectDescription" = " Basic Porfolio Site",
"projectImage" = "images/porfolio/p1.svg"
},
{
"projectName" = "Resume Site",
"projectDates" = "2016 ",
"projectDescription" = " An advanced resume site using Javascript",
"projectImage" = "images/porfolio/p2.svg"
}





	]








}

//  var formattedName =  HTMLheaderName.replace("%data%",bio.name);
//  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
//  // var contact = HTMLcontactGeneric.replace("%contact%","%data%", bio.name, myName);
//  // var contact_info = HTMLcontactGeneric.replace("%contact%",bio.contacts.location).replace("%data%", bio.contact_info);
//  var picture_url = HTMLbioPic.replace("%data%",bio.bio_pic);
//  var welcome_message = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
//  var skills = HTMLskills.replace("%data%",bio.skills);
//  var skills_title = HTMLskillsStart;
//  var email = HTMLemail.replace("%data%", bio.contacts.email);
//  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//  var github = HTMLgithub.replace("%data%", bio.contacts.github);
//  var location1 = HTMLlocation.replace("%data%", bio.contacts.location);


// //header
 
//  $("#header").prepend(formattedRole);
//  $("#header").prepend(formattedName);
//  $("#header").append(picture_url);
// // $("#header").append(contact_info); 
//   $("#header").append(email);
//     $("#header").append(mobile);
//   $("#header").append(github);
//     $("#header").append(location1);
//    $("#header").append(welcome_message);
//  $("#header").append(skills_title);
//  $("#header").append(skills);





// var current_position = HTMLworkTitle.replace("%data%", work.current_position);
// var employer = HTMLworkEmployer.replace("%data%", work.employer);
// var years_worked = HTMLworkDates.replace("%data%", work.years_worked);
// var work_city = HTMLworkLocation.replace("%data%", work["work_city"]);

//  $("#workExperience").append(current_position);
//  $("#workExperience").append(employer);
//  $("#workExperience").append(years_worked);
// $("#workExperience").append(work_city);


// //eductions object

// var education = {

// "last_school_attended" : "University of Phoenix",
// "school_years_attended" : "2008-2011",
// "school_city" : "Phoenix",
// "school_major" : "MBA"
// }

// var last_school_attended = HTMLschoolName.replace("%data%", education.last_school_attended);
// var school_city = HTMLschoolLocation.replace("%data%", education.school_city);
// var school_years_attended = HTMLschoolDates.replace("%data%", education.school_years_attended);
// var school_major = HTMLschoolMajor.replace("%data%", education["school_major"]);

//  $("#education").append(last_school_attended);
//  $("#education").append(school_years_attended);
//  $("#education").append(school_major);
// $("#education").append(school_city);



// // var sampleArray = [0,0,8];

// // var incrementLastArrayElement = function(_array) {
// // /*
// //     var newArray = sampleArray;
// //     var valuetoIncrementBy= 1;
// //     var incrementedlastElementInArray = sampleArray[newArray.length-1] + valuetoIncrementBy;
// //     newArray.pop();
// //     newArray.push(incrementedlastElementInArray);*/

// //     var newArray = [];
// //     newArray = _array.slice(0);
// //     var lastNumber = newArray.pop();
// //     newArray.push(lastNumber + 1);
// //     return newArray;

 



    



// //     // Your code should make newArray equal to an array that has the same
// //     // values as _array, but the last number has increased by one.
    
// //     // For example:
// //     // _array = [1, 2, 3];
// //     // turns into:
// //     // newArray = [1, 2, 4];
    
// //     // Your code goes in here!
    
    
// //     // Don't delete this line!
// //     return newArray;
// // };

// // Did your code work? The line below will tell you!
// // console.log(incrementLastArrayElement(sampleArray));

// // var name = "AlbERt EINstEiN";



// // function nameChanger(oldName) {
// //     var finalName = oldName;
// //     // Your code goes here!
// // 		var space = ' ';
// // 		//split strings function
// // 			function splitString(stringToSplit, seperator) {
// // 			var arrayOfStrings = stringToSplit.split(seperator);

// // 			return arrayOfStrings;

// // 					}

// // 	var stringSplit = splitString(finalName, space);
// // 	console.log(stringSplit);
// // 	var stFirstWord = stringSplit.shift();
// // 	var stLastWord = stringSplit.pop();
// // 	stFirstWord = stFirstWord[0].toUpperCase() + stFirstWord.slice(1).toLowerCase();
// // 	stLastWord = stLastWord.toUpperCase();
// // 	finalName = stFirstWord + ' ' + stLastWord;

// // 	console.log(stFirstWord);
// // 	console.log(stLastWord);

// //     // Don't delete this line!
// //     return finalName;
// // };

// // Did your code work? The line below will tell you!
// // console.log(nameChanger(name));
