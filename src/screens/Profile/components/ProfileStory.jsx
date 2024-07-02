import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileStory() {
  return (
    <View style={styles.profileHeader}>             
    <ScrollView horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.stories} >
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image source={{
                uri: 'https://i.pinimg.com/564x/3b/ce/c9/3bcec9e6e503ea2ab4d87fefb82a0f6f.jpg',
            }}
            style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>💅🏻</Text>
        </View>
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image source={{
                uri: 'https://i.pinimg.com/564x/01/cd/1e/01cd1ed023c5fde2a5e264f0b756caee.jpg',
            }}
            style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>🧁</Text>
        </View>
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image source={{
                uri: 'https://i.pinimg.com/474x/cf/bf/ce/cfbfcecb345fcda3a001dffff50f0c63.jpg',
            }}
            style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>🌷</Text>
        </View>
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image source={{
                uri: 'https://i.pinimg.com/474x/c5/c9/5c/c5c95c2bb5fe6643208c3650bc32abd6.jpg',
            }}
            style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>🐾</Text>
        </View>
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image source={{
                uri: 'https://i.pinimg.com/474x/ce/a1/58/cea158cdcbf2422b01b4033667f09e6e.jpg',
            }}
            style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>🏖</Text>
        </View>
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image source={{
                uri: 'https://i.pinimg.com/474x/ea/fe/f9/eafef945fe441afd5a6424ae21fdb526.jpg',
            }}
            style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>✨</Text>
        </View>
        <View style={styles.story}>
            <View style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <TouchableOpacity style={styles.newStoryButton}>
                <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>
            
            </View>
            <Text style={styles.storyLabel}>add</Text>
        </View>
    </ScrollView>
  </View>
  )
}
const styles = StyleSheet.create({
    stories:{
        paddingHorizontal:8,
    },
    story:{
        marginRight:10,
        alignItems:'center',
    },
    storyImage:{
        width:60,
        height:60,
        borderRadius:30,
    },
    storyLabel:{
        textAlign:'center',
        color:'#000000',
        marginTop:5,
    },
    profileHeader: {
        bottom:50,
    },
    plusSign:{
        fontSize:25,
    },
    newStoryButton:{
        justifyContent:'center',
        alignItems:'center',
    },
    
})