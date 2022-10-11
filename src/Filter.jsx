const Filter = () => {
    return (
        <div className="row justify-content-between pt-3 px-3">
            <div className="col-lg-4">
                <label htmlFor="" className="">Filter by Region</label>
                <select name="select" id="select" className="w-50 ms-3">
                    <option value="">Africa</option>
                    <option value="">Asia</option>
                    <option value="">Europe</option>
                    <option value="">America</option>
                    <option value="">Oceania</option>
                </select>
            </div>
            <div className="col-lg-3">
                <div className="search d-flex align-items-center justify-content-end">
                    <input type="text" />
                    <button className="btn btn-light btn-outline-dark px-1 py-0 ms-3">Search</button>
                </div>
            </div>
        </div>
    )
}


export default Filter