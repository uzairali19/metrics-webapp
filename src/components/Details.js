import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  ImageList,
  ImageListItem,
  Typography,
  AppBar,
  Toolbar,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Details = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { id } = useParams();
  const marvels = useSelector((state) => state.marvelsReducer);
  const { results } = marvels.data;
  const data = results.find((v) => v.id === Number(id));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.id === Number(id) ? (
        <div>
          <ImageList sx={{ width: 'auto', gap: '0 !important' }} variant="quilted" cols={2}>
            <ImageListItem cols={2} rows={2}>
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
                loading="lazy"
                style={{ width: '100%' }}
              />
            </ImageListItem>
          </ImageList>
          <div className="detail-title">{data.name}</div>
          <div className="detail-description">
            {data.description ? data.description : 'Description not avaiable for this character'}
          </div>
          <div className="detail-comics">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Comics</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Total Comics:
                  {data.comics.available}
                </Typography>
              </AccordionSummary>
              {data.comics.items.map((v) => {
                return (
                  <div key={v.name}>
                    <AccordionDetails>
                      <Typography>{v.name}</Typography>
                    </AccordionDetails>
                  </div>
                );
              })}
            </Accordion>
          </div>
          <div className="detail-events">
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Events</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Total Events:
                  {data.events.available}
                </Typography>
              </AccordionSummary>
              {data.events.items.map((v) => {
                return (
                  <div key={v.name}>
                    <AccordionDetails>
                      <Typography>{v.name}</Typography>
                    </AccordionDetails>
                  </div>
                );
              })}
            </Accordion>
          </div>
          <div className="detail-stories">
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Stories</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Total Stories:
                  {data.stories.available}
                </Typography>
              </AccordionSummary>
              {data.stories.items.map((v) => {
                return (
                  <div key={v.name}>
                    <AccordionDetails>
                      <Typography>{v.name}</Typography>
                    </AccordionDetails>
                  </div>
                );
              })}
            </Accordion>
          </div>
          <div className="detail-series">
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Series</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Total Series:
                  {data.comics.available}
                </Typography>
              </AccordionSummary>
              {data.series.items.map((v) => {
                return (
                  <div key={v.name}>
                    <AccordionDetails>
                      <Typography>{v.name}</Typography>
                    </AccordionDetails>
                  </div>
                );
              })}
            </Accordion>
          </div>
          <Typography variant="h6" className="more-detail">
            Find more details about this character at:
            <ul>
              {data.urls.map((v) => {
                return (
                  <li key={v.type}>
                    <a href={v.url} target="_blank" rel="noopener noreferrer">
                      {v.type}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Typography>
          <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#000' }}>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                {marvels.attributionText}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
