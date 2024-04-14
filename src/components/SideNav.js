import React from 'react';
import { Link, useLocation } from 'react-router-dom';


import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
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
      
        <Link to="/admin/user/index" className={`block px-4 py-2 font-medium ${isActive('/admin/user/index', location.pathname)}`}>
          Utilisateurs
        </Link>
        </ListItem>
        
        <ListItem>
        <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>

        <Link to="/admin/activity/index" className={`block px-4 py-2 font-medium ${isActive('/admin/activity/index', location.pathname)}`}>
          Activité
        </Link>
        </ListItem>

      
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
        <Link to="/admin/formation/index" className={`block px-4 py-2 font-medium ${isActive('/admin/formation/index', location.pathname)}`}>
          Formation
        </Link>
        </ListItem>

        
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
        <Link to="/admin/stock/index" className={`block px-4 py-2 font-medium ${isActive('/admin/stock/index', location.pathname)}`}>
          Stock
        </Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>

        <Link to="/admin/maraude/index" className={`block px-4 py-2 font-medium ${isActive('/admin/maraude/index', location.pathname)}`}>
          Maraude
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
