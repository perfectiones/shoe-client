import { toggleCartItem } from '@/utils/shopping-cart'
import { $user } from '@/context/user'
import { removeFromCartFx } from '@/app/api/shopping-cart'
import styles from '@/styles/catalog/index.module.scss'
import { IBoilerPart } from '@/types/boilerparts'
import { useStore } from 'effector-react'
import { formatPrice } from '@/utils/common'
import api from '../../../app/axiosClient'
import Link from 'next/link'
import { $shoppingCart } from '@/context/shopping-cart'
import { useRef } from 'react'

const AdminBoilerItem = ({ item }: { item: IBoilerPart }) => {
  const user = useStore($user)
  const shoppingCart = useStore($shoppingCart)
  const spinner = useStore(removeFromCartFx.pending)

  const refItem = useRef()

  const deleteHandle = async () => {
    refItem.current.classList.add('hide')
    try {
      const res = await api.delete('/boiler-parts/' + item.id)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(item)

  return (
    <li className={`${styles.catalog__list__item}`} ref={refItem}>
      <div className={styles.catalog__list__item__inner}>
        <h3 className={styles.catalog__list__item__title}>{item.name}</h3>
        <span className={styles.catalog__list__item__code}>
          Артикул: {item.vendor_code}
        </span>
        <span className={styles.catalog__list__item__price}>
          {formatPrice(item.price)}
        </span>
        <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
          <button>
            <Link
              href={{
                pathname: '/adminUpdateBoiler',
                query: {
                  itemId: item.id,
                  itemName: item.name,
                  itemVendorCode: item.vendor_code,
                  itemPrice: item.price,
                  itemDesc: item.description,
                  itemFactory: item.parts_manufacturer,
                  itemComp: item.compatibility,
                },
              }}
            >
              Изменить товар
            </Link>
          </button>
          <button onClick={deleteHandle}> Удалить товар</button>
        </div>
      </div>
    </li>
  )
}

export default AdminBoilerItem
