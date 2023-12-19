import Head from 'next/head'
import { useCallback } from 'react'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import AdminPage from '@/components/templates/AdminPage/AdminPage'

function Admin() {
  const { shouldLoadContent } = useRedirectByUserCheck()

  return (
    <>
      <Head>
        <title>Приеду, Поем | {shouldLoadContent ? 'Админ' : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.jpg" />
      </Head>
      <AdminPage />
    </>
  )
}

export default Admin
