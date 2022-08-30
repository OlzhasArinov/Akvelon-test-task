import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../models";

export function useUsers() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const f = async () => {
        try {
        setError('')
        setLoading(true)
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUsers(json.data);
        setLoading(false)
        } catch(e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
        }
    };
    useEffect(() => {
        f();
    }, []);

    return {users, error, loading}

}
