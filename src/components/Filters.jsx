import React from 'react'

function Filters(props) {
    return (
        <div className="filters-container">
            <div className="header">CATEGORIA DESTAQUE</div>
            <div className="subheader">NOME DA CATEGORIA</div>
            <div>
                <div className="category-header">Sub-categoria</div>
                <div>- Categoria produto 1</div>
                <div>- Categoria produto 2</div>
                <div>- Categoria produto 3</div>
            </div>
            <div className="filter-section">
                <div  className="category-header">DEFINIÇÃO 1</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
            </div>
            <div className="filter-section">
                <div  className="category-header">DEFINIÇÃO 2</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
            </div>
            <div className="filter-section">
                <div  className="category-header">DEFINIÇÃO 3</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
                <div className="filter-option-container"><input type="checkbox" /> Definição</div>
            </div>
            <div>
                <button className="primary-btn clear-btn">LIMPAR FILTROS</button>
            </div>
        </div>
    )
}

Filters.propTypes = {

}

export default Filters

