import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/cartSlice';
import { useNavigation } from '@react-navigation/native';


const products = [
    {
        quantity: 0,
        price: 1500,
        brand: "PUMA"
    },
    {
        quantity: 0,
        price: 2500,
        brand: "REDTAPE"
    },
    {
        quantity: 0,
        price: 7500,
        brand: "AIRFORCE"
    },
    {
        quantity: 0,
        price: 1000,
        brand: "CAMPUS"
    },
]

export default function Main() {

  const dispatch = useDispatch();
  const cart = useSelector((state)=>state)
  console.log(cart);

  const navigation = useNavigation();


  return (
    <View style={{marginVertical: 100}}>
      {
        products.map((item)=>{
            return <View style={{backgroundColor:"orange", padding:10, marginVertical: 5}}>
                <Text>{"Brand - "+item.brand}</Text>
                <Text>{"Price - "+item.price}</Text>
                <Text>{"quantity - "+item.quantity}</Text>
                <TouchableOpacity style={{padding: 3, backgroundColor: "green"}}
                onPress={()=>{dispatch(addProduct(item));}}>
                    <Text>Add to Cart</Text>
                </TouchableOpacity>
            </View>    
        })
      }

      <View style={{backgroundColor: "orange", width: "400", height: 50, justifyContent:"center", padding:5}}>
        {
          cart.length>0 && <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
            <Text>{cart.length}</Text>
            <TouchableOpacity style={{padding: 3, backgroundColor: "green"}}
              onPress={()=>{navigation.navigate("ViewCart")}}>
              <Text>View Cart</Text>
            </TouchableOpacity>
          </View>

        }
      </View>

    </View>
  )
}