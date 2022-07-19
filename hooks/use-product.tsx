import useSWR from "swr"
import { add, removeItem } from "../api/product";

const useProducts = () => {
    const { data, error, mutate } = useSWR('/products')
    //? create
    const create = async (item: any) => {
        const product = await add(item);
        mutate([...data, product]);
    }
    //? update
    //? delete
    const remove = async (id: any) => {
        await removeItem(id);
        const newProduct = data.filter((item: any) => remove.id != id)
        mutate(newProduct)
    };
    return {
        data,
        error,
        create,
        remove
    }
}

export default useProducts