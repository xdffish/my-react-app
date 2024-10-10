import React from 'react';
import styles from './FrameworkHome.module.less';
import StatisticCard from './StatisticCard';
import UpdateList from './UpdateList';
import TaskList from './TaskList';

const FrameworkHome = () => {
  const quickAccessItems = [
    { title: '角色管理', key: 'role' },
    { title: '用户管理', key: 'user' },
    { title: '资源管理', key: 'resource' },
    { title: '字典管理', key: 'dictionary' },
    { title: '组织管理', key: 'organization' },
    { title: '权限分配', key: 'permission' },
    { title: '工作流待办', key: 'workflow-todo' },
    { title: '工作流已办', key: 'workflow-done' },
    { title: '我的消息', key: 'my-messages' },
  ];

  return (
    <div className={styles.frameworkHome}>
      <header className={styles.frameworkHome__header}>
        <div className={styles.frameworkHome__headerLeft}>
          <div className={styles.frameworkHome__welcomeMessage}>
            2024年09月26日 你好! 欢迎使用赛诺框架。
          </div>
          <div className={styles.frameworkHome__welcomeTitle}>
            欢迎来到SinoGear
          </div>
        </div>
        <div className={styles.frameworkHome__headerRight}>
          <button className={styles.frameworkHome__newHandGuide}>新手指导</button>
          <div className={styles.frameworkHome__avatar}></div>
        </div>
      </header>
      
      <main className={styles.frameworkHome__main}>
        <section className={styles.frameworkHome__statistics}>
          <StatisticCard title="今日总访问次数" value={7} icon="eye" />
          <StatisticCard title="当前在线人数" value={3} icon="user" />
          <StatisticCard title="系统消息" value={3} icon="message" />
        </section>
        
        <section className={styles.frameworkHome__quickAccess}>
          <div className={styles.frameworkHome__sectionHeader}>
            <h2 className={styles.frameworkHome__sectionTitle}>快捷入口</h2>
            <span className={styles.frameworkHome__customLink}>管理</span>
          </div>
          <div className={styles.frameworkHome__quickAccessGrid}>
            {quickAccessItems.map(item => (
              <button key={item.key} className={styles.frameworkHome__quickAccessButton}>
                {item.title}
              </button>
            ))}
          </div>
        </section>
        
        <div className={styles.frameworkHome__bottomSection}>
          <section className={styles.frameworkHome__latestUpdates}>
            <div className={styles.frameworkHome__sectionHeader}>
              <h2 className={styles.frameworkHome__sectionTitle}>最近更新</h2>
              <span className={styles.frameworkHome__moreLink}>更多</span>
            </div>
            <UpdateList />
          </section>
          
          <section className={styles.frameworkHome__pendingTasks}>
            <div className={styles.frameworkHome__sectionHeader}>
              <h2 className={styles.frameworkHome__sectionTitle}>待办事项</h2>
              <div className={styles.frameworkHome__taskCount}>
                待办 <span className={styles.frameworkHome__taskCountNumber}>9</span> 已成功 <span className={styles.frameworkHome__taskCountNumber}>18</span>
              </div>
            </div>
            <TaskList />
          </section>
        </div>
      </main>
    </div>
  );
};

export default FrameworkHome;
