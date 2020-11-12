import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Cookies from 'js-cookie'

const timeout = process.env.REACT_APP_AXIOS_TIMEOUT ?? '3000'
const token = Cookies.get(`${process.env.REACT_APP_ACCESS_TOKEN_NAME ?? ''}`)

export const defaultAppAxiosConfigs = {
  timeout: Number.parseInt(`${timeout}`),
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

export interface AppAxiosConfig {
  headers: any
}

/**
|--------------------------------------------------
| CUSTOM AXIOS
|--------------------------------------------------
*/
export const appAxios = (config?: AppAxiosConfig) => {
  const axiosInstance = config ? axios.create(config) : axios.create(defaultAppAxiosConfigs)

  axiosInstance.interceptors.request.use(
     (config) => {
      return config
    },
     (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      response.originalData = response.data
      response.data = camelcaseKeys(response.data, { deep: true })
      return response
    }, 
    (error) => {
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

/**
|--------------------------------------------------
| AXIOS with multipart/form-data
|--------------------------------------------------
*/
export const appAxiosMulipart = () => {
  return appAxios({
    ...defaultAppAxiosConfigs,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  })
}
