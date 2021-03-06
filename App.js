import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Animated, } from 'react-native';

export default class Button extends React.Component {
componentWillMount(){
  this.animatedValue = new Animated.Value(1);
}
handlePressIn = ()=> {
  Animated.spring(this.animatedValue,{
    toValue:0.9
  }).start()
}
handlePressOut = ()=> {
  Animated.spring(this.animatedValue,{
    toValue:1,
    friction:20,
    tension:30,
  }).start()
}

 render(){
   const animationStyle={
     transform:[{scale:this.animatedValue}]
   }
  return (
    <View style={styles.container}>
     <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback   onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}} >
            <Animated.View style={[styles.button,animationStyle]} >
              <Text style={styles.text}>Sign up</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
     </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer:{
    flex:1,
    marginHorizontal:90,
    justifyContent:'center',
  },
  button:{
    padding:19,
    borderRadius:5,
    backgroundColor:"black",
    elevation:5,
  },
  text:{
    fontSize:16,
    color:'white',
    textAlign:'center'
  }
});
