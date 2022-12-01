import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import css from '../Statistics/Statictics.module.css'
import { getRandomHexColor } from "../../utils/getRandomColor"

export function StatisticList({stats, title}) {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.list}>
          {stats.map(stat => (
            <li className={css.item} style={ {backgroundColor: getRandomHexColor()}} key={stat.id}>
              <Statistics stat ={stat}/>
    </li>
          ))}
  </ul>
</section>
    )
}

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired)
}