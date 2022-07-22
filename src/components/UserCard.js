import {
    EditOutlined,
    FileDownloadOutlined
} from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader, Divider
} from '@mui/material';
import Center from './Center';
import UserCardContent from './UserCardContent';
import UserCardDropdown from './UserCardDropdown';

const cardActions = [
    {
        title: 'طباعة',
        color: 'primary',
        icon: <FileDownloadOutlined />,
    },
    {
        title: 'تعديل',
        color: 'success',
        icon: <EditOutlined />,
    },
    // {
    //     title: 'حذف',
    //     color: 'error',
    //     icon: <DeleteOutlined />,
    // },
];

const UserCard = ({ user }) => {
    return (
        <Card
            sx={{
                height: 'max-content',
                overflowY: 'auto',
                background:
                    'linear-gradient(157deg, rgba(255,245,178,1) 0%, rgba(255,255,255,1) 100%);',
                pb: 2,
            }}
        >
            <CardHeader
                titleTypographyProps={{
                    variant: 'h3',
                    align: 'center',
                    color: `${user.status === 'مفعل' ? 'primary' : 'inherit'}`,
                    gutterBottom: true,
                }}
                title={user.name}
                action={<UserCardDropdown />}
            />
            <Divider />
            <CardContent>
                <UserCardContent user={user} />
            </CardContent>
            <CardActions>
                <Center>
                    {cardActions.map((action) => (
                        <LoadingButton
                            key={action.title}
                            color={action.color}
                            startIcon={action.icon}
                            variant="contained"
                            sx={{ mx: 1 }}
                        >
                            {action.title}
                        </LoadingButton>
                    ))}
                </Center>
            </CardActions>
        </Card>
    );
};

export default UserCard;
