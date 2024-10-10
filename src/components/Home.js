import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faComments, faEye, faRocket } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div className="page-content home-page">
    <h2 className="page-title">欢迎来到智能未来</h2>
    <p className="page-subtitle">探索人工智能如何塑造我们的明天</p>
    <div className="feature-section">
      <div className="feature">
        <FontAwesomeIcon icon={faBrain} size="3x" color="#1e90ff" />
        <h3>机器学习</h3>
        <p>利用先进算法,让机器从数据中学习并做出智能决策。</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faComments} size="3x" color="#1e90ff" />
        <h3>自然语言处理</h3>
        <p>实现人机自然交流,推动语言智能的发展。</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faEye} size="3x" color="#1e90ff" />
        <h3>计算机视觉</h3>
        <p>让机器"看懂"世界,开启视觉智能新纪元。</p>
      </div>
    </div>
    <div className="cta-section">
      <h3>准备好迎接AI时代了吗?</h3>
      <Link to="/contact" className="cta-button">
        <FontAwesomeIcon icon={faRocket} /> 联系我们
      </Link>
    </div>
  </div>
);

export default Home;