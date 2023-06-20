import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CryptoPriceList from './components/CryptoPriceList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <CryptoPriceList/>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
