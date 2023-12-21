import { createContext, useEffect, useState } from 'react'

export const storeData = createContext();


function DataStore({ children }) {
    const [data, setData] = useState([]);
    const fetchfun = async () => {
        try{
            const res = await fetch("https://udemy-server-i52o.onrender.com/courses");  
        const user = await res.json();
        setData(user);
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchfun();
    }, [])
    return (
        <div>
            <storeData.Provider value={[data, setData]}>
                {children}
            </storeData.Provider>
        </div>
    )
}

export default DataStore 