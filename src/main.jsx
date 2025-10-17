import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Skills from './Components/Skills/Skills.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import ProjectDetails from './Components/Projects/ProjectDetails.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "skills", Component: Skills },
      { path: "about", Component: About },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetails },
      { path: "contact", Component: Contact },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
