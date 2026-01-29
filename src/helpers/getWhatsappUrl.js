import { WHATSAPP_NUMBER } from '../constants';

export const getWhatsappUrl = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20vi%20o%20seu%20portfolio%20e%20adorei%20o%20seu%20trabalho.%20Gostaria%20de%20saber%20sua%20disponibilidade%20para%20agendamento.`;
  return whatsappUrl;
};
