import useSWR, { useSWRConfig } from "swr"
import { list, signup } from "../api/auth"

export const useAuth = () => {

    //?list user
    const fetcher = async (url: string) => {
        const { data } = await list(url)
        return data
    }
    const { data, error } = useSWR("/users", fetcher)
    const { mutate } = useSWRConfig();

    //? register
    const register = () => {
        mutate("/users", async () => {
            const { data: user } = await signup({ email: "abc@gmail.com", password: "12345" });
            return [...data, user]
        })
    }

    //? login
    //? loguot
    return {
        data,
        error,
        register
    }
}