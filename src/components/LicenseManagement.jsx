import React, { useState } from 'react';
import { TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

const LicenseManagement = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const [instanceName, setInstanceName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleActivate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('/api/activate-license', {
        licenseKey,
        instanceName
      });

      if (response.data.activated) {
        setMessage('许可证激活成功！');
      } else {
        setMessage('许可证激活失败。请检查您的许可证密钥。');
      }
    } catch (error) {
      setMessage('激活过程中出错。请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4, pt: 8 }}>
      <Typography variant="h4" gutterBottom>
        许可证管理
      </Typography>
      <form onSubmit={handleActivate}>
        <TextField
          fullWidth
          label="许可证密钥"
          variant="outlined"
          margin="normal"
          value={licenseKey}
          onChange={(e) => setLicenseKey(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="实例名称"
          variant="outlined"
          margin="normal"
          value={instanceName}
          onChange={(e) => setInstanceName(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : '激活许可证'}
        </Button>
      </form>
      {message && (
        <Typography color={message.includes('成功') ? 'success' : 'error'} sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LicenseManagement;