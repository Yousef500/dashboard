import { Delete, Edit, FileDownloadOutlined, PersonAddOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import Page from '../components/Page';
import UserCardContent from '../components/UserCardContent';

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

const cardActions = [
  {
    title: 'استخراج',
    color: 'primary',
    icon: <FileDownloadOutlined />,
  },
  {
    title: 'تعديل',
    color: 'success',
    icon: <Edit />,
  },
  {
    title: 'حذف',
    color: 'error',
    icon: <Delete />,
  },
];

const CustomUser = () => (
  <Page title="ادارة المستخدمين">
    <Container maxWidth={'xl'} dir="rtl">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" mb={5}>
            <Typography variant="h2" gutterBottom>
              المستخدمين
            </Typography>
            <Button size="large" variant="contained" color="success" startIcon={<PersonAddOutlined />}>
              مستخدم جديد
            </Button>
          </Stack>
        </Grid>
        {users.map((user) => (
          <Grid item xs={12} sm={4} key={user.name} pb={2}>
            <Card sx={{ height: 'max-content', overflowY: 'auto', bgcolor: '#F0F0F0' }}>
              <CardHeader
                titleTypographyProps={{
                  variant: 'h3',
                  align: 'center',
                  color: `${user.status === 'مفعل' ? 'primary' : 'error'}`,
                  gutterBottom: true,
                }}
                title={user.name}
              />
              <Divider />
              <CardContent>
                <UserCardContent user={user} />
              </CardContent>
              <CardActions disableSpacing>
                {cardActions.map((action) => (
                  <LoadingButton color={action.color} size={'large'} startIcon={action.icon} variant="contained">
                    {action.title}
                  </LoadingButton>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Page>
);

export default CustomUser;
