'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  PropTypes,
} = React;

var Nav = require('./NavIcon');

var Native = React.createClass({

  propTypes: {
    pageSelected: PropTypes.string,
    changePage: PropTypes.func
  },

  getDefaultProps: function () {
    return {
      pageSelected: 'Home',
      changePage: function(){console.log("hello",arguments)}
    }
  },

  render: function() {
    var that = this;
    var Icons = icons.map(function (icon, i) {
      var pressHandler = function () {
        that.props.changePage(icon.name)
      };
      return <Nav key={i} name={icon.name} imageSrc={icon.imageSrc} active={that.props.pageSelected===icon.name} pressHandler={pressHandler}/>
    });

    return (
      <View style={styles.container} >
        {Icons}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
  },
});

var icons = [
  {
    name: 'Home',
    imageSrc: 'http://i.imgur.com/UePbdph.jpg'
  },
  {
    name: 'In Play',
    imageSrc: 'http://i.imgur.com/UePbdph.jpg'
  },
  {
    name: 'Search',
    imageSrc: 'http://i.imgur.com/UePbdph.jpg'
  },
  {
    name: 'Profile',
    imageSrc: 'http://i.imgur.com/UePbdph.jpg'
  }
]

AppRegistry.registerComponent('Native', () => Native);
