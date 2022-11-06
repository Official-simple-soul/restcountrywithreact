import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const url = 'https://restcountries.com/v2/all?'
const Countries = () => {
    const {name, region} = useGlobalContext()
    const [countries, setCountries] = useState([])
    const [sI, sSI] = useState([])
    const [reg, setReg] = useState([])
    const [loading, setLoading] = useState(false)
        const fetchData = async() => {
                    setLoading(true)
                    const response = await fetch(url)
                    const countries = await response.json()
                    setCountries(countries)
                    setLoading(false)
                   
                }
    
        const sIF = async() => {
                    setLoading(true)
                    const response = await fetch(`https://restcountries.com/v2/name/${name}`)
                    const countries = await response.json()
                    sSI(countries)
                    setLoading(false)
                }
    
        const regFunc = async() => {
                    setLoading(true)
                    const response = await fetch(`https://restcountries.com/v2/region/${region}`)
                    const countries = await response.json()
                    setReg(countries)
                    setLoading(false)
                }
    useEffect(() => {
        fetchData()
        sIF()
        regFunc()
    }, [name, region])

    if(loading){
        return (
            <>
                <div className="load d-flex justify-content-center align-items-center">
                    <div className="rotate"></div>
                </div>
            </>
        )
    }
    if(reg.length>0){
        if(sI[0]) {
            return (
                <>
                <div className="row py-5 px-3">
                {
                    sI.map((country) => {
                        const {numericCode, name, flag, population, region, capital} = country
    
                        return (
                            <div className="col-lg-3 col-md-6 col-12" id={numericCode} key={numericCode}>  
                                <div className="card bg-transparent shadow">
                                    <img src={flag} alt={name} height='200px' width='100%'/>
                                    <div className="card-body">
                                        <h4 className="">Name: <span className="fw-light country-name">{name}</span></h4>
                                        <h6>Population: <span className="fw-light">{population}</span></h6>
                                        <h6>Region: <span className="fw-light">{region}</span></h6>
                                        <h6>Capital: <span className="fw-light">{capital}</span></h6>
                                    </div>
                                    <Link to={`/country/${name}`} className=''><div className="info-link"></div></Link>
                                </div>
                            </div>
                            
                            
                        )
                    })
                    
                }
                </div>
            </>
            )
        }
        return (
                <>
                <div className="row py-5 px-3">
                {
                    reg.map((country) => {
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
    else if(sI[0]) {
        return (
            <>
            <div className="row py-5 px-3">
            {
                sI.map((country) => {
                    const {numericCode, name, flag, population, region, capital} = country

                    return (
                        <div className="col-lg-3 col-md-6 col-12" id={numericCode} key={numericCode}>  
                                <div className="card bg-transparent shadow">
                                    <img src={flag} alt={name} height='200px' width='100%'/>
                                    <div className="card-body">
                                        <h4 className="">Name: <span className="fw-light country-name">{name}</span></h4>
                                        <h6>Population: <span className="fw-light">{population}</span></h6>
                                        <h6>Region: <span className="fw-light">{region}</span></h6>
                                        <h6>Capital: <span className="fw-light">{capital}</span></h6>
                                    </div>
                                    <Link to={`/country/${name}`} className=''><div className="info-link"></div></Link>
                                </div>
                            </div>
                        
                        
                    )
                })
                
            }
            </div>
        </>
        )
    }
    else if(region === 'All') {
        return (
        
            <>
                <div className="row py-5 px-3">
                {
                    countries.map((country) => {
                        const {numericCode, name, flag, population, region, capital} = country
    
                        return (
                            <div className="col-lg-3 col-md-6 col-12" id={numericCode} key={numericCode}>  
                                <div className="card bg-transparent shadow">
                                    <img src={flag} alt={name} height='200px' width='100%'/>
                                    <div className="card-body">
                                        <h4 className="">Name: <span className="fw-light country-name">{name}</span></h4>
                                        <h6>Population: <span className="fw-light">{population}</span></h6>
                                        <h6>Region: <span className="fw-light">{region}</span></h6>
                                        <h6>Capital: <span className="fw-light">{capital}</span></h6>
                                    </div>
                                    <Link to={`/country/${name}`} className=''><div className="info-link"></div></Link>
                                </div>
                            </div>
                            
                            
                        )
                    })
                    
                }
                </div>
            </>
        )
    }
    else {
        return (
        
            <>
                <div className="row py-5 px-3">
                {
                    countries.map((country) => {
                        const {numericCode, name, flag, population, region, capital} = country
    
                        return (
                            
                            <div className="col-lg-3 col-md-6 col-12" id={numericCode} key={numericCode}>  
                                <div className="card bg-transparent shadow">
                                    <img src={flag} alt={name} height='200px' width='100%'/>
                                    <div className="card-body">
                                        <h4 className="">Name: <span className="fw-light country-name">{name}</span></h4>
                                        <h6>Population: <span className="fw-light">{population}</span></h6>
                                        <h6>Region: <span className="fw-light">{region}</span></h6>
                                        <h6>Capital: <span className="fw-light">{capital}</span></h6>
                                    </div>
                                    <Link to={`/country/${name}`} className=''><div className="info-link"></div></Link>
                                </div>
                            </div>
                            
                            
                        )
                    })
                    
                }
                </div>
            </>
        )
    }
}


export default Countries