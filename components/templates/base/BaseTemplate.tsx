import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextString: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextString }) => {
  return <div className={styles.container}>{sampleTextString}</div>;
};

export default BaseTemplate;
