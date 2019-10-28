import React from 'react';
import T from 'prop-types';
import styles from './Balance.module.css';

export default function Balance({ stats: { income, expenses }, balance }) {
  return (
    <section className={styles.balance}>
      <span>{income}$</span>
      <span> {expenses}$</span>
      <span>Balance: {balance}$</span>
    </section>
  );
}
Balance.propTypes = {
  stats: T.shape({
    income: T.number.isRequired,
    expenses: T.number.isRequired,
  }).isRequired,
  balance: T.number.isRequired,
};
