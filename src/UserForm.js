import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

const UserForm = props => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    return (
        <Box sx={{ backgroundColor: 'white', p: 4, borderRadius: 2, maxWidth: 500, mx: 'auto', mt: 5, boxShadow: 3 , marginBottom: '40px'}}>
            <Typography variant="h5" sx={{ color: '#2d3a4b', mb: 3, textAlign: 'center' }}>User Form</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="id"
                        name="id"
                        label="User ID"
                        variant="outlined"
                        value={id}
                        onChange={e => {setId(e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#2d3a4b',
                            '&:hover': { backgroundColor: '#1a2533' }
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserForm;