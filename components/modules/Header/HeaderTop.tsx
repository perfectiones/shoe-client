import Link from 'next/link'
import { useStore } from 'effector-react'
import CityButton from '@/components/elements/CityButton/CityButton'
import ProfileDropdown from './ProfileDropdown'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
import { $mode } from '@/context/mode'
import { usePopup } from '@/hooks/usePoup'
import styles from '@/styles/header/index.module.scss'

const HeaderTop = () => {
  const isMedia950 = useMediaQuery(950)
  const { toggleOpen, open, closePopup } = usePopup()
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <div className={styles.header__top}>
      <div className={`container ${styles.header__top__container}`}>
        {!isMedia950 && <CityButton />}

        {!isMedia950 && <ModeToggler />}
      </div>
    </div>
  )
}

export default HeaderTop
