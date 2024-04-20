import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function ViewCart() {
    const cart = useSelector((state)=>state);

    const totalPrice =()=>{
        let price = 0;
        cart.map((item)=>{
            price = price + item.price;
        })

        return price;
    }
  return (
    <View style={{marginVertical: 100}}>
      {
        cart.map((item)=>{
            return <View style={{marginVertical: 5, backgroundColor: "orange", padding: 10}}>
                <Text>{item.brand}</Text>
                <Text>{item.quantity}</Text>
                <Text>{item.price}</Text>
            </View>
        })
      }
      <Text>{totalPrice()}</Text>
    </View>
  )
}