import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text, TextInput, onChangeText, FlatList } from 'react-native';
import Products from "./products.json"
import Card from './components/Card';


export default function App() {

  const renderProduct = ({ item }) => <Card product={item} />

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>PATIKA STORE</Text>
        <TextInput style={styles.text_input} onChangeText={onChangeText} placeholder='Ara...'></TextInput>
      </View>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          horizontal={false}
          keyExtractor={item => item.u_id.toString()}
          data={Products}
          renderItem={renderProduct}
        />
      </View>
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 8,
  },
  text_input: {
    backgroundColor: '#e0e0e0',
    fontSize: 18,
    padding: 12,
    borderRadius: 10
  }
})
