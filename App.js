import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Flex = () => {
  return (
    <>
    <Text style={{fontSize: 36, fontWeight: 300, paddingTop: 24, paddingLeft: 16}}>Kartlarım</Text>
<View style={[ styles.container, {
  flexDirection: "row", alignItems: "top"
}]}>
  <View style={{ flex: 3, backgroundColor: "red", height: 120, paddingLeft: 12, paddingTop: 6, borderRadius: 12}}>
    <Text style={{ color: 'white'}}>Lugat</Text>
  </View>
  <View style={{ flex: 2, backgroundColor: "blue", height: 120, paddingLeft: 12, paddingTop: 6, borderRadius: 12}}>
    <Text style={{ color: 'white' }}>Özel Ders</Text>
  </View>
  <View style={{ flex: 2, backgroundColor: "green", height: 120, paddingLeft: 12,  paddingTop: 6, borderRadius: 12}}>
    <Text style={{ color: 'white' }}>Freelance Proje</Text>
  </View>
</View>
</>
  );
}

export default Flex;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
