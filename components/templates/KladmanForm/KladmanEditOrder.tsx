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

const KladmanEditOrder = (el) => {
  console.log(el)

  const {
    formState: { errors },
    handleSubmit,
  } = useForm<IBoilerPart>()
  const onSubmit = async (data: unknown) => {
    try {
      state.loading = true
      const res = await api.patch('order/update/' + el.el.id, {
        id: el.el.id,
        name: state.name,
        price: state.price,
        status: state.status
      })
      state.loading = false
      console.log(res)
    } catch (error) {
      state.loading = false
      console.log(error)
    }
  }

  const [state, setState] = useState({
    id: el.el.id,
    name: el.el.name,
    price: el.el.price,
    status: el.el.kladST,
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
      <h1>Изменить товар в заказе</h1>
      {state.loading ? (
        'Дабавление товара'
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Название товара: {state.name}</span> <br />
          </label>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between" }}>
            <label>
              Товар не добавлен <br />
              <input
                type="radio"
                name="status"
                id=""
                checked
                value="Товар не добавлен"
                onChange={(event) =>
                  setState({ ...state, status: event.target.value })
                }
              />
            </label>
            <label>
              Товар добавлен <br />
              <input
                type="radio"
                name="status"
                id=""
                value="Товар добавлен"
                onChange={(event) =>
                  setState({ ...state, status: event.target.value })
                }
              />
            </label>
          </div>

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

          <button>Click</button>
        </form>
      )}
    </section>
  )
}

export default KladmanEditOrder
