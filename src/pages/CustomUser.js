import { PersonAddOutlined } from '@mui/icons-material';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import Page from '../components/Page';
import UserCard from '../components/UserCard';
import { userAx } from '../config/axios-config';

const users = [
    {
        name: 'مهندسة أميرة',
        role: 'مدير النظام',
        username: 'Amira',
        phoneNumber: '0966131632165',
        id: '136513161',
        email: 'assad@sadsada.com',
        status: 'مفعل',
        empId: '1548',
        empType: 'رسمي',
    },
    {
        name: 'مهندس عمر',
        role: 'مدير النظام',
        username: 'Omar',
        phoneNumber: '0966131632165',
        id: '136513161',
        email: 'assad@sadsada.com',
        status: 'مفعل',
        empId: '1548',
        empType: 'رسمي',
    },
    {
        name: 'مهندس الكردي',
        role: 'مدير النظام',
        username: 'Kordy',
        phoneNumber: '0966131632165',
        id: '136513161',
        email: 'assad@sadsada.com',
        status: 'مفعل',
        empId: '1548',
        empType: 'رسمي',
    },
    {
        name: 'مهندس يوسف',
        role: 'مدير النظام',
        username: 'Yousef',
        phoneNumber: '0966131632165',
        id: '136513161',
        email: 'assad@sadsada.com',
        status: 'غير مفعل',
        empId: '1548',
        empType: 'رسمي',
    },
];

const CustomUser = () => {
    useEffect(() => {
        (async () => {
            const res = await userAx.login({ username: 'admin', password: 'ASD@asd@123$' });
            console.log(res);
            const { data } = await userAx.getAll();
            console.log(data);
        })();
    });

    return (
        <Page title="ادارة المستخدمين">
            <Container maxWidth={'xl'} dir="rtl">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" mb={5}>
                            <Typography variant="h2" gutterBottom>
                                المستخدمين
                            </Typography>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                startIcon={<PersonAddOutlined />}
                            >
                                مستخدم جديد
                            </Button>
                        </Stack>
                    </Grid>
                    {users.map((user) => (
                        <Grid
                            item
                            xs={12}
                            sm={10}
                            md={6}
                            lg={6}
                            xl={4}
                            key={user.name}
                            pb={2}
                            m={'auto'}
                        >
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Page>
    );
};

export default CustomUser;
