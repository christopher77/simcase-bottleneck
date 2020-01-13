import React from "react";
import styles from "./LeaderboardItem.module.css";
import formatDate from "../../components/utils/formatting/formatDate";
import Chevron from "../../components/ui/chevron";
import CurrencyFormat from "react-currency-format";
import classNames from "classnames";

const LeaderboardItem = props => {
  const { user, resalt, index, success_rate } = props;
  const userTimeconvertedToDate = new Date(user.updated_at);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <div
      className={classNames(styles.ContainerItem, {
        [styles.resalted]: resalt
      })}
    >
      <button onClick={toggleAccordion} className={styles.buttonContainer}>
        <span
          className={styles.containerGrid}
          className={classNames(styles.containerGrid, {
            [styles.itemFullHeigth]: isOpen
          })}
        >
          <div className={styles.number}>{index + 1}</div>
          <div
            className={classNames(styles.mainInfo, {
              [styles.mainInfoClosed]: !isOpen
            })}
          >
            <span className={styles.name}>{user.user.name}</span>
            <span className={classNames(styles.amount, styles.rateFormat)}>
              <CurrencyFormat
                thousandSeparator={true}
                value={user.score}
                displayType={"text"}
              />
              lbs
            </span>
          </div>
          <div
            className={classNames(styles.extraContentHidden, {
              [styles.extraContentShown]: isOpen,
              [styles.extraContentShownResalted]: resalt && isOpen
            })}
          >
            <span className={styles.timeFormat}>
              {formatDate(userTimeconvertedToDate)}
            </span>
            <span>{success_rate}% of Max</span>
          </div>
          <div
            className={classNames(styles.chevron, {
              [styles.chevronClicked]: isOpen
            })}
          >
            <Chevron width={12} fill={"#000000"}></Chevron>
          </div>
        </span>
      </button>
    </div>
  );
};

export default LeaderboardItem;
