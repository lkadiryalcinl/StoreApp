import React from 'react';
import { FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductsCard from '../../components/productsCard';

export default function({navigation}) {
  const {data,loading,error} = useFetch('https://fakestoreapi.com/products');
  
  const handleClick = (id) => {
    navigation.navigate('Detail',{id})
  }
  const renderItem = ({item}) => <ProductsCard item={item} onClick={() => handleClick(item.id)}/>;

  if(loading) return <Loading/>
  if(error) return <Error/>
  
  return <FlatList data={data} renderItem={renderItem}/>;
};

