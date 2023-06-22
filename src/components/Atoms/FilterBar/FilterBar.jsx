import './FilterBar.css'

const FilterBar = () => {
    return (
        <div className="d-flex gap-2">
            <div className="filter-bar"><p>Date pick</p></div>
            <div className="filter-bar"><p>Updated at (12/05/2022)</p></div>
            <div className="filter-bar"><p>Print</p></div>
        </div>
    )
}

export default FilterBar