import { useEffect, useState } from "react";
import type { Obra } from "../../domain/models/Obra";
import fetchObras from "../api/obras/obrasApi";

/**
 * Custom hook to fetch and manage the state of obras data.
 *
 * @returns An object containing:
 * - obras: An array of Obra objects representing the obras data fetched from the server.
 * - loading: A boolean indicating the loading state of the fetch operation.
 * - error: A string containing the error message if the fetch operation fails, otherwise null.
 */

const useObras = () => {
     
    const [obras, setObras] = useState<Obra[]>([]);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);
     
    useEffect( () => {
        fetchObras().then((response) => {
            setObras(response);
            setLoading(false);
        }).catch((error) => {
            setError(error.message);
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
        
    }, []);   

    return { obras, loading, error };

};

export default useObras;