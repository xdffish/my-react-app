import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLightbulb, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
  background: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const About = () => {
  const theme = useTheme();

  return (
    <div style={{ paddingTop: '80px' }}> {/* 添加顶部内边距 */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            关于智能未来
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 3 }}>
            在科技与想象力的交汇处，我们正在开创智能新纪元
          </Typography>
          <Button variant="contained" color="primary" size="large">
            了解更多
          </Button>
        </Box>
        
        <Grid container spacing={4}>
          {[
            { icon: faRocket, title: "我们的使命", content: "推动AI技术的前沿发展，为人类社会带来革命性的变革和进步。" },
            { icon: faLightbulb, title: "创新理念", content: "将尖端AI技术与实际应用相结合，创造出改变世界的智能解决方案。" },
            { icon: faUsers, title: "精英团队", content: "汇聚来自全球的AI专家、工程师和创新者，打造顶尖的研发团队。" },
            { icon: faChartLine, title: "未来展望", content: "致力于将AI技术推向新高度，引领智能化时代的到来，创造更美好的未来。" }
          ].map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <StyledPaper elevation={2}>
                <Box>
                  <IconWrapper>
                    <FontAwesomeIcon icon={item.icon} />
                  </IconWrapper>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.content}
                  </Typography>
                </Box>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <StyledPaper elevation={2}>
              <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
                我们的愿景
              </Typography>
              <Typography paragraph color="text.secondary">
                在智能未来，我们致力于成为全球领先的AI技术创新者和应用开发者。我们的目标是：
              </Typography>
              <Typography component="ul" sx={{ textAlign: 'left', pl: 4 }} color="text.secondary">
                {[
                  "推动AI技术在各个领域的深度应用，提高生产效率和生活质量",
                  "发展负责任的AI，确保技术发展与伦理、安全相协调",
                  "培养下一代AI人才，为行业持续发展注入新鲜血液",
                  "与全球合作伙伴共同构建开放、共享的AI生态系统"
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12}>
            <StyledPaper elevation={2}>
              <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
                加入我们，共创智能未来
              </Typography>
              <Typography paragraph color="text.secondary">
                如果你对AI充满热情，渴望在这个快速发展的领域做出自己的贡献，我们诚挚邀请你加入我们的团队。
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                查看职位空缺
              </Button>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;