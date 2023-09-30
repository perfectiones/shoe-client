import { useStore } from 'effector-react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  $shoppingCart,
  $totalPrice,
  setShoppingCart,
} from '@/context/shopping-cart'
import { $mode } from '@/context/mode'
import { checkPaymentFx, makePaymentFx } from '@/app/api/payment'
import { removeFromCartFx } from '@/app/api/shopping-cart'
import { $user, $userCity } from '@/context/user'
import styles from '@/styles/profile/index.module.scss'
import ProfileNav from '@/components/modules/ProfilePage/ProfileNav'
import ProfileContent from '@/components/modules/ProfilePage/ProfileContent'

const ProfilePage = () => {
  const mode = useStore($mode)
  const user = useStore($user)
  const userCity = useStore($userCity)
  const totalPrice = useStore($totalPrice)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const router = useRouter()

  useEffect(() => {
    const paymentId = sessionStorage.getItem('paymentId')

    if (paymentId) {
      checkPayment(paymentId)
    }
  }, [])

  const makePay = async () => {
    try {
      const data = await makePaymentFx({
        url: '/payment',
        amount: totalPrice,
        description: `Заказ №1 ${
          userCity.city.length
            ? `Город: ${userCity.city}, улица: ${userCity.street}`
            : ''
        }`,
      })

      sessionStorage.setItem('paymentId', data.id)
      router.push(data.confirmation.confirmation_url)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  const checkPayment = async (paymentId: string) => {
    try {
      const data = await checkPaymentFx({
        url: '/payment/info',
        paymentId,
      })

      if (data.status === 'succeeded') {
        resetCart()
        return
      }

      sessionStorage.removeItem('paymentId')
    } catch (error) {
      console.log((error as Error).message)
      resetCart()
    }
  }

  const resetCart = async () => {
    sessionStorage.removeItem('paymentId')
    await removeFromCartFx(`/shopping-cart/all/${user.userId}`)
    setShoppingCart([])
  }

  return (
    <section className={styles.profile}>
      <div className="container">
        <h2 className={`${styles.profile__title} ${darkModeClass}`}>
          Личный кабинет
        </h2>
        <div className={`${styles.profile__inner}`}>
          <ProfileContent />
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
