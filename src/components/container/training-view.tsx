import React from 'react';
import { css } from 'emotion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Training } from 'components/presentational/training';
import { getTrainings } from 'domain/store/selectors/main';

export function TrainingView() {
  const trainings = getTrainings();
  return (
    <>
      <Typography
        variant="h5"
        className={css`
          padding: 20px 10px;
        `}
      >
        Explore programs
      </Typography>
      <Grid container spacing={16}>
        {trainings.map(training =>
          <Grid item xs={12} key={training.title}>
            <Training {...training} />
          </Grid>)}
      </Grid>
    </>
  );
}
