import { useState, useEffect } from "react"

const url = 'https://restcountries.com/v2/all?'

const Countries = () => {
    const [countries, setCountries] = useState([])
        const fetchData = async() => {
                    const response = await fetch(url)
                    const countries = await response.json()
                    setCountries(countries)
                    console.log(countries)
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
                        <div className="col-lg-3" id={numericCode}>
                            <div className="card bg-transparent shadow">
                                <img src={flag} alt={name} />
                                <div className="card-body">
                                    <h3>Name: <span className="fw-light">{name}</span></h3>
                                    <h5>Population: <span className="fw-light">{population}</span></h5>
                                    <h5>Region: <span className="fw-light">{region}</span></h5>
                                    <h5>Capital: <span className="fw-light">{capital}</span></h5>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
            </div>
        </>
    )







}










export default Countries