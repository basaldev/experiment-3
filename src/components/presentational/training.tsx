import React from 'react';
import { css } from 'emotion';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export function Training({ title, thumbnail, description, url }) {
  return (
    <Card
      className={css`
        && {
          display: flex;
          margin: 0;
          flex-direction: row;
          border: none;
          border-radius: 0;
          box-shadow: none;
        }
      `}
    >
      <CardMedia
        image={thumbnail}
        title={title}
        className={css`
          width: 40vw;
          height: 22.5vw;
        `}
      />    
      <CardContent
        className={css`
          && {
            flex: 1;
            padding-top: 0 !important;
          }
        `}
      >
        <Typography
          variant="subheading"
          className={css`
            && {
              line-height: 1.4;
              padding: 0 0 5px;
            }
          `}
        >{title}</Typography>
        <Typography
          className={css`
            && {
              padding: 0 0 5px;
            }
          `}
        >{description}</Typography>
        <Button variant="outlined" size="small" href={url} target="_blank">Launch</Button>
      </CardContent>
    </Card>
  );
}
