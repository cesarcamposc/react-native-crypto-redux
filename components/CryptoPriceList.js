import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCryptocurrency } from '../store/cryptoSlice';
import SingleItems from './SingleItems';

const CryptoPriceList = () => {

    const priceList = useSelector((state) => state.crypto.cryptocurrency);
    const dispacht = useDispatch();

    useEffect(() => {
        dispacht(getCryptocurrency());
    }, []);


    return (
        <View>
            <View style={styles.titleContainer}>
                <Text styles={styles.title}>Top 100 Cryptocurrencies List</Text>
            </View>

            <FlatList
                data={priceList}
                renderItem={({ item }) => {return(<SingleItems item = {item}/>)}}
                keyExtractor={(item)=> item.id}
            />
        </View>
    )
}

export default CryptoPriceList

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        paddingVertical: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 5,
        textAlign: 'center'
    }

})