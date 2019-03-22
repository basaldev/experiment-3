import React from 'react';
import { css } from 'emotion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getSampleUsers } from 'domain/store/selectors/main';
import { onChangeCurrentUser } from 'domain/middleware/user';
import { User } from 'components/presentational/user';
// import * as LogoImg from 'assets/logo.png';


export const LoginView = () => {
  const users = getSampleUsers();
  return (
    <Grid container justify="center" alignItems="center" alignContent="center">
      <Grid
        item
        className={css`
          height: 100vh;
        `}
      >
        <Grid container justify="center" alignItems="center" alignContent="center" className={css`
          height: 100%;
        `}>
          <div
            className={css`
              text-align: center;
            `}
          >
            {/* <img src={LogoImg} width="200" /> */}
            <Typography
              align="center"
              className={css`
                padding: 30px 0;
              `}
            >
              Select Sample User
            </Typography>
          </div>
          {users.map(user => <User key={user.id} user={user} onClick={onChangeCurrentUser} />)}
        </Grid>
      </Grid>
    </Grid>
  );
};
