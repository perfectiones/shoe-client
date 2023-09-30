import { useStore } from 'effector-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { $mode } from '@/context/mode'
import styles from '@/styles/profile/index.module.scss'
import AccountForm from './accountForm'
import AccountScores from './accountScores'

const Account = () => {
  return (
    <>
      <h2 className={styles.profile__main__title}>Персональные данные</h2>

     <div className={styles.profile__main__body}>
        <AccountForm />
        <AccountScores />
     </div>
    </>
  )
}

export default Account
