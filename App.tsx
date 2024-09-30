import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigation} from '@/navigation';
import store, {persistor} from '@/store';
import {Colors} from '@/utils/colors';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
        <Navigation />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
