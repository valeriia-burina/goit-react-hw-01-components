import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.stat_title}>Upload stats</h2>

      <ul className={css.stat_statlist}>
        {data.map(data => (
          <li key={data.id} className={css.stat_item}>
            <span className={css.stat_label}>{data.label}</span>
            <span className={css.stat_percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
