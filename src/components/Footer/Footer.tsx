import FooterStyled from './FooterStyled';
import * as translate from '../../data/translate.json';

const Footer = () => {
  return (
    <FooterStyled>
      {translate.footerText}
    </FooterStyled>
  )
};

export default Footer;