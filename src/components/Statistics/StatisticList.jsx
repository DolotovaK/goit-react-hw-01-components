import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export function StatisticList({stats, title}) {
    return (
      <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
          {stats.map(stat => (
            <li class="item" key={stat.id}>
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