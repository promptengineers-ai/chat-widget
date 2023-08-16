import marked from './marked';

const SERVER_URL = 'http://localhost:8000'

const config = {
  api: {
    SERVER_URL: SERVER_URL,
  },
  marked: marked,
}

export default config;
