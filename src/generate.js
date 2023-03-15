const fs = require('fs');
const path = require('path');



const outputPath = path.join(__dirname, 'generate.json');



    const data = [{
        id: 0,
        title: 'Generate-ReadMe',
        pages: "https://drive.google.com/file/d/1bxFeSJht_5-EF06Z2x4wKkrM21Z0VaJP/view",
        code: "https://github.com/zakirali1/ReadMe-Generator",
        src: './images/rm.png'
    },
     
    {
        id: 1,
        title: 'Movie-Zone',
        pages: "https://zakirali1.github.io/Movie-Zone/",
        code: "https://github.com/zakirali1/Movie-Zone",
        src: "./images/movie.png"
     
    },
    
    {
        id: 2,
        title: "Weather-Dashboard",
        pages: "https://zakirali1.github.io/Weather-Dashboard/",
        code: "https://github.com/zakirali1/Weather-Dashboard",
        src: "./images/wd.png"
    },

    {
        id: 3,
        title: "Quiz",
        pages: "https://zakirali1.github.io/Web-APIs-Code-Quiz/",
        code: "https://github.com/zakirali1/Web-APIs-Code-Quiz",
        src: "./images/quiz.png"
    },

    {
        id: 4,
        title: "Password Generator",
        pages: "https://zakirali1.github.io/Password-Generator/",
        code: "https://github.com/zakirali1/Password-Generator",
        src: "./images/passwordgen.png"
    },

    {
        id: 5,
        title: "Workday-Scheduler",
        pages: "https://zakirali1.github.io/Work-Day-Scheduler/",
        code: "https://github.com/zakirali1/Work-Day-Scheduler",
        src: './images/scheduler.png'
    }
    ];
    
    
    fs.writeFile(outputPath, JSON.stringify(data), err => {
        err ? console.err(err) : console.log("success!");
    });
