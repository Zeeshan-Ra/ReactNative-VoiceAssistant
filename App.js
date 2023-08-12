import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import AppNavigation from './src/navigation';
import { apiCall } from './src/api/openAI';

export default function App() {
  // useEffect(()=>{
  //   // apiCall('create an image of a dog');
  // },[])
  return (
    <AppNavigation />
  )
}
