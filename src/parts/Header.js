import React from "react"; // Import library React
import Button from "elements/Button"; // Import Button component from elements folder
import BrandIcon from "parts/IconText"; // Import BrandIcon component from parts folder
import { useLocation } from "react-router-dom"; // Import useLocation hook from react-router-dom

export default function Header() {
  // Declare functional component Header
  const location = useLocation(); // Declare a constant variable location and assign it the result of the useLocation hook call

  const getNavLinkClass = (path) => {
    // Declare a function called getNavLinkClass that takes in a path parameter
    return location.pathname === path ? " active" : ""; // If the current location pathname matches the path parameter, return a string with the value "active", otherwise return an empty string
  };

  return (
    // Render the following JSX
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon /> {/* Render the BrandIcon component */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                {/* Render a list item with a class name determined by the result of calling getNavLinkClass with "/" as a parameter */}
                <Button className="nav-link" type="link" href="/">
                  {/* Render a Button component with a class name of "nav-link", type of "link", and href of "/" */}
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                {/* Render a list item with a class name determined by the result of calling getNavLinkClass with "/browse-by" as a parameter */}
                <Button className="nav-link" type="link" href="/browse-by">
                  {/* Render a Button component with a class name of "nav-link", type of "link", and href of "/browse-by" */}
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                {/* Render a list item with a class name determined by the result of calling getNavLinkClass with "/stories" as a parameter */}
                <Button className="nav-link" type="link" href="/stories">
                  {/* Render a Button component with a class name of "nav-link", type of "link", and href of "/stories" */}
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                {/* Render a list item with a class name determined by the result of calling getNavLinkClass with "/agents" as a parameter */}
                <Button className="nav-link" type="link" href="/agents">
                  {/* Render a Button component with a class name of "nav-link", type of "link", and href of "/agents" */}
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
