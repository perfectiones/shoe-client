import { getBoilerPartsFx } from '@/app/api/boilerParts'
import FilterSelect from '@/components/modules/CatalogPage/FilterSelect'
import { $boilerParts, setBoilerParts } from '@/context/boilerParts'
import { $mode } from '@/context/mode'
import styles from '@/styles/catalog/index.module.scss'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import CatalogItem from '@/components/modules/CatalogPage/CatalogItem'
import Link from 'next/link'
import AdminBoilerItem from '@/components/modules/Admin/AdminBoiler'

const AdminCatalog = () => {
  const mode = useStore($mode)
  const boilerParts = useStore($boilerParts)
  const [spinner, setSpinner] = useState(false)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    loadBoilerParts()
  }, [])

  const loadBoilerParts = async () => {
    try {
      setSpinner(true)
      const data = await getBoilerPartsFx('/boiler-parts?limit=20&offset=0')

      setBoilerParts(data)
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setTimeout(() => setSpinner(false), 1000)
    }
  }

  return (
    <section className={styles.catalog}>
      <div className={`container ${styles.catalog__container}`}>
        <div>
          <FilterSelect setSpinner={setSpinner} />
        </div>
        <button className={styles.catalog__button}>
          <Link href={'/adminAddBoiler'}>Добавить товар </Link>
        </button>
        <div className={`${styles.catalog__top} ${darkModeClass}`}>
          {spinner ? (
            <ul className={skeletonStyles.skeleton}>
              {Array.from(new Array(20)).map((_, i) => (
                <li
                  key={i}
                  className={`${skeletonStyles.skeleton__item} ${
                    mode === 'dark' ? `${skeletonStyles.dark_mode}` : ''
                  }`}
                >
                  <div className={skeletonStyles.skeleton__item__light} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className={styles.catalog__list}>
              {boilerParts.rows?.length ? (
                boilerParts.rows.map((item) => (
                  <>
                    <AdminBoilerItem item={item} key={item.id} />
                  </>
                ))
              ) : (
                <span>Список товаров пуст...</span>
              )}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default AdminCatalog
