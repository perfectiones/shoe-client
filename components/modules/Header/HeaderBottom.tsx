/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import ProfileDropdown from './ProfileDropdown'
import Link from 'next/link'
import CityButton from '@/components/elements/CityButton/CityButton'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { $mode } from '@/context/mode'
import { usePopup } from '@/hooks/usePoup'
import SearchInput from '@/components/elements/Header/SearchInput'
import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
import CartPopup from './CartPopup/CartPopup'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { setDisableCart } from '@/context/shopping-cart'
import styles from '@/styles/header/index.module.scss'

const HeaderBottom = () => {
  const isMedia950 = useMediaQuery(950)
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const router = useRouter()
  const { toggleOpen, open, closePopup } = usePopup()

  useEffect(() => {
    if (router.pathname === '/order') {
      setDisableCart(true)
      return
    }

    setDisableCart(false)
  }, [router.pathname])

  return (
    <div className={styles.header__bottom}>
      <div className={`container ${styles.header__bottom__container}`}>
        <Link href="/dashboard" legacyBehavior passHref>
          <a className={styles.header__logo__link}>
            <img src="/img/logo.jpg" alt="logo" />
            <span
              className={`${styles.header__logo__link__text} ${darkModeClass}`}
            >
              Приду, Поем
            </span>
          </a>
        </Link>
        <div className={styles.header__search}>
          <SearchInput />
        </div>
        <div className={styles.header__shopping_cart}>
          <CartPopup />
          <ProfileDropdown />
        </div>
      </div>
      {isMedia950 && (
        <button
          onClick={toggleOpen}
          className={`${styles.burger_menu} ${
            open ? styles.open : ''
          } ${darkModeClass}`}
        >
          <span />
          <span />
          <span />
        </button>
      )}
      <nav
        className={`${styles.header__nav} ${
          open ? styles.open : ''
        } ${darkModeClass}`}
      >
        <ul className={styles.header__nav__list}>
          <li className={styles.header__nav__list__item}>
            <Link href="/shipping-payment" passHref legacyBehavior>
              <a
                className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                onClick={closePopup}
              >
                Доставка и оплата
              </a>
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link href="/catalog" passHref legacyBehavior>
              <a
                className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                onClick={closePopup}
              >
                Каталог
              </a>
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link href="/" passHref legacyBehavior>
              <a
                className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                onClick={closePopup}
              >
                Пункты выдачи
              </a>
            </Link>
          </li>
          <li className={styles.header__nav__list__item}>
            <Link href="/wholesale-buyers" passHref legacyBehavior>
              <a
                className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                onClick={closePopup}
              >
                Оптовым покупателям
              </a>
            </Link>
          </li>
          {isMedia950 && (
            <li className={styles.header__nav__list__item}>
              <CityButton />
            </li>
          )}
          {isMedia950 && (
            <li className={styles.header__nav__list__item}>
              <ModeToggler />
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default HeaderBottom
