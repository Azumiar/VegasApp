import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Личный кабинет',
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
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
            <Image style={styles.avatar} source={{ uri: 'https://pp.userapi.com/6wSmA8oVz8SOXRoZ931FC4emq5kds8Gz8Slgtw/6pJJry1eveg.jpg?ava=1' }}/>
            <Text style={styles.userName}>Бекир Шабутов</Text>
        </View>
        <View style={styles.bonus}>
          <View style={styles.row}>
            <View style={[styles.cell, styles.cellTopLeft]}>
              <TabBarIcon
                focused={true}
                name={'md-checkmark-circle'}
                size={60}
              />
            </View>
            <View style={styles.cell}>
            <TabBarIcon
                focused={true}
                name={'md-checkmark-circle'}
                size={60}
              />
            </View>
            <View style={[styles.cell, styles.cellTopRight]}>

            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, styles.cellBottomLeft]}>

            </View>
            <View style={styles.cell}>

            </View>
            <View style={[styles.cell, styles.cellBottomRight]}>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e6e72', 
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#C3073F',
    borderWidth: 3,
  },
  userName: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#1A1A1D',
  },
  bonus: {
    marginTop: 20,
    backgroundColor: '#1A1A1D',
    height: 200,
    width: '100%',
    borderRadius: 15,
  },
  row: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cell: {
    width: 107,
    height: 100,
    borderColor: '#C3073F',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTopLeft: {
    borderTopLeftRadius: 15,
  },
  cellTopRight: {
    borderTopRightRadius: 15,
  },
  cellBottomLeft: {
    borderBottomLeftRadius: 15,
  },
  cellBottomRight: {
    borderBottomRightRadius: 15,
  },
});
