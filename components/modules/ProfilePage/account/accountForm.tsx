import { useStore } from 'effector-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { $mode } from '@/context/mode'
import styles from '@/styles/profile/index.module.scss'

const AccountForm = () => {
  return (
    <>
      <form action="#" method="post" className={styles.profile__main__form}>
        <label className={styles.profile__main__form__input}>
          <span>Ваше имя</span>
          <input type="text" name="userName" id="userName" />
        </label>
        <label className={styles.profile__main__form__input}>
          <span>Ваша эл. почта</span>
          <input type="text" name="userMail" id="userMail" />
        </label>
        <label className={styles.profile__main__form__input}>
          <span>Ваш телефон</span>
          <input type="text" name="userTel" id="userTel" />
        </label>
        <div className={styles.profile__main__form__bottom}>
          <label className={styles.profile__main__form__input}>
            <span>Дата рождения</span>
            <input type="text" name="userDate" id="userDate" />
          </label>
          <div className={styles.profile__main__form__radio}>
            <label>
              <span>Ваше имя</span>
              <input type="radio" name="userGender" id="male" />
            </label>
            <label>
              <input type="radio" name="userGender" id="female" />
            </label>
          </div>
        </div>
      </form>
    </>
  )
}

export default AccountForm
