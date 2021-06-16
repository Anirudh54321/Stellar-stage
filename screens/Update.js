import React,{Component} from 'react'
import { render } from 'react-dom'
import { Text,View } from 'react-native'
export default class UpdateScreen extends Component{


render(){
return(
    <View
    style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> UPDATE </Text>
    </View>
)
}
}