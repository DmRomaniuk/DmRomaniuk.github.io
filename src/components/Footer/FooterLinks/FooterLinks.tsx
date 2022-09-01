import arrowLogo from '../../../images/Vector 1.png';
import s from './FooterLinks.module.css';

const FooterLinks = () => {
    return (
        <div className={s.links}>
            <a href="#" className={s.footer_link__styles}>
                <img src={arrowLogo} alt="arrowLogo" className={s.arrow_logo_1} />
                <span className={s.to_previous__page}>Previous</span>
            </a>
            <a href="#" className={s.footer_link__styles}>
                <span className={s.to_next__page}>Next</span>
                <img src={arrowLogo} alt="arrowLogo" className={s.arrow_logo_2} />
            </a>
        </div>
    )
}

export default FooterLinks;