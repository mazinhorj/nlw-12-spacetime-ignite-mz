import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-center text-5xl font-bold text-zinc-100">
        Are you ready for Spacetime?
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
