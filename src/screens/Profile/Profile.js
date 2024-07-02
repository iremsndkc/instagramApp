import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {BurgerMenu, Dropdown, Plus} from '../../Icons';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import posts from '../../data/posts';

export default function Profile() {
  return (
    <ScrollView>
      <ProfileHeader/>
      <ProfileInfo/>
      <ProfileBio/>
      <ProfileStory/>
      <FlatList keyExtractor={(item,index) => index.toString()}
      numColumns={numColumns}
      data={posts} 
      renderItem={renderProps}
      contentContainerStyle={styles.photoGrid}
      style={{marginTop: -10}}
      />
    </ScrollView>
  );
}
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
  console.log(imageSize);
  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.9}>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height:imageSize , margin: 2}}
      />
    </TouchableOpacity>
  );

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  photoGrid:{
    paddingHorizontal:2,

  },
})
  
