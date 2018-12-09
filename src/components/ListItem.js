import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import  * as actions  from '../actions';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }
  renderDescription(){
    const { library, expanded }= this.props;
    console.log(expanded);
    if(expanded ){
      return(
        <CardSection>
          <Text style={{flex:1}}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }
  callSelect = (id) =>{
    this.props.selectLibrary(id);
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={this.callSelect.bind(this,id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>

          {this.renderDescription() }

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state, ownProps);
  const expanded = ownProps.library.id === state.selectedLibraryId ;
  return {expanded};
}

export default connect(mapStateToProps,actions)(ListItem);
