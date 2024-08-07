import { createContext, useState } from "react";
import PropTypes from "prop-types";

/* 1. Crear context */
export const FiltersContext = createContext();

/* 2. Crear el Provider para proveer acceo al context */

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
    });
    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}
FiltersProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
