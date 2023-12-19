import { getUsers } from '@/app/api/admin'
import { $mode } from '@/context/mode'
import styles from '@/styles/kladman/index.module.scss'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import api from '../../../app/axiosClient'
import { getOrders } from '@/app/api/kladman'
import Link from 'next/link'

const KladmanOrders = () => {
  const mode = useStore($mode)
  const [orders, setOrders] = useState([])
  const [loading, setloading] = useState(false)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = async () => {
    try {
      setloading(true)
      const data = await getOrders('/order/all')
      setOrders(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(orders)

  return (
    <div className={styles.kladman}>
      <button>Составить Заказ</button>
      <ul>
        {orders.map((el) => (
          <Link
            href={{
              pathname: '/kladmanEdit',
              query: {
                id: el.id,
                status: el.order_status,
                kladST: el.order_KladStatu,
                name: el.order_name,
                price: el.order_price,
                user: el.order_user,
              },
            }}
          >
            <li>
              <div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <h3>Заказ: {el.id}</h3>
                  <p>{el.order_KladStatu}</p>
                </div>

                <p>Пользователь: {el.order_user}</p>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Товар: {el.order_name}</p> <p>Цена: {el.order_price}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default KladmanOrders
