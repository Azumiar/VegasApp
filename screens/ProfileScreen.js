import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import config from '../config/clientConfig';
import AsyncImage from '../components/AsyncImage';


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

  state = {
    loading: true,
    avatarUrl: null,
    name: null,
    checks: 0,
  }

  avatar = {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#C3073F',
    borderWidth: 1,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.userInfo}>
              <AsyncImage style={this.avatar} source={{ uri: this.loading ? '' : this.state.avatarUrl }}/>
              <Text style={styles.userName}>{this.loading ? 'Загрузка...' : this.state.name}</Text>
          </View>
        </View>
        <View style={styles.bonus}>
          <View style={styles.row}>
            <View style={[styles.cell,]}>
              {
                this.state.checks=="4" && <TabBarIcon focused={true} name={'md-checkmark-circle'} size={60}/>
              } 
            </View>
            <View style={styles.cell}>
              {
                this.state.checks>=2 && <TabBarIcon focused={true} name={'md-checkmark-circle'} size={60}/>
              } 
            </View>
            <View style={[styles.cell,]}>
              {
                this.state.checks>=3 && <TabBarIcon focused={true} name={'md-checkmark-circle'} size={60}/>
              } 
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.cell, ]}>
              {
                this.state.checks>=4 && <TabBarIcon focused={true} name={'md-checkmark-circle'} size={60}/>
              } 
            </View>
            <View style={styles.cell}>
              {
                this.state.checks>=5 && <TabBarIcon focused={true} name={'md-checkmark-circle'} size={60}/>
              } 
            </View>
            <View style={[styles.cell,]}>
              {
                this.state.checks==6 && <TabBarIcon focused={true} name={'md-checkmark-circle'} size={60}/>
              } 
            </View>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    fetch(`http://${config.localIp}:3000/api/users`)
      .then(res => res.json())
      .then(res => {
        res = res[0];
        this.setState({
          loading: false,
          name: res.name,
          avatarUrl: res.avatarUrl,
          checks: res.checks,
        })
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e6e72',
  },
  userInfo: {
    flexDirection: 'row',
    padding: 20,
  },
  userName: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#C3073F',
  },
  bonus: {
    marginTop: 10,
    backgroundColor: '#1A1A1D',
    height: 200,
    width: '100%',
  },
  row: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cell: {
    width: 120,
    height: 100,
    borderColor: '#C3073F',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    marginTop: 7.5,
    backgroundColor: '#1A1A1D',
  },
});
