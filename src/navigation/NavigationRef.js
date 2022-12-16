import React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  console.log('name----------', name)
  if (navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};

export function goBack() {
  navigationRef.current?.goBack();
}
