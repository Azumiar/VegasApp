import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Vegas',
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
        <ScrollView style={styles.scroll}>
          <View style={styles.newsCard}>
            <Image style={styles.newsCardImage} source={{ uri: 'https://pp.userapi.com/c840335/v840335980/4f7b7/orMDBzKlbyU.jpg'}}/>
            <Text style={styles.newsCardText}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Image style={styles.newsCardImage} source={{ uri: 'https://pp.userapi.com/c840335/v840335980/4f7b7/orMDBzKlbyU.jpg'}}/>
            <Text style={styles.newsCardText}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Image style={styles.newsCardImage} source={{ uri: 'https://pp.userapi.com/c840335/v840335980/4f7b7/orMDBzKlbyU.jpg'}}/>
            <Text style={styles.newsCardText}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Image style={styles.newsCardImage} source={{ uri: 'https://pp.userapi.com/c840335/v840335980/4f7b7/orMDBzKlbyU.jpg'}}/>
            <Text style={styles.newsCardText}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Image style={styles.newsCardImage} source={{ uri: 'https://pp.userapi.com/c840335/v840335980/4f7b7/orMDBzKlbyU.jpg'}}/>
            <Text style={styles.newsCardText}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Image style={styles.newsCardImage} source={{ uri: 'https://pp.userapi.com/c840335/v840335980/4f7b7/orMDBzKlbyU.jpg'}}/>
            <Text style={styles.newsCardText}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Text>
          </View>
        </ScrollView>
      </View>
    );
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
  newsCard: {
    flex: 1,
    marginTop: 7.5,
    marginBottom: 7.5,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 15,
  },
  newsCardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  newsCardText: {
    padding: 10,
    backgroundColor: '#1a1a1d',
    color: '#efefef',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  }
});
