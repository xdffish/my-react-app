import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Snackbar, Alert, Tabs, Tab, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function LemonSqueezyDev() {
  const [apiKey, setApiKey] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`https://api.lemonsqueezy.com/v1/${endpoint}`, {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      setResponseData(response.data);
      setError(null);
      setSnackbarOpen(true);
    } catch (err) {
      setError(err.message);
      setResponseData(null);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0:
        return (
          <Box>
            <Button variant="contained" onClick={() => fetchData('stores')} disabled={!apiKey}>
              获取商店数据
            </Button>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Button variant="contained" onClick={() => fetchData('products')} disabled={!apiKey}>
              获取产品数据
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Button variant="contained" onClick={() => fetchData('orders')} disabled={!apiKey}>
              获取订单数据
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lemon Squeezy 开发者工具
      </Typography>
      
      <Box sx={{ my: 3 }}>
        <TextField
          fullWidth
          label="API 密钥"
          variant="outlined"
          value={apiKey}
          onChange={handleApiKeyChange}
          type="password"
        />
      </Box>
      
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
        <Tab label="商店" />
        <Tab label="产品" />
        <Tab label="订单" />
      </Tabs>
      
      {renderTabContent()}
      
      {responseData && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            数据列表：
          </Typography>
          <List>
            {responseData.data.map((item) => (
              <ListItem button key={item.id} onClick={() => handleItemClick(item)}>
                <ListItemText primary={item.attributes.name || `ID: ${item.id}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
          {error ? `错误：${error}` : "成功获取数据！"}
        </Alert>
      </Snackbar>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>详细信息</DialogTitle>
        <DialogContent>
          <pre>{JSON.stringify(selectedItem, null, 2)}</pre>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>关闭</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default LemonSqueezyDev;