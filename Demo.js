const resume = {
    "name": "KATHIR",
    "contact": {
      "email": "kathir6@gmail.com",
      "phone": "9302293833",
      "address": "123 North Street, town, Tenkasi"
    },
    "education": [
      {
        "degree": "Bachelor of Computer Application",
        "institution": "University of chennai",
        "passedout_year": "2020"
      }
    ],
    "experience": [
      {
        "title": "Engine Test Engineer",
        "company": "Royal Enfield",
        "location": "vallam,chennai",
        "dates": "Jan 2019 - Feb 2020",
      }]
}



// for loop
// Iterate through the 'experience' array
for (let i = 0; i < resume.experience.length; i++) {
  const experienceItem = resume.experience[i];
  console.log(`Title: ${experienceItem.title}, Company: ${experienceItem.company}, 
  Location: ${experienceItem.location}, Dates: ${experienceItem.dates}`);
}

// for in
for (const key in resume.name) {
  if (resume.name.hasOwnProperty(key)) {
    console.log(`${key}: ${JSON.stringify(resume.name[key])}`);
  }
}

// for of
for (const educationItem of resume.education) {
  console.log(`Degree: ${educationItem.degree}, Institution: ${educationItem.institution}, Passed out in ${educationItem.passedout_year}`);
}


// for each
resume.education.forEach(educationItem => {
  console.log(`Degree: ${educationItem.degree}, Institution: 
  ${educationItem.institution}, Passed out in ${educationItem.passedout_year}`);
});
