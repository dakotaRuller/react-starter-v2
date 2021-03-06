//Node Modules
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

//Scripts
import appRoutes from 'scripts/constants/appRoutes';

//Components
import ThemeSwitcher from './sub-components/ThemeSwitcher';

const Navbar = () => {
  const [activeMobileNav, updateActiveMobileNav] = useState(false);
  const [navItems, updateNavItems] = useState([
    {
      content: 'Getting Started',
      route: appRoutes.home,
    },
    {
      content: 'Webpack/Babel',
      route: appRoutes.webpackBabelOverview,
    },
    {
      content: 'Context Over Redux',
      route: appRoutes.contextOverview,
    },
    {
      content: 'Testing',
      route: appRoutes.testingOverview,
    },
    {
      content: 'Everything Else',
      route: appRoutes.everythingElse,
    },
  ]);

  return (
    <header className="navbar">
      <div
        tabIndex="0"
        className={`mobile-navbar-toggle ${activeMobileNav ? 'active' : ''}`}
        onClick={() => updateActiveMobileNav(!activeMobileNav)}
      >
        <div className={'top'} />
        <div className={'center'} />
        <div className={'bottom'} />
      </div>
      <div className={`main-nav-items ${activeMobileNav ? 'active' : ''}`}>
        {navItems.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.route}
            onClick={() => updateActiveMobileNav(false)}
          >
            {navItem.content}
          </Link>
        ))}
      </div>

      <ThemeSwitcher />
    </header>
  );
};

export default withRouter(Navbar);
