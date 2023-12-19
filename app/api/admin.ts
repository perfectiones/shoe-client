import { createEffect } from 'effector-next'
import api from '../axiosClient'

export const getUsers = createEffect(async (url: string) => {
  const { data } = await api.get(url)

  return data
})

export const addNewBoiler = createEffect(async (url: string, form: unknown) => {
  const { data } = await api.post(url, form)

  return data
})
