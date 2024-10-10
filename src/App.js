import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope, faLayerGroup, faKey, faLemon, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider, createTheme, CssBaseline, Box, Typography } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FrameworkHome from './components/FrameworkHome';
import LicenseManagement from './components/LicenseManagement';
import LemonSqueezyDev from './components/LemonSqueezyDev';
import Console from './components/Console';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3', // 蓝色
    },
    secondary: {
      main: '#ff9800', // 橙色
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <header className="App-header" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
            <div className="header-content">
              <div className="logo">
                <h1>智能未来 <span className="subtitle">AI Future</span></h1>
              </div>
              <nav>
                <ul>
                  <li><Link to="/"><FontAwesomeIcon icon={faHome} /> 首页</Link></li>
                  <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> 关于我们</Link></li>
                  <li><Link to="/services"><FontAwesomeIcon icon={faCogs} /> 服务</Link></li>
                  <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> 联系我们</Link></li>
                  <li><Link to="/license"><FontAwesomeIcon icon={faKey} /> 许可证管理</Link></li>
                  <li><Link to="/lemon-squeezy-dev"><FontAwesomeIcon icon={faLemon} /> Lemon Squeezy 开发</Link></li>
                  <li><Link to="/console"><FontAwesomeIcon icon={faChartLine} /> 控制台</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          <div style={{ paddingTop: 'header-height' }}> {/* 替换 'header-height' 为实际的 header 高度 */}
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/framework" component={FrameworkHome} />
                <Route path="/license" component={LicenseManagement} />
                <Route path="/lemon-squeezy-dev" component={LemonSqueezyDev} />
                <Route path="/console" component={Console} />
              </Switch>
            </main>
          </div>
          <Box
            component="footer"
            sx={{
              backgroundColor: '#1c1c1c', // 高级黑背景色
              color: '#a0a0a0', // 浅灰色文字，提高可读性
              py: 1.5, // 保持较小的上下内边距
              borderTop: '1px solid #333333', // 深色边框
              fontSize: '0.9rem', // 保持较小的字体大小
            }}
          >
            <Typography variant="body2" align="center">
              &copy; 2024 智能未来 (AI Future). 开创智能新纪元。
            </Typography>
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;