import React, {Component} from 'react'
import { View , Image , TextInput , TouchableOpacity , ActivityIndicator , Text , AsyncStorage} from 'react-native'
import assets from '../../assets'
import styles from '../styles';


export default class Login extends Component {
    
    state = {
        load: false,
        marginImage: 100,
        marginBtn: 50,
        nome: '',
        error: false
    }

    login = async () => {
        if(this.state.nome){    
            this.setState({
                load: true
            });
            await AsyncStorage.setItem('name' , this.state.nome );
            this.props.navigation.navigate('Home');
            this.setState({load: false , nome: '' , error: false});
        }else{
            this.setState({error: true});
        }
    }
    
    
    render(){
        return(
            <View style={styles.viewScreen}>
                <Image style={[styles.logo, {
                    marginTop: this.state.marginImage,
                    marginBottom: this.state.marginImage, 
                }]}
                source={assets.logo}
                />
                <View style={{
                    alignItems: 'center',
                }}>
                    <TextInput style={styles.textInput}
                    placeholder="Nome do Vendedor"
                    onFocus={()=>{
                        this.setState({
                            marginImage: 50,
                            marginBtn: 30,
                        })
                    }}
                    onBlur={()=>{
                        this.setState({
                            marginImage: 100,
                            marginBtn: 50,
                        })
                    }}
                    onChangeText={nome => this.setState({nome})}
                    />
                    <Text style={{color: '#d80000', display: this.state.error ? 'flex' : 'none' }}>Complete com seu nome!</Text>
                    <TouchableOpacity style={[styles.btn, {
                        marginVertical: this.state.marginBtn,
                    }]}
                    onPress={this.login}
                    >
                        <Text style={[styles.textBtn , {
                            display: this.state.load ? 'none'  : 'flex',
                        }]}>Entrar</Text>
                        <ActivityIndicator style={{
                            display: this.state.load ? 'flex'  : 'none',
                            marginVertical: 10,
                        }} size={40} color={"#FFFFFF"} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}