import React, {
  Component,
} from 'react'

import {
  Image,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'

export default class AsyncImage extends Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  render() {  
    return (
      <View>
        <Image
          source={this.props.source}
          style={[this.props.style,{display: this.state.loaded ? "flex" : "none",}]}
          onLoad={this._onLoad} />

        {!this.state.loaded &&
          <View style={this.styles.view}>
            <ActivityIndicator size={75} color="#C3073F" />
          </View>
        }          
      </View>
    )
  }

  _onLoad = () => {
    this.setState(() => ({ loaded: true }))
  } 

  styles = StyleSheet.create({
    view:{
      justifyContent: "center",
      height: this.props.style.height,
      width: this.props.style.width,
    },
  })
}
