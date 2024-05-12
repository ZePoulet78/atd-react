import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const SideNav = () => {
  const location = useLocation();

  return (
    <Card className="h-auto w-64 p-4 shadow-xl">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Menu
          </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
      
        <Link to="/admin/user/index" className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive('/admin/user/index', location.pathname)}`}>
          <FormattedMessage id="users" />
        </Link>
        </ListItem>
        
        <ListItem>
        <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>

        <Link to="/admin/activity/index" className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive('/admin/activity/index', location.pathname)}`}>
          <FormattedMessage id='activities' />
        </Link>
        </ListItem>

      
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
        <Link to="/admin/formation/index" className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive('/admin/formation/index', location.pathname)}`}>
          <FormattedMessage id='trainings' />
        </Link>
        </ListItem>

        
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/stock/index" className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive('/admin/stock/index', location.pathname)}`}>
            <FormattedMessage id='stocks' />
          </Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>

          <Link to="/admin/maraude/index" className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive('/admin/maraude/index', location.pathname)}`}>
            <FormattedMessage id='marauds' />
          </Link>
        </ListItem>

        
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>

          <Link to="/admin/roles/index" className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive('/admin/maraude/index', location.pathname)}`}>
            <FormattedMessage id='roles' />
          </Link>
        </ListItem>
        </List>
      </Card>

  );

};

const isActive = (expectedPath, currentPath) => {
  return expectedPath === currentPath ? 'text-blue-500' : '';
};

export default SideNav;
