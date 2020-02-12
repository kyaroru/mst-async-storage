import * as Keychain from 'react-native-keychain';

export async function save(key: string, snapshot: {}) {
  const data = JSON.stringify(snapshot)
  await Keychain.setGenericPassword(key, data);
}

export async function load(key: string) {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return JSON.parse(credentials.password)
    }
  } catch (error) {
    console.log('[mst-async-storage');
    console.log(error);
  }

  return undefined
}
