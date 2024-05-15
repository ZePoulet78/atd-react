import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const ProfileSideNav = () => {
  const location = useLocation();
  const [openActivities, setOpenActivities] = useState(false);

  const handleOpen = () => {
    setOpenActivities(!openActivities);
  };

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
          <Link
            to="/profile/volunteer/user"
            className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive(
              '/profile/volunteer/user',
              location.pathname
            )}`}
          >
            <FormattedMessage id="profile" />
          </Link>
        </ListItem>
        <ListItem>
          {/* <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix> */}
          <Accordion open={openActivities} onToggle={handleOpen}>
            <AccordionHeader onClick={handleOpen}>
              <FormattedMessage id="activities" />
            </AccordionHeader>
            <AccordionBody>
              <List>
                <ListItem>
                  <Link
                    to="/profile/vulnteer/activities"
                    className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive(
                      '/activities',
                      location.pathname
                    )}`}
                  >
                    <FormattedMessage id="availableActivities" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="/activities/participating"
                    className={`block px-4 py-2 font-medium text-decoration-none text-dark ${isActive(
                      '/activities/participating',
                      location.pathname
                    )}`}
                  >
                    <FormattedMessage id="participatingActivities" />
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
        </ListItem>
      </List>
    </Card>
  );
};

const isActive = (expectedPath, currentPath) => {
  return currentPath.startsWith(expectedPath) ? 'text-blue-500' : '';
};

export default ProfileSideNav;
