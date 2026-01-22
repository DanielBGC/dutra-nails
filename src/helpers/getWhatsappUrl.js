import { WHATSAPP_NUMBER } from '../constants';

export const getWhatsappUrl = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Vi%20seu%20portfolio%20e%20adorei%20o%20trabalho%2C%20gostaria%20de%20agendar%20um%20horário!`;
    return whatsappUrl;
}