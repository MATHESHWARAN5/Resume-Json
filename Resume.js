{
    "personalInformation": {
      "name": "John Doe",
      "address": "123 Main Street, Cityville, State, 12345",
      "phone": "555-1234",
      "email": "john.doe@email.com"
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "school": "University of Tech",
        "graduationYear": 2020
      },
      {
        "degree": "High School Diploma",
        "school": "City High School",
        "graduationYear": 2016
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "startDate": "2020-06-01",
        "endDate": "2022-01-15",
        "responsibilities": [
          "Developed and maintained software applications",
          "Collaborated with cross-functional teams"
        ]
      },
      {
        "position": "Intern",
        "company": "Innovate Labs",
        "startDate": "2019-05-01",
        "endDate": "2019-12-31",
        "responsibilities": [
          "Assisted in software development tasks",
          "Gained hands-on experience in coding and debugging"
        ]
      }
    ],
    "skills": [
      "Java",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Database Management"
    ]
  }
  

//   For Loop:

for (let section in resumeData) {
    console.log(section + ":");
    if (Array.isArray(resumeData[section])) {
        for (let item of resumeData[section]) {
            if (typeof item === 'object') {
                for (let key in item) {
                    console.log(`  ${key}: ${item[key]}`);
                }
            } else {
                console.log(`  - ${item}`);
            }
        }
    } else if (typeof resumeData[section] === 'object') {
        for (let key in resumeData[section]) {
            console.log(`  ${key}: ${resumeData[section][key]}`);
        }
    } else {
        console.log(`  ${resumeData[section]}`);
    }
    console.log("\n");
}


// For...of Loop:

for (let section of Object.keys(resumeData)) {
    console.log(section + ":");
    if (Array.isArray(resumeData[section])) {
        for (let item of resumeData[section]) {
            if (typeof item === 'object') {
                for (let key in item) {
                    console.log(`  ${key}: ${item[key]}`);
                }
            } else {
                console.log(`  - ${item}`);
            }
        }
    } else if (typeof resumeData[section] === 'object') {
        for (let key in resumeData[section]) {
            console.log(`  ${key}: ${resumeData[section][key]}`);
        }
    } else {
        console.log(`  ${resumeData[section]}`);
    }
    console.log("\n");
}

// forEach Loop:

Object.keys(resumeData).forEach(section => {
    console.log(section + ":");
    if (Array.isArray(resumeData[section])) {
        resumeData[section].forEach(item => {
            if (typeof item === 'object') {
                Object.keys(item).forEach(key => {
                    console.log(`  ${key}: ${item[key]}`);
                });
            } else {
                console.log(`  - ${item}`);
            }
        });
    } else if (typeof resumeData[section] === 'object') {
        Object.keys(resumeData[section]).forEach(key => {
            console.log(`  ${key}: ${resumeData[section][key]}`);
        });
    } else {
        console.log(`  ${resumeData[section]}`);
    }
    console.log("\n");
});



