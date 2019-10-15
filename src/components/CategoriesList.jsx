import React from "react";
import CategoryItem from "./CategoryItem";
import { Row, Col } from "react-bootstrap";

import menu from "../static/icons/categories/ic_menu.svg";
import ferramentas from "../static/icons/categories/ic_produtos_ferramentas.svg";
import eletricos from "../static/icons/categories/ic_produtos_eletricos.svg";
import motores from "../static/icons/categories/ic_produtos_motores.svg";
import hidraulicos from "../static/icons/categories/ic_produtos_hidraulicos.svg";
import epi from "../static/icons/categories/ic_produtos_epi.svg";
import abrasivos from "../static/icons/categories/ic_produtos_abrasivos.svg";
import fixacao from "../static/icons/categories/ic_produtos_fixacao.svg";
import correias from "../static/icons/categories/ic_produtos_correias.svg";
import oleos from "../static/icons/categories/ic_produtos_oleos.svg";
import rolamentos from "../static/icons/categories/ic_produtos_rolamentos.svg";
import apps from "../static/icons/categories/ic_Apps.svg";

const Categories = () => {
  return (
    <Row className="categories-list">
      <Col md={1} sm={2} xs={3}>
        <CategoryItem text="Ramo" icon={menu} onClick={() => {}} />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Ferramentas"
          icon={ferramentas}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Materiais elétricos"
          icon={eletricos}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Motores e bombas"
          icon={motores}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Hidráulicos"
          icon={hidraulicos}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem text="EPI e EPCs" icon={epi} onClick={() => {}} />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem text="Abrasivos" icon={abrasivos} onClick={() => {}} />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Fixação e vedação"
          icon={fixacao}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Correias e mangueiras"
          icon={correias}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem
          text="Óleos, fluídos e solventes"
          icon={oleos}
          onClick={() => {}}
        />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem text="Rolamentos" icon={rolamentos} onClick={() => {}} />
      </Col>
      <Col md={1} sm={2} xs={3}>
        <CategoryItem text="Soluções" icon={apps} onClick={() => {}} />
      </Col>
    </Row>
  );
};

Categories.propTypes = {};

export default Categories;
