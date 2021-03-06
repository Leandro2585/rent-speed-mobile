import React from 'react'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';

export const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
}