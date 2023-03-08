import React from 'react'
import AppNavigator from './src/AppNavigator'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App