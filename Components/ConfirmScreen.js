import React from 'react';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Button from 'react-native-button';
import { connect } from 'react-redux';

export  class ConfirmScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' };
    }

  render() {
      console.log('function render of confirm screen');
      console.log(JSON.stringify(this.props.movies[0]));
    return (
        <View style={{ flex: 1, marginTop : 30}}>
            <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                   Confirm Movie 
            </Text>
            <View style={{ height: 100, margin: 10 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                   Movie Name : {this.props.movies[0].name}
                </Text>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Release Year : {this.props.movies[0].releaseYear}
                </Text>
            </View>
            <View style={{ height: 70, flexDirection: 'row' }}>
                <Button
                    containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                                                   
                    }}>
                    Update Movie
                </Button>
            </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(" mapStateToProps in confirm screen ");
    console.log(" state of store  " + JSON.stringify(state));           
    return {        
        movies: state.movieReducers
    }
};

const ConfirmContainer = connect(mapStateToProps)(ConfirmScreen);
export default ConfirmContainer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
