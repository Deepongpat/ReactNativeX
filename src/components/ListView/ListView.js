import PropTypes from 'prop-types'
import React from "react";
import { View , FlatList } from "react-native";
import { ListItem } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]
export default class ListView extends React.Component {
    constructor() {
        super();
        this.state = {

        };

    }
    keyExtractor = (item, index) => index

    renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{
            source: item.avatar_url && { uri: item.avatar_url },
            title: item.name[0]
          }}
        />
      )
      
      render () {
        return (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.dataSource}
            renderItem={this.renderItem}
          />
        )
      }
}