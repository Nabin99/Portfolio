import Section from '../../common/section/section';
import styles from './footer.module.scss';
import logo from '../../../assests/svg/logo.svg';


const FooterSection = () => {
  return (
      <footer title={`Nabin Dhital${"'"}s footer section`} className={styles.footer}>
         <Section title='footer'>
             <div className={styles.footerWrapper}>
                 
                     <div className={styles.logoWrapper}>
                        <img src={logo} alt="logo" />
                        <h2>
                        Nabin Dhital
                        </h2>
                    </div>
                    <p>
                        Here is the end for the Page. <br />
                        you can surf further if you like. Thank you.
                    </p>
                
             </div>
        </Section>
      </footer>
    
  )
}

export default FooterSection;