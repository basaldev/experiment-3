import React from 'react';
import { css } from 'emotion';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export function User({ user, onClick }) {
  return (
    <Grid item xs={12} key={user.name}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={css`
          margin-bottom: 16px;
        `}
      >
      <Grid item>
        <Avatar
        className={css`
        && {
          color: #fff;
          height: 60px;
          width: 60px;
        }
        `}
        ><img className={css`
          height: 100%;
          width: auto;
        `
        } src={user.avatar}></img></Avatar>
        </Grid>
        <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => onClick(user)}
          className={css`
          && {
            margin:8px auto;
            display:block;
          }
          `}
        >
          {user.name}
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}