import React from 'react';

const Contact = () => (
  <div className="page-content contact-page">
    <h2 className="page-title">联系我们</h2>
    <p className="page-subtitle">想了解更多关于AI如何改变您的业务?请与我们联系</p>
    <div className="contact-container">
      <div className="contact-info">
        <h3>联系方式</h3>
        <p><strong>电话:</strong> +86 123 4567 8900</p>
        <p><strong>邮箱:</strong> info@aifuture.com</p>
        <p><strong>地址:</strong> 中国北京市朝阳区科技园路100号智能大厦</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="您的姓名" required />
        <input type="email" placeholder="您的邮箱" required />
        <textarea placeholder="您的留言" required></textarea>
        <button type="submit">发送</button>
      </form>
    </div>
  </div>
);

export default Contact;