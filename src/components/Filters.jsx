import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";

function Filters() {
    const { filters, setFilters } = useFilters();
    const minPriceFilteredId = useId();
    const categoryFilteredId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            minPrice: event.target.value,
        }));
    };

    const handleChangeCategory = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            category: event.target.value,
        }));
    };

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilteredId}>Precio a partir de:</label>
                <input
                    type='range'
                    id={minPriceFilteredId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilteredId}>Categoría:</label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Móviles</option>
                    <option value='vehicles'>Coches</option>
                    <option value='womens-jewellry'>Joyería</option>
                    <option value='mobile-accessories'>Accesorios de móvil</option>
                </select>
            </div>
        </section>
    );
}
export default Filters;
