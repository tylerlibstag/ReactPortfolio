import {
    PasswordGenerator,
    DayPlanner,
    GameRecommender,
    WeatherDashboard,
    Cinder,
    WorkoutTracker,
    Boroughd,
    EmployeeDirectory
 
} from "../../images"

export const portfolioArr = [
    {
        id: 0,
        title: "Borough'd",
        description: "A video first apartment finder app that gives users the ability to search for, and to list available units.",
        image: Boroughd,
        github: "https://github.com/tylerlibstag/muchXc1te",
        deployedApp: "https://aptreact.web.app/",
        languages: ["REACT.js", "/", "JAVASCRIPT", "/", "CSS", "/", "Mongo.DB", "/", "Multer", "/", "FireBase"]
        
    },
    {
        id: 1,
        title: "Employee Directory",
        description: "An app that finds employees when their name is typed into the search bar. The names are generated using an api",
        image: EmployeeDirectory,
        github: "https://github.com/tylerlibstag/Employee_Directory",
        deployedApp: "https://employeeuser4534.herokuapp.com/",
        languages: ["React.Js", "/", "JAVASCRIPT", "/", "CSS","/","Axios"]
        
    },
  
    {
        id: 2,
        title: "Work Day Planner",
        description: "Displays current day scheduling and allows users to create hourly events. Events are color-coded by time of day: past hour is in gray, current hour is in red, future hours are in green.",
        image: DayPlanner,
        github: "https://github.com/tylerlibstag/day-planner",
        deployedApp: "https://tylerlibstag.github.io/day-planner/",
        languages: ["HTML", "/", "JAVASCRIPT", "/", "CSS", "/","JQUERY"]
        
    },

    {
        id: 3,
        title: "Weather Dashboard",
        description: "An app in which the user provides a city name which then gives back a 5 day forcast of the weather.",
        image: WeatherDashboard,
        github: "https://github.com/tylerlibstag/Weather",
        deployedApp: "https://tylerlibstag.github.io/Weather/",
        languages: ["HTML", "/", "CSS", "/", "Javascript", "/", "jQuery"]
        
    },
 

    {
        id: 4,
        title: "Workout Tracker",
        description: "This app allows the user to record their excercises. The user is allows given an option to continue an old excercise while also checking the stats of their weekly progress. ",
        languages: ["HTML","/", "CSS","/", "Javascript","/", "Node.js","/", "Express.js","/", "MongoDB"],
        image: WorkoutTracker,
        github: "https://github.com/tylerlibstag/WorkOutTracker",
        deployed: "https://sleepy-cove-40896.herokuapp.com/",
        
    },
    {
        id: 5,
        title: "Cinder",
        description: "An app that allows Bootcamp,university, or students in education to keep in contact with each other. the users are also able to post old projects and current skills they have that may be relevant to future projects. My responsibilites include, using jQuery to create a location recommender, and also routing the pages to connect with each other using express.",
        languages: ["HTML", "/", "CSS", "/", "Javascript", "/", "REACT.js", "/", "Node.js"],
        image: Cinder,
        github: "https://github.com/BubblyRobot/project2-cinder",
        deployedApp: "https://project2-cinder.herokuapp.com/",
        
    },
    {
        id: 6,
        title: "Game Recommender",
        description: "An app that reccomends games for new and experienced gamers based off of user criteria.  the app also gives news on specified games and even has a random selection generator. I was responsible for finding and calling api functions using Jquery.",
        image: GameRecommender,
        github: "https://github.com/microxgleek94/ColumbiaProject_-1",
        deployedApp: "https://microxgleek94.github.io/ColumbiaProject_-1/",
        languages: ["HTML", "/", "JAVASCRIPT", "/", "CSS", "/","JQUERY"]
    },
    {
        id: 7,
        title: "Password Generator",
        description: "An app that recommends a password based off of user criteria",
        image: PasswordGenerator,
        github: "https://github.com/tylerlibstag/tylerlibstags_password_generator",
        deployedApp: "https://tylerlibstag.github.io/tylerlibstags_password_generator/",
        languages: ["HTML", "/", "JAVASCRIPT", "/", "CSS"]
        
    }
    
];