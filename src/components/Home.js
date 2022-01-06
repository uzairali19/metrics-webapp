import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const marvels = useSelector((state) => state.marvelsReducer);

  useEffect(() => {
    const data = marvels.data.results;
    setLoading(true);
    setData(data);
  }, [marvels]);

  return (
    <div>
      {search === '' ? (
        <div>
          <ImageList sx={{ width: 'auto', gap: '0 !important' }} variant="quilted" cols={2}>
            {loading ? (
              <ImageListItem sx={{ overflow: 'hidden' }} cols={2} rows={2}>
                <Link to={`/${data[39].id}`}>
                  <img
                    src={`${data[39].thumbnail.path}.${data[39].thumbnail.extension}`}
                    alt={data[39].name}
                    loading="lazy"
                    style={{ width: '100%' }}
                  />
                  <ImageListItemBar
                    sx={{
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={data[39].name}
                    subtitle={`Total Comics: ${data[39].comics.available}`}
                    position="top"
                  />
                </Link>
              </ImageListItem>
            ) : null}
          </ImageList>

          <ImageList sx={{ width: 'auto', gap: '0 !important' }} variant="quilted" cols={2}>
            {loading
              ? data.map((v) => {
                  return (
                    <ImageListItem
                      sx={{ overflow: 'hidden' }}
                      key={v.id}
                      cols={v.cols || 1}
                      rows={v.rows || 1}
                    >
                      <Link to={`/${v.id}`}>
                        <img
                          src={`${v.thumbnail.path}.${v.thumbnail.extension}`}
                          alt={v.name}
                          loading="lazy"
                          style={{ width: '100%', height: '100%' }}
                        />
                        <ImageListItemBar
                          sx={{
                            background:
                              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                          }}
                          title={v.name}
                          subtitle={`Total Comics: ${v.comics.available}`}
                          position="top"
                        />
                      </Link>
                    </ImageListItem>
                  );
                })
              : null}
          </ImageList>
        </div>
      ) : (
        <ImageList sx={{ width: 'auto', gap: '0 !important' }} variant="quilted" cols={2}>
          {loading
            ? data
                .filter((hero) => {
                  if (search === '') {
                    return hero;
                  } else if (hero.name.toLowerCase().includes(search.toLowerCase())) {
                    return hero;
                  }
                })
                .map((v) => {
                  return (
                    <ImageListItem
                      sx={{ overflow: 'hidden' }}
                      key={v.id}
                      cols={v.cols || 1}
                      rows={v.rows || 1}
                    >
                      <Link to={`/${v.id}`}>
                        <img
                          src={`${v.thumbnail.path}.${v.thumbnail.extension}`}
                          alt={v.name}
                          loading="lazy"
                          style={{ width: '100%', height: '100%' }}
                        />
                        <ImageListItemBar
                          sx={{
                            background:
                              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                          }}
                          title={v.name}
                          subtitle={`Total Comics: ${v.comics.available}`}
                          position="top"
                        />
                      </Link>
                    </ImageListItem>
                  );
                })
            : null}
        </ImageList>
      )}
    </div>
  );
};

Home.propTypes = {
  search: PropTypes.string,
};

Home.defaultProps = {
  search: '',
};

export default Home;
