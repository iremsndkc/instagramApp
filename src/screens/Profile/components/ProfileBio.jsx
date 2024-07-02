import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Lily Rose Smith</Text>
      <Text style={styles.description}>
      🌸 Dreamer & Believer 🌸 
      🎀 Fashion | Travel | Smiles 🎀
      ✨ Spreading positivity one post at a time ✨
      📍 Paris
      💌 DM for collaborations! 
      </Text>
      <Text style={styles.link}> www.lilyrosesmithblog.com</Text>
      <TouchableOpacity style={styles.editProfileButon} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>
            Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    bio:{
        paddingHorizontal:15,
        paddingVertical:65,
        color:'#000000',
    },
    name:{
        fontWeight:'700',
        color:'#000000',
    },
    description:{
        marginVertical:5,
        color:'#000000',
    },
    link:{
        fontWeight:'400',
        color:'#004C8B',
    },
    editProfileButon:{
        borderColor:'#CBCBCB',
        borderWidth:1,
        marginVertical:10,
       
        alignItems:'center',
        paddingVertical:5,
        borderRadius:5,
    },
    editProfileText:{
        fontWeight:'700',
        color:'#000000',
    },
});