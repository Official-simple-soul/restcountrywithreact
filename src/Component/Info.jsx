import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Info = () => {
    const [info, setInfo] = useState([]);
    const [infoB, setInfoB] = useState([]);
    const {name} = useParams()
    const fetchInfo = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`)
        const country = await response.json()
        setInfo(country)
    }

    const fetchInfoB = async () => {
        const response = await fetch(`https://restcountries.com/v2/all?`)
        const countryB = await response.json()
        setInfoB(countryB)
    }
    

    useEffect(() => {
        fetchInfo()
        fetchInfoB()
    }, [name])

    const linkTo =()=>{
        window.location.href='/'
    }
    return (
        <>
            
            <section className="country">
                {
                    info.map(item=> {
                        const {
                            flag,
                            name,
                            population,
                            nativeName,
                            capital,
                            region,
                            topLevelDomain,
                            currencies,
                            languages,
                            subregion,
                            borders
                            } = item
                      return <section id="view">
                                <div class="container">
                                        <p class="shadow text-center p-1 col-4 col-lg-1 my-5" onClick={linkTo}><i class="fa-solid fa-arrow-left me-4"></i><span class="">Back</span></p>
                                        <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="card border-0 shadow bg-transparent">
                                                <img src={flag} alt="" id="flag"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 new mb-3">
                                            <div class="card border-0 bg-transparent">
                                                <h3 id="name">{name}</h3>
                                                <div class="row py-4">
                                                    <div class="col-12 col-lg-6 mb-3">
                                                        <div class="card border-0 bg-transparent">
                                                            <p id="native">Native: {nativeName}</p>
                                                            <p id="population">Population: {population}</p>
                                                            <p id="region">Region: {region}</p>
                                                            <p id="sub">Sub: {subregion}</p>
                                                            <p id="capital">Capital: {capital}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-lg-6">
                                                        <div class="card border-0 bg-transparent">
                                                            <p id="domain">Domain: {topLevelDomain}</p>
                                                            <p id="currency">Currency: {currencies[0].code}</p>
                                                            <p id="language">Languages: {languages.map(item=>`${item.name},`)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center flex-wrap text-start">
                                                    <h5 class="me-3">Borders</h5>
                                                    <div class="borders d-flex justify-content-start align-items-center flex-wrap">
                                                        {
                                                        borders.map((item)=> {
                                                            let borderFull = '', name = ''
                                                            infoB.map((element)=>{
                                                                if(element.alpha3Code === item){
                                                                    borderFull = element.name;
                                                                    name = element.name  
                                                                }
                                                            })
                                                        return <button className="px-2 m-2 rounded"><Link to={`/country/${name}`} style={{textDecoration:'none', color:'black'}}>{borderFull}</Link></button>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    })
                }
            </section>
        </>
    )
}


export default Info