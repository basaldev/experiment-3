import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

export function Navbar(props: any) {
  return (
    <BottomNavigation value={props.value} showLabels>
      <BottomNavigationAction onClick={props.routes[0]} label="Training" icon={<OndemandVideoIcon />} />
    </BottomNavigation>
  );
}
