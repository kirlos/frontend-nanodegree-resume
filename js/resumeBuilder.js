
 var education = {
     "schools": [{
             "name": "Maine Maritime Academy",
             "location": "Castine, ME, US",
             "degree": "BS",
             "majors": ["Marine Engineering"],
             "dates": "Fall 2005 - Summer 2008",
             "url": "http://mainemaritime.edu"
         },
         {
             "name": "Florida International University",
             "location": "Miami, FL, US",
             "degree": "none",
             "majors": ["Computer Science"],
             "dates": "Fall 1997 - Spring 2004",
             "url": "http://fiu.edu"
         }
     ],
     "onlineCourses": [{
         "title": "Front End Nanodegree",
         "school": "Udacity",
         "dates": "12/2016 - present",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }]
 };

 var work = {
     "jobs": [{
             "employer": "PK Clean",
             "title": "Controls Engineer",
             "location": "Salt Lake City, UT, US",
             "dates": "5/2016 - Present",
             "description": "Automates equipment processes through PLC monitoring and motor control (Variable Frequency Drives and conventional motor starters). Designs and fabricates equipment for repairs and upgrades. Troubleshoots electronics and electrical systems"
         },
         {
             "employer": "Soper Ocean Services",
             "title": "Owner/Operator",
             "location": "Harpswell, ME, US",
             "dates": "4/2013 - 4/2016",
             "description": "Operated and maintained a 34' custom mooring barge including engines and hydraulic systems. Performed mooring inspections repair and maintenance.  Designed, constructed, and installed new boat mooring systems. Designed and constructed dock systems"
         },
         {
             "employer": "General Dynamics - Bath Iron Works",
             "title": "Controls Engineer",
             "location": "Bath, ME, US",
             "dates": "4/2009 - 4/2013",
             "description": "Ensured technical compatibility and functionality of major control systems. Led Integration as lead controls engineer of electronically controlled shipboard equipment to include motor driven, hydraulic, and pneumatic actuated shipboard machinery. Interfaced with production managers and workers to integrate processes and equipment. Reviewed, edited and created technical documentation for control systems. Reviewed and edited vendor CAD drawings and in house line drawings. Designed and managed Vendor Integration Test Lab. Designed and documented testing procedures"
         }
     ]
 };

 var projects = {
     "projects": [{
         "title": "Vendor Integration Test Lab",
         "dates": "2012",
         "description": "Assisted in the planning, construction, and managemant of a Vendor Integration Test Lab for the Navy's DDG1000 destroyer",
         "images": ["images/Future_USS_Zumwalt's_first_underway_at_seaSm.jpg"]
     }]
 };

 var bio = {
     "name": "David Weippert",
     "role": "Controls Engineer",
     "contacts": {
         "mobile": "207-406-0000",
         "email": "rx305@yahoo.com",
         "github": "kirlos",
         "location": "Salt Lake City"
     },
     "welcomeMessage": "",
     "skills": ["Systems Engineering", "Controls Engineering", "Programmable Logic Controllers", "Integration", "Troubleshooting"],
     "biopic": "images/biopic.jpg"
 };

// Work display function, formats and injects work background information into HTML file
 work.display = function() {
     work.jobs.forEach(function(job) {
         $("#workExperience").append(HTMLworkStart);
         var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
         var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
         var formattedDates = HTMLworkDates.replace("%data%", job.dates);
         var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
         $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
     });
 };

 // Education display function, formats and injects Education background information into HTML file
 education.display = function() {
     education.schools.forEach(function(school) {
         $("#education").append(HTMLschoolStart);


         var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
         var formattedSchoolCity = HTMLschoolLocation.replace("%data%", school.location);
         var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
         var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
         var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
         var formattedSchoolUrl = HTMLonlineURL.replace("%data%", school.url);
         $(".education-entry:last").append(formattedSchoolName + formattedSchoolCity + formattedSchoolDegree + formattedSchoolDates + formattedSchoolMajor + formattedSchoolUrl);
     });

     education.onlineCourses.forEach(function(course) {
         $(".education-entry:last").append(HTMLonlineClasses);
         var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
         var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
         var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
         var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
         $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
     });

 };

 // Project display function, formats and injects Project background information into HTML file
 projects.display = function() {
     projects.projects.forEach(function(project) {
         $("#projects").append(HTMLprojectStart);
         var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
         var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
         var formattedProjectDesc = HTMLprojectDescription.replace("%data%", project.description);
         var formattedProjectImg = HTMLprojectImage.replace("%data%", project.images);
         $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDesc + formattedProjectImg);
     });
 };

 // Bio display function, formats and injects Bio background information into HTML file
 bio.display = function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     $("#header").prepend(formattedName + formattedRole);
     var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $("#header").append(formattedBioPic);
     $("#topContacts").append(formattedPhone + formattedEmail + formattedGithub + formattedLocation);
     $("#footerContacts").append(formattedPhone + formattedEmail + formattedGithub + formattedLocation);

     $("#header").append(HTMLskillsStart);
     bio.skills.forEach(function(skill) {
         formattedSkill = HTMLskills.replace("%data%", skill);
         $("#skills:last").append(formattedSkill);
     });
 };

// Function calls
 bio.display();
 work.display();
 education.display();
 projects.display();
// Appends googleMap data to HTML
 $("#mapDiv").append(googleMap);
