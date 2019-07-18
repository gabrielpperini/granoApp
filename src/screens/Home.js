import React, {Component} from 'react'
import { View , Image , AsyncStorage , TouchableOpacity , ActivityIndicator , Text , Dimensions , TouchableWithoutFeedback} from 'react-native'
import assets from '../../assets'
import styles from '../styles';
import { DataPost } from '../../Api';
import { NavigationEvents } from 'react-navigation';

dim = Dimensions.get('window');

export default class Home extends Component {
    
    state = {
        load: false,
        dataI: 0,
    }

    async componentDidMount(){
        let name = await AsyncStorage.getItem('name');
        let data = await AsyncStorage.getItem('data');
        if(!name){
            this.props.navigation.replace({
                routeName: 'Login'
            });
        }
        if(data){
            let dataI = JSON.parse(data).length
            this.setState({dataI});
        }
        // await AsyncStorage.removeItem('data');
    }

    deslogin = async () => {
        await AsyncStorage.removeItem('name');
        this.props.navigation.replace({
            routeName: 'Login'
        });

    }

    sincronizar = async () => {
        this.setState({load: true});
        let verify = await DataPost();
        console.log(verify);
        verify ? this.setState({dataI: 0}) : null;
        this.setState({load: false});
    }
    
    render(){
        return(
            <View style={styles.viewScreen}>
                <NavigationEvents
                onDidFocus={async () => {
                    let data = await AsyncStorage.getItem('data');
                    if(data){
                        let dataI = JSON.parse(data).length
                        this.setState({dataI});
                    }
                }}
                />
                <View style={{
                    alignSelf: 'flex-start',
                    display: (this.state.dataI > 0 ) ? 'flex' : 'none',
                }}>
                    <TouchableOpacity style={styles.sincronize}
                    onPress={async ()=>{
                        let data = await AsyncStorage.getItem('data');
                        let i = JSON.parse(data);
                        alert('Há '+ i.length + ' itens para sincronizar!');
                    }}
                    >
                        <Text style={styles.sincronizeText}>Há itens!</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.logo}
                source={assets.logo}
                />
                <View>
                    <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate('Coletor');
                    }}
                    >
                        <Text style={styles.textBtn}>Coletar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                    onPress={() => {this.sincronizar()}}
                    >
                        <Text style={[styles.textBtn, {
                            display: this.state.load ? 'none'  : 'flex',
                        }]}>Sincronizar</Text>
                        <ActivityIndicator style={{
                            display: this.state.load ? 'flex'  : 'none',
                            marginVertical: 10,
                        }} size={40} color={"#FFFFFF"} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btn}
                    onPress={this.deslogin}
                    >
                        <Text style={styles.textBtn}>Sair</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}