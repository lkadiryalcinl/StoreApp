import React from 'react'
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/detailCard';

export default function({route}){
    const {id} = route.params;
    const {data,loading,error} = useFetch('https://fakestoreapi.com/products/'+id)

    if(loading) return <Loading/>;
    if(error) return <Error/>;
    return <DetailCard item={data}/>;
};