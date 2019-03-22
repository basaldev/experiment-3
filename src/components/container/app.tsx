import React from 'react';
import {
  currentPage,
} from 'domain/store/selectors/main';
import { css } from 'emotion';
import { Grid } from '@material-ui/core';
import { navigate } from 'domain/middleware/router';
import { Navbar } from 'components/presentational/navbar';
import { TrainingView } from 'components/container/training-view';
import { NotFoundView } from 'components/container/notfound-view';
import { LoginView } from 'components/container/login-view';

export function App() {
  const content = (pageName => {
    switch (pageName) {
      case 'HOME_PAGE':
        return (
          <TrainingView />
        );
      case 'LOGIN_PAGE':
        return (
          <LoginView />
        );
      default:
        return <NotFoundView />
    }
  })(currentPage().name);

  const isLoginPage = currentPage().name  === 'LOGIN_PAGE';
  const contentHeight = isLoginPage ? '100vh': 'calc(100vh - 56px)';

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className={css`
          height: ${contentHeight};
          overflow: scroll;
        `}
      >
        {content}
      </Grid>
      {!isLoginPage &&
        <Grid
          item
          xs={12}
          className={css`
            border-top: 1px solid #efefef;
          `}
        >
          <Navbar
            value={currentPage().value}
            routes={[
              e => {
                navigate('/', e);
              }
            ]}
          />
        </Grid>}
    </Grid>
  );
}
