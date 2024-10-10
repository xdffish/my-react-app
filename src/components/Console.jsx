import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Box, Snackbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faChartBar, faFileInvoiceDollar, faCog, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import StatisticCard from './StatisticCard';

const Console = () => {
  const [balance, setBalance] = useState(10000);
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleRecharge = () => {
    const amount = parseFloat(rechargeAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setRechargeAmount('');
      showSnackbar(`成功充值 ￥${amount.toFixed(2)}`);
    } else {
      showSnackbar('请输入有效的充值金额');
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDownloadBill = () => {
    // 模拟下载账单
    showSnackbar('账单下载已开始');
  };

  const handleRequestInvoice = () => {
    // 模拟申请发票
    showSnackbar('发票申请已提交');
  };

  const usageData = [
    { service: '云服务器', usage: '120小时', cost: '￥240' },
    { service: '对象存储', usage: '500GB', cost: '￥50' },
    { service: '负载均衡', usage: '2个实例', cost: '￥60' },
    { service: 'CDN流量', usage: '1TB', cost: '￥80' },
  ];

  const billData = [
    { date: '2024-03-01', amount: '￥150.00', status: '已支付' },
    { date: '2024-02-01', amount: '￥280.00', status: '已支付' },
    { date: '2024-01-01', amount: '￥320.00', status: '已支付' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>财务总览</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatisticCard
            icon={<FontAwesomeIcon icon={faWallet} />}
            title="账户余额"
            value={`￥${balance.toFixed(2)}`}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatisticCard
            icon={<FontAwesomeIcon icon={faChartBar} />}
            title="本月消费"
            value="￥430.00"
            color="#2196f3"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatisticCard
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
            title="待付账单"
            value="￥0.00"
            color="#ff9800"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatisticCard
            icon={<FontAwesomeIcon icon={faCog} />}
            title="运行中服务"
            value="4个"
            color="#9c27b0"
          />
        </Grid>
      </Grid>

      <Paper style={{ marginTop: '20px' }}>
        <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab label="账户总览" />
          <Tab label="充值" />
          <Tab label="账单" />
        </Tabs>
        <Box p={3}>
          {tabValue === 0 && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>账户余额</Typography>
                <Typography variant="h4">{`￥${balance.toFixed(2)}`}</Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={() => setTabValue(1)}>
                  立即充值
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>快捷操作</Typography>
                <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faDownload} />} style={{ marginRight: '10px' }} onClick={handleDownloadBill}>
                  下载账单
                </Button>
                <Button variant="outlined" startIcon={<FontAwesomeIcon icon={faUpload} />} onClick={handleRequestInvoice}>
                  申请发票
                </Button>
              </Grid>
            </Grid>
          )}
          {tabValue === 1 && (
            <div>
              <Typography variant="h6" gutterBottom>快速充值</Typography>
              <TextField
                label="充值金额"
                variant="outlined"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
                style={{ marginRight: '10px' }}
              />
              <Button variant="contained" color="primary" onClick={handleRecharge}>
                充值
              </Button>
            </div>
          )}
          {tabValue === 2 && (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>账单日期</TableCell>
                    <TableCell>金额</TableCell>
                    <TableCell>状态</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {billData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>

      <Paper style={{ marginTop: '20px' }}>
        <Typography variant="h6" style={{ padding: '20px 20px 0' }}>资源使用情况</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>服务名称</TableCell>
                <TableCell>使用量</TableCell>
                <TableCell>费用</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usageData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.usage}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Console;