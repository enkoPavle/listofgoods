import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigation} from '@/navigation';
import store, {persistor} from '@/store';
import {Colors} from '@/utils/colors';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
          <Navigation />
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}

export default App;
