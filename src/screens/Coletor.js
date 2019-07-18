import React, {Component} from 'react'
import { View , ScrollView , AsyncStorage , TouchableOpacity , TextInput , Text , Dimensions} from 'react-native'
import RadioForm from 'react-native-simple-radio-button'
import assets from '../../assets'
import FieldComponent from '../component/FieldComponent'
import styles from '../styles';

dim = Dimensions.get('window');

const radio_props = [
    {label: 'Ligar', value: 'ligar' },
    {label: 'Visita', value: 'visita' },
    {label: 'Orçamentos', value: 'orcamentos' },
    {label: 'Outros', value: 1 }
];

export default class Coletor extends Component {
    
    state = {
        data: {},
        outros: false
    }

    async componentDidMount(){
        let name = await AsyncStorage.getItem('name');
        let data = this.state.data;
        data.consultor = name;
        this.setState({data});
    }
    
    formData(text , key){
        let data = this.state.data;
        data[key] = text;
        this.setState({data});
        // console.log(data);
    }
    
    render(){
        return(
            <ScrollView style={styles.ScrollColetor}>
                <Text style={styles.ScrollTitle}>Coletor</Text>
                
                <FieldComponent func={(text,key) => {this.formData(text,key); }}
                titulo="Nome do Cliente" 
                placeholder="Nome" 
                keyData='nome'
                required={true}
                />
                
                <FieldComponent func={(text,key) => {this.formData(text,key); }}
                titulo="E-mail" 
                placeholder="E-mail" 
                keyData='email'
                />
                
                <FieldComponent func={(text,key) => {this.formData(text,key); }}
                titulo="Empresa" 
                placeholder="Empresa" 
                keyData='empresa'
                />
                
                <FieldComponent func={(text,key) => {this.formData(text,key); }}
                titulo="Contato" 
                placeholder="Contato" 
                keyData='contato'
                />
                
                <FieldComponent func={(text,key) => {this.formData(text,key); }}
                titulo="Telefone" 
                placeholder="Telefone" 
                keyData='telefone'
                />
                
                <FieldComponent func={(text,key) => {this.formData(text,key); }}
                titulo="Observações" 
                placeholder="Observações" textArea={true} 
                keyData='obs'
                />

                <Text style={styles.fieldTitle} >Procedimento</Text>
                <RadioForm
                radio_props={radio_props}
                initial={-1}
                onPress={(value) => {
                    if(value !== 1){
                        this.formData(value, 'procedimento');
                        this.setState({outros: false});
                    }else{
                        this.formData('', 'procedimento');
                        this.setState({outros: true});
                    }
                }}
                buttonColor={'#004d8a'}
                formHorizontal={true}
                labelHorizontal={false}
                style={{
                    alignSelf: 'center',
                    marginVertical: 25,
                }}
                />
                <TextInput style={[{
                    display: this.state.outros ? 'flex' : 'none',
                    marginHorizontal: 30,
                    marginBottom: 20,
                    textAlign: 'center',
                }, styles.textInput]}
                placeholder={"Outros"}
                onChangeText={(text) => this.formData(text, 'procedimento') }
                />


                <View style={styles.viewBtns}>
                    <TouchableOpacity style={styles.BtnsForm}
                    onPress={async () => {
                        let json = await AsyncStorage.getItem('data');
                        let data = JSON.parse(json);
                        if(!data){
                            data = [];
                        }
                        if(this.state.data.nome){
                            data.push(this.state.data);
                            await AsyncStorage.setItem('data' , JSON.stringify(data) );
                        }
                        console.log(data);
                        alert('Coleta salva!');
                        this.props.navigation.goBack();
                    }}
                    >
                        <Text style={styles.textBtn}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.BtnsForm, {backgroundColor: '#d71717' }]}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                    >
                        <Text style={styles.textBtn}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}