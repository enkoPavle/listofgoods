import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Navigation} from '@/navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </>
  );
}

export default App;
