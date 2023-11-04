import { useSubmit } from "react-router-dom"
import Button from "./Button"
import { Input } from '../SharedComponents/Input'
import { server_calls } from '../api/server'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form'
import { chooseBurger, chooseFries, chooseDrink, chooseTotal } from '../redux/slices/RootSlice'

interface OrderFormProps {
  id?: string[]
}

const OrderForm = (props:OrderFormProps) => {
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${ data } ${ props.id }`);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
          // Dispatch basically updates our state / Redux store    
      dispatch(chooseBurger(data.burger));
      dispatch(chooseFries(data.fries));
      dispatch(chooseDrink(data.drink));
      dispatch(chooseTotal(data.total));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
      }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="burger">Burger Type</label>
          <Input {...register('burger')} name='burger' placeholder="Burger" />
        </div>
        <div>
          <label htmlFor="fries">Fries</label>
          <Input {...register('fries')} name='fries' placeholder="Fries" />
        </div>
        <div>
          <label htmlFor="drink">Drink</label>
          <Input {...register('drink')} name='drink' placeholder="Drink" />
        </div>
        <div>
          <label htmlFor="total">Total</label>
          <Input {...register('total')} name='total' placeholder="Total" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-orange-200 p-2 rounded hover:bg-gray-600 text-black"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm