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
            
            <section classNameName="country">
                {
                    info.map(item=> {
                        const {
                            numericCode,
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
                            let newBorders = []
                            if(borders){
                                newBorders = borders
                            }
                      return <section id="view" key={numericCode}>
                                <div className="container">
                                        <p className="shadow text-center p-1 col-4 col-lg-1 my-5" onClick={linkTo}><i className="fa-solid fa-arrow-left me-4"></i><span className="">Back</span></p>
                                        <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="card border-0 shadow bg-transparent">
                                                <img src={flag} alt="" id="flag"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 new mb-3">
                                            <div className="card border-0 bg-transparent">
                                                <h3 id="name">{name}</h3>
                                                <div className="row py-4">
                                                    <div className="col-12 col-lg-6 mb-3">
                                                        <div className="card border-0 bg-transparent">
                                                            <p id="native">Native: {nativeName}</p>
                                                            <p id="population">Population: {population}</p>
                                                            <p id="region">Region: {region}</p>
                                                            <p id="sub">Sub: {subregion}</p>
                                                            <p id="capital">Capital: {capital}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <div className="card border-0 bg-transparent">
                                                            <p id="domain">Domain: {topLevelDomain}</p>
                                                            <p id="currency">Currency: {currencies[0].code}</p>
                                                            <p id="language">Languages: {languages.map(item=>`${item.name},`)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classNameName="d-flex justify-content-start align-items-center flex-wrap text-start">
                                                    <h5 className="me-3">Borders</h5>
                                                    <div className="borders d-flex justify-content-start align-items-center flex-wrap">
                                                        {
                                                        newBorders.map((item)=> {
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