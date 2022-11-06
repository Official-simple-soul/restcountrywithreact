
import { useGlobalContext } from "./Context";


export const Filter = () => {
    const {name, setName} = useGlobalContext()
    const {region, setRegion} = useGlobalContext()

    return (
        <div className="row justify-content-between align-items-center pt-3 px-3 shadow pb-3">
            <div className="col-lg-4">
                <form className=''>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='inputTarget w-100 px-1'
                            placeholder="search country"
                        />
                </form>
            </div>
            <div className="col-lg-4 mt-3 d-flex justify-content-start">
                <select name="select" value={region} onChange={(e) => setRegion(e.target.value)} id="select" className="w-50 py-1 px-1">
                    <option value="" className="" disabled>filter by region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}










