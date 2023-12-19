import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/admin/index.module.scss'
import AdminCatalog from '../AdminCataloge/AdminCatalog'
import { useState } from 'react'
import Link from 'next/link'
import AdminUsers from '../AdminUsers/AdminUsers'
import AdminDelivery from '../KladmanOrders/KladmanOrders'

function KladmanPage() {
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)

  const handleTab1 = () => {
    setTab1(true)
    setTab2(false)
  }

  return (
    <div className={styles.admin}>
      <header className={styles.admin__header}>
        <div className={`${styles.admin__headerBody} container`}>
          <div>Logo</div>
          <nav>
            <ul>
              <li>
                <p onClick={handleTab1}>Заказы</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">{tab1 && <AdminDelivery />}</div>
    </div>
  )
}

export default KladmanPage
