import React from 'react'
import { Row, Col } from 'react-bootstrap';

import visa from "../../static/icons/footer/payment/pgt_Visa.svg";
import mastercard from "../../static/icons/footer/payment/pgt_Mastercard.svg";
import americanExpress from "../../static/icons/footer/payment/pgt_AmericanExpress.svg";
import elo from "../../static/icons/footer/payment/pgt_Elo.svg";
import maestro from "../../static/icons/footer/payment/pgt_Maestro.svg";
import dinners from "../../static/icons/footer/payment/pgt_Dinners.svg";
import hipercard from "../../static/icons/footer/payment/pgt_Hipercard.svg";
import boleto from "../../static/icons/footer/payment/pgt_Boleto.svg";

import facebook from "../../static/icons/footer/social/btn_Social_Facebook.svg";
import instagram from "../../static/icons/footer/social/btn_Social_Instagram.svg";
import whatsapp from "../../static/icons/footer/social/btn_Social_Whatsapp.svg";
import youtube from "../../static/icons/footer/social/btn_Social_Youtube.svg";

import letsEncrypt_Square from "../../static/icons/footer/security/sec_LetsEncrypt_Square.svg";
import pCI_DSS from "../../static/icons/footer/security/sec_PCI_DSS.svg";
import siteBlindado from "../../static/icons/footer/security/sec_SiteBlindado.svg";

function RightSide(props) {
    return (
        <div className="right-side-container">
            <Row>
                <Col className="logo-column" md={3}>
                    <div className="header">ATENDIMENTO</div>
                    <div><a href="#">Fale conosco</a></div>
                    <div><a href="#">Trocas e Devoluções</a></div>
                    <div><a href="#">Política de Preços</a></div>
                </Col>
                <Col className="logo-column" md={3}>
                    <div className="header">INSTITUCIONAL</div>
                    <div><a href="#">Quem somos</a></div>
                    <div><a href="#">Política de segurança</a></div>
                    <div><a href="#">Logistas Parceiros</a></div>
                </Col>
                <Col className="logo-column" md={3}>
                    <div className="header">FALE CONOSCO</div>
                    <div><a href="#">(51) 0000-0000</a></div>
                    <div><a href="#">contato@yeky.com.br</a></div>
                </Col>
                <Col className="logo-column" md={3}>
                    <div className="header">REDES SOCIAIS</div>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={whatsapp} />
                    <img src={youtube} />
                </Col>
            </Row>
            <Row>
                <Col className="instruction-column" md={6}>
                    <Row>
                        <Col className="header">
                            FORMAS DE PAGAMENTO
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}><img src={visa}/></Col>
                        <Col md={1}><img src={mastercard}/></Col>
                        <Col md={1}><img src={americanExpress}/></Col>
                        <Col md={1}><img src={elo}/></Col>
                        <Col md={1}><img src={maestro}/></Col>
                        <Col md={1}><img src={dinners}/></Col>
                        <Col md={1}><img src={hipercard}/></Col>
                        <Col md={1}><img src={boleto}/></Col>
                    </Row>
                </Col>
                <Col className="instruction-column" md={6}>
                    <Row>
                        <Col className="header">
                            SITE SEGURO
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}><img src={letsEncrypt_Square}/></Col>
                        <Col md={1}><img src={pCI_DSS}/></Col>
                        <Col md={1}><img src={siteBlindado}/></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

RightSide.propTypes = {

}

export default RightSide

