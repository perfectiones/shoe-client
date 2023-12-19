import { toast } from 'react-toastify'
import api from '../app/axiosClient'

export const addOrder = async (el: object) => {
  try {
    const data = await api.post('/order/create', el)
    console.log(data)
  } catch (error) {
    toast.error((error as Error).message)
    console.log(el)
  }
}

export const getOrders = async () => {
  try {
    const data = await api.get('/order/all')
    console.log(data)
  } catch (error) {
    toast.error((error as Error).message)
  }
}

export const updateOrder = async (el: object) => {
  console.log(el)
  try {
    const data = await api.patch('order/update/' + el.userId, el)
    console.log(data)
  } catch (error) {
    toast.error((error as Error).message)
    console.log(el)
  }
}
