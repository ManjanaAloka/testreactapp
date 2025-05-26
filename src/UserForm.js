import { Grid, Typography } from '@mui/material';

const UserForm = props => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: 'white',
                marginBottom: '30px',
                display: 'block'
            }}
        >

            <Grid item xs={12}>
                <Typography component={"h1"} sx={{ color: '#2d3a4b' }}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
                <Typography component={"label"} htmlFor='id'
                    sx={{
                        color: '#2d3a4b',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                    User ID
                </Typography>

                <input
                    type="text"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={''}
                    onChange={e => { }}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }} >
                <Typography component={"label"} htmlFor='id'
                    sx={{
                        color: '#2d3a4b',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block'
                    }}
                >
                </Typography>

                <input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={''}
                    onChange={e => { }}
                />
            </Grid>

            <button sx={{
                margin: 'auto',
                marginBottom: '20px',
                backgroundColor: '#2d3a4b',
                color: 'white',
                marginLeft: '15px',
                marginTop: '20px',
                '&:hiver': {
                    opacity: '0.7',
                    backgroundColor: '#2d3a4b'
                }
            }}></button>
        </Grid>
    );
}

export default UserForm;