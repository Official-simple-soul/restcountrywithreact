import { useEffect } from "react"
const Header = () => {

const body = document.querySelector('body')
    const changeMode = () => {
        body.classList.toggle('bg-dark')
        body.classList.toggle('text-white')
    }

    return (
        <header className="d-flex justify-content-between align-items-center shadow pt-4 px-3">
            <div className="logo">
                <h2 className="mb-0">Where in the world?</h2>
            </div>
            <i className="fa-solid fa-moon fs-2" onClick={changeMode}></i>
        </header>
    )
}

export default Header
