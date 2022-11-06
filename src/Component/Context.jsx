import React, { useContext, useState } from 'react'



const RestContext = React.createContext()

const RestProvider = ({children}) => {
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
    return <RestContext.Provider value={{name, setName, region, setRegion}}>
                {children}
            </RestContext.Provider>
}

const useGlobalContext = () => {
    return useContext(RestContext)
}

export {useGlobalContext, RestProvider}