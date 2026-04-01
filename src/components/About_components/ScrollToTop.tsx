import React, { useEffect, useState, FC } from 'react';
import {
  Fab,
  Zoom,
  useScrollTrigger,
  Box,
  styled
} from '@mui/material';
import { ArrowUp } from 'lucide-react';

const StyledFab = styled(Fab)(() => ({
  backgroundColor: 'var(--color-primary)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'var(--color-secondary)',
  },
}));

const ScrollToTop: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // 👈 lower for testing
  });

  if (!mounted) return null;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 2000, // 👈 IMPORTANT (above everything)
        }}
      >
        <StyledFab onClick={handleClick}>
          <ArrowUp />
        </StyledFab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;