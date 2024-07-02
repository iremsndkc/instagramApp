import React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import posts from '../data/posts';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2; 
const imageSize = screenWidth / numColumns - 40; 

const Search = () => {

  const renderProps = ({ item }) => (
    <TouchableOpacity activeOpacity={0.9}>
      <Image
        source={{ uri: item.image }}
        style={{ width: imageSize, height: imageSize, margin: 10, borderRadius:10}}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onFocus={() => console.log('Input focused')}
      />
      <FlatList
        data={posts}
        renderItem={renderProps}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.resultList}
        style={{ marginTop: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  input: {
    width: 400,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    top: 50,
    right: 15,
  },
  resultList: {
    marginTop: 20,
    right:10,
    
  },
});

export default Search;
