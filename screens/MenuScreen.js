import React from 'react';
import {
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MenuScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentScreen: 'drinks'
    };
  };

  static navigationOptions = {
    title: 'Menu',
  };



  render() {
    if(this.state.currentScreen == 'drinks'){
      return (
            <View style={styles.container}>
              <View style={styles.menu}>
              <Button
                containerStyle={{width:300,}}
                onPress={this.onPressHandler('drinks')}
                title="Напитки"
                color="#841584"
              />
              <Button
                buttonStyle={styles.button}
                onPress={this.onPressHandler('dessert')}
                title="Десерт"
                color="#841584"
              />
              <Button
                buttonStyle={styles.button}
                onPress={this.onPressHandler('food')}
                title="Еда"
                color="#841584"
              />
              </View>  
              <ScrollView style={styles.scroll}>
                <Image style={styles.cardImage} source={{ uri: 'https://pp.userapi.com/c830609/v830609322/603c7/JayPNsKGe5M.jpg'}}/>
              </ScrollView>
            </View>
          );
    }

    if(this.state.currentScreen == 'dessert'){
      return (
        <View style={styles.container}>
          <View style={styles.menu}>
          <Button
            buttonStyle={styles.button}
            onPress={this.onPressHandler('drinks')}
            title="Напитки"
            color="#841584"
          />
          <Button
            buttonStyle={styles.button}
            onPress={this.onPressHandler('dessert')}
            title="Десерт"
            color="#841584"
          />
          <Button
            buttonStyle={styles.button}
            onPress={this.onPressHandler('food')}
            title="Еда"
            color="#841584"
          />
          </View>  
          <ScrollView style={styles.scroll}>
            <Image style={styles.cardImage} source={{ uri: 'https://pp.userapi.com/c830609/v830609322/603be/QhQhNzN_YgE.jpg'}}/>
          </ScrollView>
        </View>
      );
    }

    if(this.state.currentScreen == 'food'){
      return (
        <View style={styles.container}>
          <View style={styles.menu}>
          <Button
            buttonStyle={styles.button}
            onPress={this.onPressHandler('drinks')}
            title="Напитки"
            color="#841584"
          />
          <Button
            buttonStyle={styles.button}
            onPress={this.onPressHandler('dessert')}
            title="Десерт"
            color="#841584"
          />
          <Button
            buttonStyle={styles.button}
            onPress={this.onPressHandler('food')}
            title="Еда"
            color="#841584"
          />
          </View>  
          <ScrollView style={styles.scroll}>
            <Image style={styles.cardImage} source={{ uri: 'https://pp.userapi.com/c841532/v841532322/6139f/g1xlVELUyRA.jpg'}}/>
            <Image style={styles.cardImage} source={{ uri: 'https://pp.userapi.com/c841532/v841532322/613a8/LDppinAVKiM.jpg'}}/>
          </ScrollView>
        </View>
      );
    }
  }

onPressHandler = (type) => {
    return () => {
      this.setState({ currentScreen: type });
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e6e72',
  },
  scroll: {
    padding: 15,
    paddingTop: 0
  },
  menu:{
    flexDirection: 'row',    
  },
  cardImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  button:{
    width: '33%',
    padding: 50,

  }
});
