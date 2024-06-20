// Components
import Milestones from './_molecules/milestones';

const DATA = [
  {
    title: 'Associate Software Engineer',
    subtitle: 'Tekion Corp.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elit quis leo rutrum gravida at et eros. Nulla eu porttitor tellus, sit amet posuere odio. Cras vestibulum tellus dolor. Duis vel convallis velit, vel consectetur ligula. Vestibulum porttitor lacus eget est facilisis, a eleifend tellus lacinia. Praesent in `  posuere risus. Ut quis erat dictum, facilisis libero ac, accumsan magna.',
    duration: '2023 - 2024',
    skills: ['REACT', 'NEXT_JS', 'TAILWIND_CSS', 'REDUX', 'STORYBOOK'],
    image: '/tekion.webp',
  },
  {
    title: 'Associate Software Engineer Intern',
    subtitle: 'Tekion Corp.',
    duration: '2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elit quis leo rutrum gravida at et eros. Nulla eu porttitor tellus, sit amet posuere odio. Cras vestibulum tellus dolor. Duis vel convallis velit, vel consectetur ligula. Vestibulum porttitor lacus eget est facilisis, a eleifend tellus lacinia. Praesent in `  posuere risus. Ut quis erat dictum, facilisis libero ac, accumsan magna.',
    skills: ['REACT', 'SCSS', 'REDUX', 'STORYBOOK'],
    image: '/tekion.webp',
  },
  {
    title: 'Saptang Labs.',
    subtitle: 'Full Stack Developer Intern',
    duration: '2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elit quis leo rutrum gravida at et eros. Nulla eu porttitor tellus, sit amet posuere odio. Cras vestibulum tellus dolor. Duis vel convallis velit, vel consectetur ligula. Vestibulum porttitor lacus eget est facilisis, a eleifend tellus lacinia. Praesent in `  posuere risus. Ut quis erat dictum, facilisis libero ac, accumsan magna.',
    skills: ['REACT', 'NEXT_JS', 'MONGO_DB', 'PYTHON', 'PANDAS'],
    image: '/saptang-labs.webp',
  },
  {
    title: 'B.Tech in Computer Science and Engineering',
    subtitle: 'Indian Institute of Information Technology Guwahati',
    duration: '2019 - 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elit quis leo rutrum gravida at et eros. Nulla eu porttitor tellus, sit amet posuere odio. Cras vestibulum tellus dolor. Duis vel convallis velit, vel consectetur ligula. Vestibulum porttitor lacus eget est facilisis, a eleifend tellus lacinia. Praesent in `  posuere risus. Ut quis erat dictum, facilisis libero ac, accumsan magna.',
    image: '/iiitg.png',
  },
  {
    title: 'High School',
    subtitle: 'Air Force School Viman Nagar',
    duration: '2017 - 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elit quis leo rutrum gravida at et eros. Nulla eu porttitor tellus, sit amet posuere odio. Cras vestibulum tellus dolor. Duis vel convallis velit, vel consectetur ligula. Vestibulum porttitor lacus eget est facilisis, a eleifend tellus lacinia. Praesent in `  posuere risus. Ut quis erat dictum, facilisis libero ac, accumsan magna.',
    image: '/afsvn.jpg',
  }
];

function About() {
  return (
    <Milestones timeline={DATA} />
  );
}

export default About;
