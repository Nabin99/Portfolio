import Button from '../../common/button/button';
import Section from '../../common/section/section';
import styles from './index.module.scss';

const HeroSection = () => {
  return (
      <Section title='Hero Section'>
          <div className={styles.contentWrapper}>
              <div>
                <h1>
                HI,<br/>
                IT{`’`}S ME <br/>
                NABIN DHITAL. <br/>
                </h1>
                <p>
                A Full Stack WEB Developer. <br/>
                Currently, a Software Engineering Trainee at Optimum Futurist.
                </p>
                <div className={styles.buttonWrapper}>
                  <Button label='Hire Me' clickHandler={()=>{}}/>
                  <Button label='Hire Me' clickHandler={()=>{}}/>
                </div>
              </div>
              
          </div>
      </Section>
    
  )
}

export default HeroSection