import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
const Users = [
    {
        id: 1,
        name: 'John Doe'
    },{
        id: 2,
        name: 'Jane Smith'
    }, {
        id: 3,
        name: 'Manjana Aloka'
    }

];
const User = () => {
    return (
        <Box sx={{ 
            width:'calc(100% - 100px)',
            margin:'auto',
            marginTop:'50px',
         }} >
            <UserForm />
            <UsersTable users={Users} />
        </Box>
    );
}

export default User;