import styles from './section.module.scss';

interface SectionType  {
    ({children,title}:{children:JSX.Element; title: string;}):JSX.Element;
}
    

const Section:SectionType = ({children, title}) => {
  return (
    <section title={title} className={styles.sections}>
        <div>
        {children}
        </div>
    </section>
  )
}

export default Section;
