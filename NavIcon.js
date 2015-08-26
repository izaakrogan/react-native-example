'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
  PropTypes,
} = React;

var TouchableHighlight = require('TouchableHighlight');
var NavIcon = React.createClass({

  propTypes: {
    name: PropTypes.string,
    imageSrc: PropTypes.string,
    pressHandler: PropTypes.func,
    active: PropTypes.bool
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.props.pressHandler}>
        <View style={styles.container} >
          <Image
            source={{uri: this.props.imageSrc}}
            style={styles.icon}
          />
          <Text style={{color: this.props.active ? 'red' : 'grey'}} onPress={this.props.pressHandler} >{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,

  },
  icon: {
    width:40,
    height:40,
  },
  text: {
    fontSize: 20,
  }
});

module.exports = NavIcon;
