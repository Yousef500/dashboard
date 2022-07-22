const { Grid } = require('@mui/material');

const Center = ({ children }) => (
    <Grid container spacing={0} alignItems={'center'} justifyContent={'center'}>
        {children}
    </Grid>
);

export default Center;
