import axios from "axios";
import { BASE_URL, TIMEOUT } from './config'

const Instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export default Instance;
