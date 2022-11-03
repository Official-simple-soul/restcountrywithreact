import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const url = 'https://restcountries.com/v2/all?'

const Countries = () => {
    const [countries, setCountries] = useState([])
        const fetchData = async() => {
                    const response = await fetch(url)
                    const countries = await response.json()
                    setCountries(countries)
                   
                }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="row py-5 px-3">
            {
                countries.map((country) => {
                    const {numericCode, name, flag, population, region, capital} = country

                    return (
                        
                        <div className="col-lg-3 col-md-6 col-12" id={numericCode}>
                            <Link to={`/country/${name}`} className='text-decoration-none text-dark cardlink'>
                            <div className="card bg-transparent shadow">
                                <img src={flag} alt={name} height='200px' width='100%'/>
                                <div className="card-body">
                                    <h4 className="">Name: <span className="fw-light country-name">{name}</span></h4>
                                    <h6>Population: <span className="fw-light">{population}</span></h6>
                                    <h6>Region: <span className="fw-light">{region}</span></h6>
                                    <h6>Capital: <span className="fw-light">{capital}</span></h6>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                        
                    )
                })
            }
            </div>
        </>
    )
}










export default Countries