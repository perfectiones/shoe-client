/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { $mode } from '@/context/mode'
import styles from '@/styles/profile/index.module.scss'
import Account from '@/components/modules/ProfilePage/account/account'

const ProfileContent = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)
  const [tab4, setTab4] = useState(false)

  const handleTab1 = () => {
    setTab1(true)
    setTab2(false)
    setTab3(false)
    setTab4(false)
  }

  const handleTab2 = () => {
    setTab1(false)
    setTab2(true)
    setTab3(false)
    setTab4(false)
  }

  const handleTab3 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setTab4(false)
  }

  const handleTab4 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(false)
    setTab4(true)
  }
  return (
    <>
      <section className={styles.profile__section}>
        <ul className={styles.profile__section__list}>
          <li onClick={handleTab1}>Мой профиль</li>
          <li onClick={handleTab2}>Заказы</li>
          <li>Доставки</li>
          <li>Мои карты</li>
          <li>Чеки</li>
        </ul>
      </section>
      <main className={styles.profile__main}>
        {tab1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Account />
          </motion.div>
        )}
        {tab2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.shipping_payment__tabs__content__text}
          >
            2
          </motion.div>
        )}
      </main>
    </>
  )
}

export default ProfileContent
