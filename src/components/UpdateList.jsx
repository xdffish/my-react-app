import React from 'react';
import styles from './UpdateList.module.less';

const UpdateList = () => {
  const updates = [
    { version: 'SinoGear 3.1.0', date: '2023-04-12' },
    { version: 'SinoGear 3.0.0', date: '2023-09-27' },
    // ... 添加更多更新
  ];

  return (
    <ul className={styles.updateList}>
      {updates.map((update, index) => (
        <li key={index} className={styles.updateList__item}>
          <span className={styles.updateList__version}>{update.version}</span>
          <span className={styles.updateList__date}>{update.date}</span>
        </li>
      ))}
    </ul>
  );
};

export default UpdateList;