import React from 'react'
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

import menu from "../static/icons/ic_Apps.svg";
import ferramentas from "../static/icons/ic_produtos_ferramentas.svg";
import eletricos from "../static/icons/ic_produtos_eletricos.svg";
import motores from "../static/icons/ic_produtos_motores.svg";
import hidraulicos from "../static/icons/ic_produtos_hidraulicos.svg";
import epi from "../static/icons/ic_produtos_epi.svg";
import abrasivos from "../static/icons/ic_produtos_abrasivos.svg";
import fixacao from "../static/icons/ic_produtos_fixacao.svg";
import correias from "../static/icons/ic_produtos_correias.svg";
import oleos from "../static/icons/ic_produtos_oleos.svg";
import rolamentos from "../static/icons/ic_produtos_rolamentos.svg";
import apps from "../static/icons/ic_Apps.svg";

const Categories = props => {
    return (
        <div>
            <CategoryItem
                text="Ramo"
                icon={menu}
                onClick={() => {}}
                />
            <CategoryItem
                text="Ferramentas"
                icon={ferramentas}
                onClick={() => {}}
                />
            <CategoryItem
                text="Materiais elétricos"
                icon={eletricos}
                onClick={() => {}}
                />
            <CategoryItem
                text="Motores e bombas"
                icon={motores}
                onClick={() => {}}
                />
            <CategoryItem
                text="Hidráulicos"
                icon={hidraulicos}
                onClick={() => {}}
                />
            <CategoryItem
                text="EPI e EPCs"
                icon={epi}
                onClick={() => {}}
                />
            <CategoryItem
                text="Abrasivos"
                icon={abrasivos}
                onClick={() => {}}
                />
            <CategoryItem
                text="Fixação e vedação"
                icon={fixacao}
                onClick={() => {}}
                />
            <CategoryItem
                text="Correias e mangueiras"
                icon={correias}
                onClick={() => {}}
                />
            <CategoryItem
                text="Óleos, fluídos e solventes"
                icon={oleos}
                onClick={() => {}}
                />
            <CategoryItem
                text="Rolamentos"
                icon={rolamentos}
                onClick={() => {}}
                />
            <CategoryItem
                text="Soluções"
                icon={apps}
                onClick={() => {}}
                />
        </div>
    )
}

Categories.propTypes = {

}

export default Categories
