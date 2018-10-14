import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  ButtonGroup,
  Button,
} from 'react-native-elements'

export default class MenuScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  static navigationOptions = {
    title: 'Menu',
    headerStyle: {
      backgroundColor: '#1A1A1D',
    },
    headerTitleStyle: {
      color: '#C3073F',
      textAlign: 'center',
      flex: 1
    }
  };



  render() {
    const buttons = ['Напитки', 'Десерты', 'Еда']
    const { selectedIndex } = this.state

    if(this.state.selectedIndex == 0){
      return (
            <View style={styles.container}>
              <View style={styles.menu}>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons} 
                containerStyle={{
                 height: 50, width: "100%", borderRadius: 0, borderWidth: 0,
                 marginLeft : 0, marginTop: 0, borderColor: '#C3073F', borderWidth: 2,
                }}
                innerBorderStyle={{width: 2, color: '#C3073F' }}
               
                buttonStyle={{ backgroundColor: '#29292e',  }}
                selectedTextStyle={{color: '#C3073F', }}
                selectedButtonStyle={{ backgroundColor: '#1A1A1D',  }}
              />
              </View>  
              <ScrollView style={styles.scroll}>
                <Image style={styles.cardImage} source={{ uri: 'https://pp.userapi.com/c830609/v830609322/603c7/JayPNsKGe5M.jpg'}}/>
              </ScrollView>
            </View>
          );
    }

    if(this.state.selectedIndex == 1){
      return (
        <View style={styles.container}>
          <View style={styles.menu}>
          <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons} 
                containerStyle={{
                 height: 50, width: "100%", borderRadius: 0, borderWidth: 0,
                 marginLeft : 0, marginTop: 0, borderColor: '#C3073F', borderWidth: 2,
                }}
                innerBorderStyle={{width: 2, color: '#C3073F' }}
               
                buttonStyle={{ backgroundColor: '#29292e',  }}
                selectedTextStyle={{color: '#C3073F', }}
                selectedButtonStyle={{ backgroundColor: '#1A1A1D',  }}
              />
          </View>  
          <ScrollView style={styles.scroll}>
            <Image style={styles.cardImage} source={{ uri: 'https://pp.userapi.com/c830609/v830609322/603be/QhQhNzN_YgE.jpg'}}/>
          </ScrollView>
        </View>
      );
    }

    if(this.state.selectedIndex == 2){
      return (
        <View style={styles.container}>
          <View style={styles.menu}>
          <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons} 
                containerStyle={{
                 height: 50, width: "100%", borderRadius: 0, borderWidth: 0,
                 marginLeft : 0, marginTop: 0, borderColor: '#C3073F', borderWidth: 2,
                }}
                innerBorderStyle={{width: 2, color: '#C3073F' }}
               
                buttonStyle={{ backgroundColor: '#29292e',  }}
                selectedTextStyle={{color: '#C3073F', }}
                selectedButtonStyle={{ backgroundColor: '#1A1A1D',  }}
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
    backgroundColor: "rgba(92, 99,216, 1)",
    padding: 15,
    borderRadius: 0,
  },
  containerBtn:{
    width: "33%",
    margin: 0,
  }
});