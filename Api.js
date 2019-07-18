import { AsyncStorage } from 'react-native'

const DataPost = async () => {
    let data = await AsyncStorage.getItem('data');
    var verify = false;
    if(data){
        await fetch('http://agencialazo.com.br/granoapp/data/', {
            
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then((response) => response.json())
        .then(async res => {
            console.log(res);
            await AsyncStorage.removeItem('data');
            verify = true;
            alert("Sincronização concluída!");
        }).catch(err => {
            console.log(err);
            alert('Conecte à internet para carregar!');
        });
    }else{
        console.log('data vazia');
        alert("Não há itens para serem sincronizados!");
    }

    return verify;
}

export { DataPost }