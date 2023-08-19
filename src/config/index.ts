
const getConfig = (serverUrl: string) => {
  return {
    api: {
      SERVER_URL: serverUrl,
    },
  }
}

export default getConfig;