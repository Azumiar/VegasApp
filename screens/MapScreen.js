import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { MapView } from "expo";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Как нас найти',
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
        <View style={styles.contactInfo}>
            <Text style={styles.header}>Наши контакты</Text>
            <View style={styles.infoGroup}>
                <TabBarIcon
                    focused={false}
                    name={'md-call'}
                    size={22}
                />
                <Text style={styles.infoText}>+7(978) 713-92-05</Text>
            </View>
            <View style={styles.infoGroup}>
                <TabBarIcon
                    focused={false}
                    name={'md-pin'}
                    size={22}
                />
                <Text style={styles.infoText}>Пл. Советская, 34</Text>
            </View>
            <View style={styles.infoGroup}>
                <TabBarIcon
                    focused={false}
                    name={'md-link'}
                    size={22}
                />
                <Text style={styles.infoText}>vk.com/vegas</Text>
            </View>
        </View>
        <View style={styles.map}>
            <MapView
                style={{
                    flex: 1
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e6e72', 
  },
  contactInfo: {
    padding: 20,
  },
  infoGroup: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  infoText: {
      fontSize: 20,
      marginLeft: 10,
  },
  header: {
      fontSize: 22,
      fontWeight: 'bold',
  },
  map: {
      flex: 1,
      backgroundColor: 'blue',
  }
});
