import React, { PureComponent } from 'react';
import T from 'prop-types';
import { toast } from 'react-toastify';
import styles from './Controls.module.css';

export default class Controls extends PureComponent {
  static propTypes = {
    onDeposit: T.func.isRequired,
    onWithdraw: T.func.isRequired,
    balance: T.number.isRequired,
  };

  state = { inputText: '' };

  handleinputTextChange = e => {
    this.setState({ inputText: e.currentTarget.value });
  };

  handleDeposit = e => {
    if (this.checkOperation(e.currentTarget.name)) {
      this.props.onDeposit(e.currentTarget.name, this.state.inputText);
      this.setState({ inputText: '' });
    } else this.setState({ inputText: '' });
  };

  handleWithdraw = e => {
    if (this.checkOperation(e.currentTarget.name)) {
      this.props.onWithdraw(e.currentTarget.name, this.state.inputText);
      this.setState({ inputText: '' });
    } else this.setState({ inputText: '' });
  };

  checkOperation = operation => {
    if (this.state.inputText <= 0) {
      toast.info('Введите сумму для проведения операции!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return 0;
    }
    if (operation === 'Withdraw') {
      if (this.state.inputText > this.props.balance) {
        toast.error('На счету недостаточно средств для проведения операции!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return 0;
      }
    }
    return true;
  };

  render() {
    const { inputText } = this.state;
    return (
      <section className={styles.controls}>
        <input
          type="number"
          name="amount"
          value={inputText}
          onChange={this.handleinputTextChange}
        />
        <button type="button" name="Deposit" onClick={this.handleDeposit}>
          Deposit
        </button>
        <button type="button" name="Withdraw" onClick={this.handleWithdraw}>
          Withdraw
        </button>
      </section>
    );
  }
}
