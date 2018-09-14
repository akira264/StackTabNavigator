import React from 'react';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { addMovieAction } from '../Actions/Index';
export  class InputScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' };
    }

    static navigationOptions = {
         tabBarLabel : 'Input',
          tabBarIcon :  ({tintColor}) =>(
            <Image
          source = {require('../icons/input_icon.jpg')}
          style = {{width : 24, height : 24}}
          // tintColor = {tintColor}
        />
          )
    };
  render() {
    return (
        <View style={{ flex: 1, marginTop : 30}}>
            <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                   Input Movie
            </Text>
            <View style={{ height: 100, margin: 10 }}>
                <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ movieName: text })}
                    value={this.state.movieName}
                    placeholder='Enter new movie name'
                />
                <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                    onChangeText={(text) => this.setState({ releaseYear: text })}
                    value={this.state.releaseYear}
                    keyboardType = 'numeric'
                    placeholder='Release year'
                />
            </View>
            <View style={{ height: 70, flexDirection: 'row' }}>
                <Button
                    containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        const {movieName, releaseYear} = this.state;  
                        this.props.onAddMovie({name: movieName, releaseYear: releaseYear});  
                        this.props.navigation.navigate('Confirm');  
                    }}>
                    Add Movie
                </Button>
            </View>
        </View>
    );
  }
}

// const mapStateToProps = (state) => {
//     console.log(" mapStateToProps ");
//     console.log(" state of store  " + JSON.stringify(state));           
//     return {        
//         movies: state.movieReducers
//     }
// };

const mapDispatchToProps = (dispatch) => {
    return {    
       
        onAddMovie: (newMovie) => {                        
            dispatch(addMovieAction(newMovie));
        }
    }
};

// export connect(null, mapDispatchToProps)(InputScreen);

const InputContainer = connect(null, mapDispatchToProps)(InputScreen);
export default InputContainer;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
