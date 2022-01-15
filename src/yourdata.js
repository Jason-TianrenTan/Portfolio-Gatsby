// Skills Icons
import htmlIcon from "./images/skills/html.svg"
import cssIcon from "./images/skills/css.svg"
import reactIcon from "./images/skills/react.svg"
import jsIcon from "./images/skills/javascript.svg"
import cppIcon from "./images/skills/cpp.png"
import cSharpIcon from "./images/skills/c-sharp.png"
import androidIcon from "./images/skills/android.png"
import javaIcon from "./images/skills/java.png"
import nodejsIcon from "./images/skills/node-js.png"
import vuejsIcon from "./images/skills/vue-js.png"
import mySQLIcon from "./images/skills/mysql.png"
import springIcon from "./images/skills/spring-boot.svg"
import mavenIcon from "./images/skills/maven.svg"
import gitIcon from "./images/skills/git.png"

// Avatar
import avatar from "./images/avatar.jpg"

//Logo
import logoImg from "./images/logo.png"
import logoSmallImg from "./images/logo-small.png"
import resumeImg from "./images/about/resume.png"

//About Icons
import aboutCodingIcon from "./images/about/coding.png"
import aboutAndroidIcon from "./images/about/android.png"
import aboutClubIcon from "./images/about/pantone.png"
import aboutMathIcon from "./images/about/data.png"
import aboutHarvardIcon from "./images/about/app-development.png"
import meIcon from "./images/about/man.png"
import mscIcon from "./images/about/microsoft.png"
import certikIcon from "./images/about/data-analysis.png"
import alibabaIcon from "./images/about/web-development.png"

//Project Images
import openCVCover from "./images/projects/opencv.jpg"
import xamarinCover from "./images/projects/xamarin.jpg"
import xamarinLogoCover from "./images/projects/xamarin-logo.png"
import codeCover from "./images/projects/carbon.png"

//Contact Icons
import githubIcon from "./images/contacts/github.svg"
import linkedinIcon from "./images/contacts/linkedin.png"
import gmailIcon from "./images/contacts/gmail.png"

