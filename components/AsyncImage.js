
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
      const {
        style,
        source
      } = this.props
  
      return (
        <View>
          <Image
            source={source}
            style={[style,{display: this.state.loaded ? "flex" : "none",}]}
            onLoad={this._onLoad} />

          {!this.state.loaded &&
            <View style={styles.view}>
              <ActivityIndicator size={75} color="#C3073F" />
            </View>
          }          
        </View>
      )
    }
  
    _onLoad = () => {
      this.setState(() => ({ loaded: true }))
    }
  }

  const styles = StyleSheet.create({
    view:{
      justifyContent: "center",
      height: style.height,
      width: style.width,
    },
  })
  