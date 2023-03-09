/* eslint-disable indent */
import backend from './images/icons/backend.png';
import fronted from './images/icons/programming.png';
import cloud from './images/icons/cloud.png';
import electronics from './images/icons/cpu.png';

const iconList = [
  {
    key: 1,
    name: 'Backend',
    img: backend,
    skills: ['Java (JavaEE, Spring, Quarkus), Kotlin, C++ (QT Framework), Python, PHP',
            'MySQL, PostgreSQL, OracleDB, MongoDB',
            'Docker, Kubernetes',
            'SOAP, REST'],
  },
  {
    key: 2,
    name: 'Frontend',
    img: fronted,
    skills: ['HTML, CSS, JavaScript',
            'React, TailwindCSS'],
  },
  {
    key: 3,
    name: 'Cloud',
    img: cloud,
    skills: ['AWS, DigitalOcean, Heroku'],
  },
  {
    key: 4,
    name: 'Electronic',
    img: electronics,
    skills: ['Embedded Systems',
            'ESP32, Arduino, RaspberryPI'],
  },
];

export default iconList;
