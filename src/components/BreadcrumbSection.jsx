import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from "react-bootstrap";

function BreadcrumbSection(props) {
    return (
        <div className="breadcrumb-section-container">
            <Breadcrumb className="breadcrumb category-breadcrumb">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Categoria</Breadcrumb.Item>
                <Breadcrumb.Item>Sub-categoria</Breadcrumb.Item>
            </Breadcrumb>
        <div className="sorting-container">
            <div className="sort-label">
                Ordenação
            </div>
            <div className="select-container">
                <select>
                    <option value="" disabled selected>Escolha aqui</option>
                </select>
            </div>
        </div>
    </div>
    )
}

BreadcrumbSection.propTypes = {

}

export default BreadcrumbSection

