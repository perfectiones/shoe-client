import { useStore } from 'effector-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { $mode } from '@/context/mode'
import styles from '@/styles/profile/index.module.scss'

const AccountScores = () => {
  return (
    <div>
      <h2 className={styles.profile__main__title}>Мои баллы</h2>
      <h3 className={styles.profile__main__subtitle}>Баланс</h3>

      <p className={styles.profile__main__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        voluptatibus iste ipsam dolor fuga distinctio facilis consectetur facere
        eum velit voluptas alias dicta, dolorum, quae mollitia dolore quisquam
        provident soluta.
      </p>
      <div className={styles.profile__main__adress}>
        <div className={styles.profile__adress__top}>
          <h2 className={styles.profile__main__title}>Мои адреса</h2>
          <div className={styles.profile__adress__top_list}>
            <button className={styles.profile__adress__btn}>+</button>
            <button className={styles.profile__adress__btn}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountScores
