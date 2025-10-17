// import sportsClub from '../../../public/sports-club.png';
// import FoodTracker from '../../../public/FoodTracker.png';
// import RecipeBook from '../../../public/RECIPE BOOK.png';
import sportsClub from '../../assets/sports-club.png';
import FoodTracker from '../../assets/FoodTracker.png';
import RecipeBook from '../../assets/RECIPE BOOK.png';

const projects = [
  {
    id: '1',
    name: 'Sports Club Booking',
    image: sportsClub,
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB',],
    brief: 'A full-stack sports club booking system with role-based dashboards.',
    live: 'https://verdant-heliotrope-b7e8e3.netlify.app/',
    githubClient: 'https://github.com/yourname/sports-club-client',
    challenges: 'Implementing role-based routes and payment flow.',
    improvements: 'Add server-side pagination, better UI for admin.'
  },
  {
    id: '2',
    name: 'FoodTracker',
    image: FoodTracker,
    tech: ['Tailwind', 'React', 'Express', 'MongoDB'],
    brief: 'A platform for booking guides, browsing packages and stories.',
    live: 'https://super-cendol-bcb1c7.netlify.app/',
    githubClient: 'https://github.com/yourname/tourist-guide-client',
    challenges: 'Designing booking logic and coupon integration.',
    improvements: 'Add multilingual support, optimize images.'
  },
  {
    id: '3',
    name: 'RecipeBook',
    image: RecipeBook,
    tech: ['HTML', 'TAILWIND', ' JS','REACT'],
    brief: 'A landing page built for a modern Website.',
    live: 'https://lustrous-torrone-8dfdbb.netlify.app/',
    githubClient: 'https://github.com/yourname/portfolio-assignment',
    challenges: 'Pixel-perfect responsive layout.',
    improvements: 'Add CMS to manage content.'
  }
];

export default projects;
