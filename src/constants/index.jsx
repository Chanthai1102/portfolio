import javaScript from '../assets/javascript.svg'
import git from '../assets/git.svg'
import java from '../assets/java.svg'
import mysql from '../assets/mysql.svg'
import postgresql from '../assets/postgresql.svg'
import spring_boot from '../assets/spring-boot.svg'
import gitlab from '../assets/gitlab.svg'
import react from '../assets/react.svg'
import redis from '../assets/redis.svg'
import postman from '../assets/postman.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import node_js from '../assets/node-js.svg'
import tail_css from '../assets/tailwind-css.svg'
import docker from '../assets/docker.svg'
import md from '../assets/mongodb.svg'
import sqlserver from '../assets/sqlserver.svg'
import hazelcast from '../assets/hazelcast-1.svg'

export const ABOUT_TEXT = 'With over two year of experience in the tech industry. I am an experienced back-end' +
    'developer with a focus on back-end development. My journey has been marked by ' +
    'collaborations on diverse software projects. allowing me to hone my keen eye for ' +
    'optimization and productivity. I pride myself on my ability to navigate and thrive in dynamic ' +
    'environments. consistently pushing the boundaries of what i can learn and achieve';
export const ABOUT_TEXT_CO = 'Looking forward. I am eager to continue contributing to impactful projects and teams.' +
    'As a co-founder of Only-Admin. I am passionately dedicated to turning innovative ideas' +
    'into reality. My goal is to leverage my skills in full-stack development. particularly in th ' +
    'back-end. to drive innovation and efficiency. As I grow in my career. I remain committed to ' +
    'excellence, continuous learning. and the collaborative spirit that has characterized my ' +
    'journey so fair';
export const DATA_EXPERIENCE = [
    {
        time : 'July 2024 - Present',
        place : 'KiloIT',
        position : 'Back-End Developer Intern',
        description :'I lead the development of diverse project. dedicating myself to creating\n' +
            '                            platforms that meet client needs and transform their concepts\n' +
            '                            into tangible results.',
        activities : [
            'Back-end infrastructure development with Spring Boot',
            'API development and management with Spring Boot',
            'RESTful API consumption with Spring Boot',
            'Database design and implementation with MySQL'
        ],
        technologies : [
            { name : 'Spring Boot', icon : spring_boot }, { name: 'docker', icon : docker }, {name : 'MySQL', icon : mysql },
            { name: "Postman", icon : postman }, { name: "Git", icon: git }, { name: "GitLab", icon: gitlab },
            { name: "Redis", icon: redis }
        ]
    },
    {
        time : 'July 2024 - Present',
        place : 'KiloIT',
        position : 'Back-End Developer Intern',
        description :'I lead the development of diverse project. dedicating myself to creating\n' +
            '                            platforms that meet client needs and transform their concepts\n' +
            '                            into tangible results.',
        activities : [
            'Back-end infrastructure development with Spring Boot',
            'API development and management with Spring Boot',
            'RESTful API consumption with Spring Boot',
            'Database design and implementation with MySQL'
        ],
        technologies : [
            { name : 'Spring Boot', icon : spring_boot }, { name: 'docker', icon : docker }, {name : 'MySQL', icon : mysql },
            { name: "Postman", icon : postman }, { name: "Git", icon: git }, { name: "GitLab", icon: gitlab },
            { name: "Redis", icon: redis }, {name: "SQL Server", icon: sqlserver}
        ]
    }
]
export const DATA_EDUCATION = [
    {
        time : 'May 2021 - Present',
        place : 'Royal University of Phnom Penh',
        position : 'Bachelor of Science in Computer Science',
        description :'RUPP is one of Cambodia leading universities, known for fostering innovation and producing highly skilled graduates in science and technology. ' +
            'Its Computer Science program is particularly recognized for its emphasis on both technical and soft skills, ' +
            'ensuring graduates are competitive in the global job market',
        activities : [
            'Analysis Database development',
            'Management Information Systems',
            'Network Data Communication',
            'Desktop App Build On Java',
            'Web Design'
        ],
        technologies : [
            {name : 'SQL Server', icon : sqlserver},{name: 'Java', icon : java}, {name: 'HTML', icon : html},
            {name: 'CSS', icon: css}, {name: 'JavaScript', icon : javaScript},
        ]
    }
]

export const DATA_EXPERIENCE_SE = [
    {
        type : 'Experience',
        data : DATA_EXPERIENCE,
        animation : 'fade-right'
    },
    {
        type: 'Education',
        data: DATA_EDUCATION,
        animation: 'fade-left'
    }
]

export const DATA_SKILL = [
    { name: "Javascript", icon: javaScript },
    { name: "Git", icon: git },
    { name: "GitLab", icon: gitlab },
    { name: "Java", icon: java },
    { name: "MySQL", icon: mysql },
    { name: "Postgresql", icon: postgresql },
    { name: "Spring Boot", icon: spring_boot },
    { name: "React JS", icon: react },
    { name: "redis", icon: redis },
    { name: "postman", icon: postman },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "NODE JS", icon: node_js},
    { name: "Tailwind CSS", icon: tail_css },
    { name: "Docker", icon: docker },
    { name: "Mongo DB", icon: md },
    { name: "Hazelcast", icon: hazelcast },
]

