import React, { FC } from 'react';
import { View, StyleSheet, StatusBar, ViewStyle } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PaperProvider } from 'react-native-paper';

import { persistor, store } from './src/redux/store';
import Navigation from './src/navigation';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <View style={styles.container}>
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <Navigation />
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>

  );
};

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
});

export default App;