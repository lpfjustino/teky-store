import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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

import letsEncryptSquare from "../../static/icons/footer/security/sec_LetsEncrypt_Square.svg";
import pCIDSS from "../../static/icons/footer/security/sec_PCI_DSS.svg";
import siteBlindado from "../../static/icons/footer/security/sec_SiteBlindado.svg";

function RightSide(props) {
    return (
        <div className="right-side-container">
            <Row className="footer-row">
                <Col className="social-column" md={3} xs={6}>
                    <div className="header">ATENDIMENTO</div>
                    <div><NavLink to="/">Fale conosco</NavLink></div>
                    <div><NavLink to="/">Trocas e Devoluções</NavLink></div>
                    <div><NavLink to="/">Política de Preços</NavLink></div>
                </Col>
                <Col className="social-column" md={3} xs={6}>
                    <div className="header">INSTITUCIONAL</div>
                    <div><NavLink to="/">Quem somos</NavLink></div>
                    <div><NavLink to="/">Política de segurança</NavLink></div>
                    <div><NavLink to="/">Logistas Parceiros</NavLink></div>
                </Col>
                <Col className="social-column" md={3} xs={6}>
                    <div className="header">FALE CONOSCO</div>
                    <div><NavLink to="/">(51) 0000-0000</NavLink></div>
                    <div><NavLink to="/">contato@yeky.com.br</NavLink></div>
                </Col>
                <Col className="social-column" md={3} xs={6}>
                    <div className="header">REDES SOCIAIS</div>
                    <div className="icon-container social-icon-container" >
                        <img src={facebook} alt="facebook icon"/>
                        <img src={instagram} alt="instagram icon"/>
                        <img src={whatsapp} alt="whatsapp icon"/>
                        <img src={youtube} alt="youtube icon"/>
                    </div>
                </Col>
            </Row>
            <Row className="footer-row">
                <Col className="payment-column" md={6} xs={6}>
                    <Row>
                        <Col className="header">
                            FORMAS DE PAGAMENTO
                        </Col>
                    </Row>
                    <div className="icon-container social-icon-container">
                        <img src={visa}  alt="visa icon"/>
                        <img src={mastercard}  alt="mastercard icon"/>
                        <img src={americanExpress}  alt="americanExpress icon"/>
                        <img src={elo}  alt="elo icon"/>
                        <img src={maestro}  alt="maestro icon"/>
                        <img src={dinners}  alt="dinners icon"/>
                        <img src={hipercard}  alt="hipercard icon"/>
                        <img src={boleto}  alt="boleto icon"/>
                    </div>
                </Col>
                <Col className="security-column" md={6} xs={6}>
                    <div className="header">
                        SITE SEGURO
                    </div>
                    <div className="icon-container social-icon-container" >
                        <img src={letsEncryptSquare} alt="letsEncryptSquare icon"/>
                        <img src={pCIDSS} alt="pCIDSS icon"/>
                        <img src={siteBlindado} alt="siteBlindado icon"/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

RightSide.propTypes = {

}

export default RightSide

