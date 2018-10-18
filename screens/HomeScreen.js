import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import config from '../config/clientConfig';
import AsyncImage from '../components/AsyncImage';

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

  state = {
    loading: true,
    news: null,
  }

  newsCardImage = {
    width: '100%',
    height: 200,
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {
            !this.state.loading && this.state.news.map((item, idx) => {
              return (
                <View style={styles.newsCard} key={idx}>
                  <AsyncImage style={this.newsCardImage} source={{ uri: item.imageUrl}}/>
                  <View style={styles.newsCardInfo}>
                    <Text style={styles.newsCardHeader}>
                      {item.title}
                    </Text>
                    <Text style={styles.newsCardDate}>
                      {item.date}
                    </Text>
                    <Text style={styles.newsCardDescription}>
                      {item.description}
                    </Text>
                  </View>
              </View>
              );
            })
          }
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    fetch(`http://${config.localIp}:3000/api/news`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          news: res,
        })
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e6e72',
  },
  scroll: {
    paddingTop: 0
  },
  newsCard: {
    flex: 1,
    marginTop: 7.5,
    marginBottom: 7.5,
    borderColor: '#666',
    borderWidth: 1,
  },
  newsCardDescription: {
    color: '#efefef',
    marginTop: 5,
  },
  newsCardHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#efefef',
  },
  newsCardInfo: {
    padding: 10,
    backgroundColor: '#1a1a1d',
  },
  newsCardDate:{
    fontSize: 12,
    fontWeight: 'normal',
    color: '#f2f2f2',
  },
});
