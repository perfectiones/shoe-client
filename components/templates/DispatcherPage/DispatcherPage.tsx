/* eslint-disable arrow-body-style */
/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/admin/index.module.scss'
import { useState } from 'react'
import DispatcherDel from '../DispatcherDel/DispatcherDel'
import DispatcherKur from '../DispatcherKur/DispatcherKur'

function DispatcherPage() {
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)

  const handleTab1 = () => {
    setTab1(true)
    setTab2(false)
  }

  const handleTab2 = () => {
    setTab1(false)
    setTab2(true)
  }

  return (
    <div className={styles.admin}>
      <header className={styles.admin__header}>
        <div className={`${styles.admin__headerBody} container`}>
          <div>Logo</div>
          <nav>
            <ul>
              <li>
                <p onClick={handleTab1}>Курьеры</p>
              </li>
              <li>
                <p onClick={handleTab2}>Доставки</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        {tab1 && <DispatcherDel />}
        {tab2 && <DispatcherKur />}
      </div>
    </div>
  )
}

export default DispatcherPage