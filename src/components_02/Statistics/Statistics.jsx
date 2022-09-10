import css from 'components_02/Statistics/Statistics.module.css'
import PropTypes from 'prop-types';



  export const Statistics = ({ title, data  }) => {
    
    return (
        <section className={css.statistics}>
         {title && (<h2 className="title">{title}</h2>)}
      
        <ul className={css.statList}>
        {data.map(({ id, label, percentage}) => (
          <li key={id} className={css.item}><span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span></li>
        ))}
        </ul>
      </section>
    );
  };


  Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}