export default {
  //Stats
  stats: [
        {name: "C++", count: 1050},
        {name: "Java", count: 229934},
        {name: "JavaScript", count: 155441},
        {name: "Commits", count: 283}
  ],
  

  //Server url
  server_urls: {
    repos: "http://localhost:8080/repos/stats",
  },

  //Logo
  logos: {
    logo: logoImg,
    logoSmall: logoSmallImg,
  },

  headerTagline: ["Tianren Tan"],

  headerParagraph:
    "Current Master's Student in Software Engineering at UC Irvine",

  contactEmail: "jason.tianrent@gmail.com",

  projects: [
    {
      title: "APAP-Processor",
      para:
        "A code implementation based on As Projective As Possible Image Stitching with Moving DLT",
      imageSrc: openCVCover,
      url: "https://github.com/Jason-TianrenTan/APAP-Processor",
      tags: ["C++", "OpenCV", "Eigen"],
    },
    {
      title: "U-Coupons",
      para:
        'A peer-to-peer online coupon exchange platform. Prize winner of "Best Mobile Application" for the 13th Citi Financial Innovation and Application Competition.',
      imageSrc:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://github.com/Jason-TianrenTan/U-Coupons",
      tags: ["Android", "RxJava", "Retrofit", "OkHttp", "ButterKnife"],
    },
    {
      title: "MBTA Manager",
      para:
        "A cross platform mobile application providing travelling information, alerts and schedule optimizations in Boston.",
      imageSrc: xamarinLogoCover,
      url: "https://github.com/Jason-TianrenTan/MBTAManager",
      tags: ["C#", "Xamarin", "RESTful API"],
    },
    {
      title: "CMM-Interpreter",
      para:
        "A C-Minus-Minus language interpreter based on LL1 grammar analysis and semantic analysis, supports various fundamental features of C++. ",
      imageSrc: codeCover,
      url: "https://github.com/Jason-TianrenTan/CMMInterpreter",
      tags: ["Java", "Compilers", "Semantic Analysis"],
    },
    {
      title: "U-Shot",
      para:
        "Using AI to produce comprehensive photography analyzation and provide tips on improving your photography skills.",
      imageSrc:
        "https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: "2017-10",
      tags: ["Android", "Scene Recognition", "Tensorflow"],
    },
    {
      title: "RSS Feeder",
      para:
        "A personal RSS feed manager, allows you to access your subscriptions, manually importing local and remote resources, dribble notes on reading page.",
      imageSrc:
        "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: "2018-10",
      tags: ["Android", "MVVP Design", "JavaScript"],
    },
  ],

  // About Secton --------------
  resumeLogo: resumeImg,
  codingLogo: aboutCodingIcon,
  meLogo: meIcon,
  aboutParaOne: "Hi there! I'm Tianren Tan, you can call me Jason.",
  aboutParaTwo:
    "I’m currently a grad student at UC Irvine majoring in Software Engineering. I received my Bachelors degree in SWE at Wuhan University, China. I’ve always had a strong passion in building stuff since a child, and I’ve always been fascinated by the countless possibilities we can realize with computers. I’m highly motivated with my work and receptive to new ideas. ",
  aboutParaThree:
    "I have prior experience in Java, JS, React, Vue and many more. My goal is to become a full-stack engineer, right now I’m actively seeking summer internships and fulltime positions.",
  aboutImage: avatar,

  //Timeline Section -------------
  timelines: [
    {
      time: "2010",
      title: "Start coding at age 12",
      description: "Beginning with C++ using Visual C++ 6.0",
      badges: ["C++"],
    },
    {
      time: "2013.01",
      title: "Multi-user Group Chat",
      description:
        "Individually developed a TCP C/S framework multi-user group chat app, supporting rich text format and file transfer",
      badges: ["Java", "TCP/IP"],
    },
    {
      time: "2014.11",
      title: "NOIP2015 Second Prize",
      description: "Senior Group, ranked #82 in Beijing",
      badges: ["C++", "Algorithms"],
    },
    {
      time: "2015.06 - 2015.07",
      title: "ID Tech Summer Camp",
      description: "At UC Irvine, developed a turned-based RPG battle game",
      badges: ["Java", "OOP", "Algortihms"],
    },
    {
      time: "2016.09",
      title: "Microsoft Student Club (MSC)",
      description: "Joined MSC in Wuhan University",
      badges: ["Microsoft", "Tech"],
      icon: aboutClubIcon,
    },
    {
      time: "2016.11",
      title: "First Hackathon in MSC",
      description:
        "Developed a bullet-chat based screen reminder. Leaded a small team of three and won first prize.",
      badges: ["Teamwork", "Java", "Desktop Development"],
    },
    {
      time: "2017.07 - 2017.12",
      title: "Online Coupon Exchange Platform",
      description:
        "An online peer-to-peer coupon exchange platform, won 'Best Mobile App Design' and Third prize for the 13th Citi Cup Financial Application Development Contest.",
      badges: [
        "Android",
        "RxAndroid",
        "OkHttp",
        "Retrofit",
        "ButterKnife",
        "Financial Development",
      ],
      icon: aboutAndroidIcon,
    },
    {
      time: "2018.01 - 2018.02",
      title: "Honorable Mention in MCM/ICM",
      description:
        "developing a prediction model of global population distribution for the next 50 years",
      badges: ["Teamwork", "Matlab", "Modeling", "LateX"],
      icon: aboutMathIcon,
    },
    {
      time: "2018.07 - 2018.08",
      title: "Harvard Summer School",
      description:
        "CSCI S-73 Developing Cross-Platform Mobile Apps with Xamarin. Developed a cross-platform mobile application MBTAManager, providing travelling information, alerts and schedule optimizations in Boston. Received high compliments from Miguel De Icaza, a well known SDE I've always admired.",
      badges: ["C#", "Xamarin", "Cross-Platform Development"],
      icon: aboutHarvardIcon,
    },
    {
      time: "2018.09 - 2019.06",
      title: "MSC Vice President of Technology",
      description:
        "Organized Tech-Salons for knowledge sharing. Also organizing and supervising school-wide Hackathon. Provided technical support for software development/optimization.",
      badges: ["Leadership", "Tech", "Communication"],
      icon: mscIcon,
    },
    {
      time: "2019.06 - 2019.08",
      title: "Frontend Internship at CertiK",
      description:
        "Developed a Google Chrome plug-in for peer point testing in the CertiK Testnet using JavaScript and CSS. Developed and restructured company webpage using React, deployed with Gatsby and Netlify.",
      badges: ["JS", "React", "Chrome", "CSS", "WebDev"],
      icon: certikIcon,
    },
    {
      time: "2020.09 - 2020.11",
      title: "Software Development Co-op at Alibaba",
      description:
        "Individually designed and realized frontend and backend of a data analysis subpage. Implemented Koa.js for data retrieval to apply a light-weighted but high efficent design.",
      badges: ["JS", "Node.js", "Vue.js", "Koa.js"],
      icon: alibabaIcon,
    },
  ],

  // Skills Section ---------------
  skills: [
    {
      img: htmlIcon,
      para: "HTML5",
    },
    {
      img: cssIcon,
      para: "CSS3",
    },
    {
      img: jsIcon,
      para: "JavaScript",
    },
    {
      img: reactIcon,
      para: "React",
    },
    {
      img: javaIcon,
      para: "Java",
    },
    {
      img: nodejsIcon,
      para: "Node.js",
    },
    {
      img: cppIcon,
      para: "C++",
    },
    {
      img: cSharpIcon,
      para: "C#",
    },
    {
      img: vuejsIcon,
      para: "Vue.js",
    },
    {
      img: androidIcon,
      para: "Android",
    },
    {
      img: mySQLIcon,
      para: "MySQL",
    },
    {
      img: springIcon,
      para: "Spring Boot",
    },
  ],

  //Resume
  resume: {
    sections: [
      { name: "Education", scroll: "#education" },
      { name: "Experience", scroll: "#experience" },
      { name: "Projects", scroll: "#projects" },
      { name: "Recognition & Leadership", scroll: "#recognitions" },
    ],
    summary: [
      "Master of Software Engineering graduate with advanced software engineering training and project experiences",
      "Specialist with track record in desktop and mobile application development, scripting and coding, web application design",
      "Expert in Java, proficient in C++, C#, JavaScript, MySQL",
      "Experience with Maven, Spring Boot, NodeJS, Koa, Vue.js, jQuery, React, OpenCV, Eigen, RxJava, RxAndroid"
    ],
    education: [
        {school: "University of California, Irvine", time:"Expected December 2022", location: "California, USA", title: "Master of Software Engineering",
           courses:['Neutral Network Programming', 'Applied Information Retrieval', 'Distributed Software Architecture', 'Reverse Engineering/Modeling', 'Software Security and Dependability']},
        {school: "Wuhan University", time:"September 2016 - June 2020", location: "Hubei, China", title: "B.Eng, Software Engineering",
            courses: ['Discrete Mathematics', 'Data Structure/Algorithms', 'Pattern Recognition', 'Software Architecture', 'Object-Orienterd Programming']}
    ],
    experience: [
        {company: 'CertiK', location: 'New York City, USA', title: 'Frontend Development Internship', time: 'June 2019 - August 2019',
            content: ['Developed and deployed a Google Chrome plug-in for peer point testing in the CertiK Testnet using JavaScript and CSS. Reduced process time from several minutes to one second for internal users and developers to switch from external nodes to Testnet.',
                    'Restructured company webpage single handedly using React. Designed a responsive user interface and ensured search engine optimization. Deployed and launched website using Netlify and Gatsby, improved website response time by 10%.',
                'Performed several development unit-testing with Jest integrated on Ubuntu 16.04. Maintained company website code base, individually detected and solved several potential vulnerabilities.']},
        {company: 'Alibaba Group', location: 'Beijing, China', title: 'Software Development Internship', time: 'September 2020 - November 2020',
            content: ['Realized an intuitive design for a data statistics website using Vue, HTML/CSS, conducted several statistical analyzations and produced over 20 informative statistical charts with echarts for multiple classification analysis.',
            'Enhanced an asynchronous call-back framework connecting to backend API using axios, improved webpage loading time by 200% through adapting lazy loading. ',
            'Implemented Koa and Node.js for backend design, ensured a comprehensive RESTful API, establishing a structured MVP design.']}
    ],
    project: [
        {title: 'MBTA Manager', subtitle:'Xamarin, C#', time: 'July 2018 - August 2018',
            content: ['Independently developed in only two weeks a cross platform mobile application using Xamarin, providing travelling information, alert reminder services and schedule optimizations in Boston. Rated N0 1 project in a Harvard class of 20+ competitive peers from leading non-US universities.', 'Established a concise and presentational code-base using MVVM design pattern, decreased startup time by 2 seconds.']},
        {title: 'Coupon Exchange Platform', subtitle: 'Android, Java, Retrofit, OkHttp, RxAndroid', time: 'June 2017 - November 2017',
            content: ['Implemented reactive programming with RxAndroid to enhance asynchronous performance', 'Reduced page rendering time by 30% by implementing Disk LRU Cache',
                'Established asynchronous and type-safe HTTP requests using Retrofit2 to interact with backend API']},
        {title: 'APAP-Processor', subtitle: 'C++, OpenCV, Eigen', time: 'September 2017 - February 2018',
            content: ['Performed highly precise feature points marking with SIFT and RANSAC, demonstrating 90% accuracy on public testing data up to 1500x2000 pixels large.',
                'Introduced super pixel segmentation in image preprocessing, increased image stitching validity by 2.8%. ']}
    ],
    recognition: [
        {title: 'Vice President of Technology', subtitle: 'Wuhan University Microsoft Student Club', time: 'September 2018 - June 2019', location: 'Hubei, China'},
        {title: 'Best Mobile Application Prize', subtitle: 'The 13th Citi Cup Financial Innovation and Application Competition', time: 'June 2017 - November 2017', location: 'Sichuan, China'},
        {title: 'Honorable Mention', subtitle: 'US Mathematical Contest in Modeling', time: 'February 2018', location: 'Hubei, China'},
        {title: 'Harvard University Summer Program', subtitle: 'CSCI S-73 Developing Cross-Platform Mobile Apps with Xamarin', time: 'July 2018 - August 2018', location: 'Massachusetts, USA'}
    ]
  },

  contactSubHeading: "Tell me more about yourself.",
  social: [
    { img: gmailIcon, url: "mailto:jason.tianrent@gmail.com" },
    { img: githubIcon, url: "https://github.com/Jason-TianrenTan" },
    { img: linkedinIcon, url: "https://www.linkedin.com/in/jason-tianrentan/" },
  ],
}
