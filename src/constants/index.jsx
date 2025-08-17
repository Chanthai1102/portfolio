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
import camel from '../assets/camel.svg'
import eureka from '../assets/spring-cloud.svg'

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
        time : 'October 2022 - July-2024',
        place : 'I.Q SYSTEM CO., LTD',
        position : 'Team Leader, IT Support',

        description : 'Lead a team of 5 IT support specialists to ensure infrastructure stability, manage network and printer systems, and deliver fast, effective technical support to over 150 users across the company.',

        activities : [
            // Team Performance
            'Reduced average ticket resolution time by 35% through a priority-based ticketing system and regular staff training focused on issue categorization and first-level resolution.',

            // Process Improvement
            'Designed and launched an internal IT knowledge base and self-help portal, lowering repeated support tickets by 30% and improving overall IT efficiency.',

            // Project Leadership
            'Led the migration of 120+ employee workstations to Windows 11, including software compatibility checks and data backups, completing the project with zero disruption to operations.',

            // Crisis Management
            'Responded to a major network outage caused by switch failure, restoring connectivity in under 90 minutes and establishing preventive maintenance checks for all core networking devices.',

            // Networking & Printer Management
            'Implemented centralized printer management with access control, reducing toner usage by 25% and increasing uptime across shared departments. Also maintained and monitored LAN/WAN infrastructure, resolving connectivity issues and optimizing network performance.'
        ],
        technologies : []
    },
    {
        time : 'July 2024 - December-2025',
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
        time : 'January-2025 - Present',
        place : 'Skyvva Intergrate App',
        position : 'Junior Java Developer',
        description : 'Developing Java-based integration solutions using Spring Boot and Apache Camel, focused on enterprise data processing and system integration within SAP Cloud Platform environments.',

        activities : [
            'Built integration flows using Apache Camel for message routing and transformation',
            'Maintained and extended Spring Boot microservices within SAP CPI environment',
            'Developed and consumed REST/SOAP APIs for business integrations',
            'Handled XML and XSLT for data mapping and validation',
            'Worked with cloud connectors, security credentials, and SAP iFlow deployment',
            'Collaborated with cross-functional teams on scalable, event-driven architecture'
        ],

        technologies : [
            { name : 'Spring Boot', icon : spring_boot },
            { name : 'Apache Camel', icon : camel },
            // { name : 'SAP CPI', icon : sap },
            // { name : 'XML/XSLT', icon : xml },
            { name : 'Git', icon : git }
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
    { name: "Tailwind CSS", icon: tail_css },
    { name: "Docker", icon: docker },
    { name: "Mongo DB", icon: md },
    { name: "Hazelcast", icon: hazelcast },
    {name: "Eureka", icon: eureka}
]

