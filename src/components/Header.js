import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: '0',
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Header = ({ set }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{ backgroundColor: '#121212' }} position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="open drawer">
          <Link className="arrow-link" to="/">
            <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
          </Link>
        </IconButton>
        <Typography
          variant="h6"
          wrap
          component="div"
          style={{ width: '100%' }}
          sx={{ flexGrow: 1, display: { sm: 'block' } }}
        >
          Heros App
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => set(e.target.value)}
          />
        </Search>
      </Toolbar>
    </AppBar>
  </Box>
);

Header.propTypes = {
  set: PropTypes.func,
};

Header.defaultProps = {
  set: () => {},
};

export default Header;
