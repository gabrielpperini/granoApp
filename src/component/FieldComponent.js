import React, {Component} from 'react'
import { View , ScrollView , TextInput , TouchableOpacity , ActivityIndicator , Text , Dimensions} from 'react-native'
import assets from '../../assets'
import styles from '../styles'

dim = Dimensions.get('window');

export default FieldComponent = ({
    titulo,
    placeholder,
    textArea,
    func,
    keyData,
    required
}) => {
    return(
        <View style={styles.fieldComponent}>
            <Text style={styles.fieldTitle}>{titulo}<Text style={{color: 'red'}}>{required ? '*' : null}</Text></Text>
            <TextInput style={[styles.textInput, {
                marginHorizontal: 30,
                height: textArea ? 200 : 60,
            }]}
            placeholder={placeholder}
            multiline = {textArea}
            numberOfLines = {10}
            onChangeText={(text) => func(text, keyData,) }
            />
        </View>
    )
}