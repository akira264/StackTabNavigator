import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, FlatList} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { fetchMoviesAction } from '../Actions/Index';
export   class ListScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' };
    }
    componentDidMount() {
        if(this.props.navigation.isFocused()){
            
            this.props.onFetchMovie();
        }
      }
  render() {
      console.log('check when focus list screen : ' + this.props.navigation.isFocused())
      
    return (
        <View style={{ flex: 1, marginTop : 30}}>
            <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                   List Movie 
            </Text>
            
            <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17, 
                        color: 'white',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.name},releaseYear=${item.releaseYear}`}
                    </Text>
                    }
                />
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovie: () => {                        
            dispatch(fetchMoviesAction());
        }
    }
};

const mapStateToProps = (state) => {
    console.log(" mapStateToProps in confirm screen ");
    console.log(" state of store  " + JSON.stringify(state));           
    return {        
        movies: state.movieReducers
    }
};

const ListContainer = connect(mapStateToProps , mapDispatchToProps)(ListScreen);
export default ListContainer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
