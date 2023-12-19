import styles from '@/styles/admin/index.module.scss'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import CatalogItem from '@/components/modules/CatalogPage/CatalogItem'
import { addNewBoiler } from '@/app/api/admin'
import api from '../../../app/axiosClient'
import { useForm } from 'react-hook-form'
import { IInputs } from '@/types/auth'
import { IBoilerPart } from '@/types/boilerparts'

const AdminUpdateBoiler = (el) => {
  console.log(el.el);
  
  console.log(el.el.itemId)

  const {
    formState: { errors },
    handleSubmit,
  } = useForm<IBoilerPart>()
  const onSubmit = async (data: unknown) => {
    try {
      state.loading = true
      const res = await api.patch('boiler-parts/update/' + el.el.itemId, {
        id: el.el.itemId,
        name: state.name,
        description: state.description,
        price: state.price,
        vendor_code: state.vendor_code,
        boiler_manufacturer: state.boiler_manufacturer,
        compatibility: state.compatibility,
      })
      state.loading = false
      console.log(res)
    } catch (error) {
      state.loading = false
      console.log(error)
    }
  }

  const [state, setState] = useState({
    name: el.el.itemName,
    description: el.el.itemDesc,
    price: el.el.itemPrice,
    vendor_code: el.el.itemVendorCode,
    boiler_manufacturer: el.el.itemFactory,
    compatibility: el.el.itemComp,
    loading: false,
  })

  console.log(state)

  return (
    <section
      className={styles.admin__form}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <h1>Изменить товар</h1>
      {state.loading ? (
        'Дабавление товара'
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Название товара</span> <br />
            <input
              type="text"
              name="name"
              onChange={(event) =>
                setState({ ...state, name: event.target.value })
              }
              value={state.name}
            />
          </label>

          <label>
            <span>Описание товара</span> <br />
            <input
              type="text"
              name="description"
              onChange={(event) =>
                setState({ ...state, description: event.target.value })
              }
              value={state.description}
            />
          </label>

          <label>
            <span>Цена товара</span> <br />
            <input
              type="number"
              name="price"
              onChange={(event) =>
                setState({ ...state, price: event.target.value })
              }
              value={state.price}
            />
          </label>

          <label>
            <span>Артикул</span> <br />
            <input
              type="text"
              name="vendor_code"
              onChange={(event) =>
                setState({ ...state, vendor_code: event.target.value })
              }
              value={state.vendor_code}
            />
          </label>

          <label>
            <span>Производитель</span> <br />
            <input
              type="text"
              name="boiler_manufacturer"
              onChange={(event) =>
                setState({ ...state, boiler_manufacturer: event.target.value })
              }
              value={state.boiler_manufacturer}
            />
          </label>

          <label>
            <span>Совместимость</span> <br />
            <input
              type="text"
              name="compatibility"
              onChange={(event) =>
                setState({ ...state, compatibility: event.target.value })
              }
              value={state.compatibility}
            />
          </label>

          <button>Click</button>
        </form>
      )}
    </section>
  )
}

export default AdminUpdateBoiler
