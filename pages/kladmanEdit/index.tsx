import Head from 'next/head'
import { useCallback } from 'react'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import KladmanPage from '@/components/templates/KladmanPage/KladmanPage'
import KladmanEditOrder from '@/components/templates/KladmanForm/KladmanEditOrder'
import router from 'next/router'

function Kladman() {
  console.log(router.query)

  const { shouldLoadContent } = useRedirectByUserCheck()

  return (
    <>
      <Head>
        <title>
          Приеду, Поем | {shouldLoadContent ? 'Кладовщик/Заказ' : ''}
        </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.jpg" />
      </Head>
      <KladmanEditOrder el={router.query} />
    </>
  )
}

export default Kladman
