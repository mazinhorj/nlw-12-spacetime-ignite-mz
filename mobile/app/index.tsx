import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'

import { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import NlwLogo from '../src/assets/nlw-spacetime-logo.svg'

import { api } from '../src/lib/api'

export default function App() {
  const router = useRouter()

  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/4d7ffff6934cebf81a47',
  }

  const [, res, githubSignInAsync] = useAuthRequest(
    {
      clientId: '4d7ffff6934cebf81a47',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'spacetime',
      }),
    },
    discovery,
  )

  async function handleGitAuthCode(code: string) {
    const res = await api.post('/register', {
      code,
    })

    const { token } = res.data
    console.log(token)
    await SecureStore.setItemAsync('token', token)

    router.push('/memories')
  }

  useEffect(() => {
    // log para pegar url correta do expo e colocar no auth do github
    console.log(
      `LINHA 48 - ${makeRedirectUri({
        scheme: 'spacetime',
      })}`,
    )
    console.log(`LINHA 52 - ${res}`)
    if (res?.type === 'success') {
      const { code } = res.params
      console.log(`LINHA 55 - ${code}`)
      handleGitAuthCode(code)
    }
  }, [res])

  return (
    <View className="flex-1 items-center justify-center px-8 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <NlwLogo />

        <Text className="space-y-2 text-center">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text>{'\n'}</Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => githubSignInAsync()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 🤍 no NLW da Rocketseat p
      </Text>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Mazinho - 2023
      </Text>
    </View>
  )
}
