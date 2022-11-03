const Filter = () => {
    // window.addEventListener('DOMContentLoaded', () =>{
        // const search = document.querySelector('input')
        
        // search.addEventListener('input', () => {
        //     const value = search.value
            const countryName = document.querySelectorAll('.country-name')

        //     countryName.forEach((name) => {
        //         if(name.innerText.toLowerCase().includes(value))name.parentElement.style.display='block';
        //         else name.parentElement.style.display='none';
        //     })
        // })
        for(let i=0;i<countryName.length;i++){
            if(countryName[i].innerText.toLowerCase().includes('Algeria')) {
                countryName[i].parentElement.parentElement.parentElement.style.display='block';
            }
            else {
                countryName[i].parentElement.parentElement.parentElement.style.display='none';
            }
        }
    
    // })
    return (
        <div className="row justify-content-between pt-3 px-3 shadow pb-3">
            <div className="col-lg-3 d-flex justify-content-center">
                <div className="search d-flex align-items-center justify-content-end w-100">
                    <input type="text" className="w-100 px-1 py-1" placeholder="search country"/>
                </div>
            </div>
            <div className="col-lg-4 mt-3 d-flex justify-content-start">
                <select name="select" id="select" className="w-50 py-1 px-1">
                    <option value="" className="disabled">filter by region</option>
                    <option value="">Africa</option>
                    <option value="">Asia</option>
                    <option value="">Europe</option>
                    <option value="">America</option>
                    <option value="">Oceania</option>
                </select>
            </div>
        </div>
    )
}


export default Filter