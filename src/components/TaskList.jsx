import React from 'react';
import styles from './TaskList.module.less';

const TaskList = () => {
  const tasks = [
    { title: '医疗费用核复:审批, 请处理', submitter: '访客', time: '2024-09-26 01:28:54' },
    // ... 添加更多任务
  ];

  return (
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <li key={index} className={styles.taskList__item}>
          <div className={styles.taskList__title}>{task.title}</div>
          <div className={styles.taskList__info}>
            <span>提交人: {task.submitter}</span>
            <span>提交时间: {task.time}</span>
          </div>
          <button className={styles.taskList__viewButton}>查看</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;