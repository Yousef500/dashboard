import UserCardData from './UserCardData';

const UserCardContent = ({ user }) => (
    <>
        <UserCardData label="اسم المستخدم:" data={user.username} />
        <UserCardData label="الدور الوظيفي:" data={user.role} />
        <UserCardData label="رقم الجوال:" data={user.phoneNumber} />
        <UserCardData label="رقم الهوية:" data={user.id} />
        <UserCardData label="البريد:" data={user.email} />
        <UserCardData
            label="الحالة:"
            data={user.status}
            dataProps={{ color: `${user.status === 'مفعل' ? 'green' : 'error'}` }}
        />
        <UserCardData label="رقم الموظف:" data={user.empId} />
        <UserCardData label="نوع الموظف:" data={user.empType} />
    </>
);

export default UserCardContent;
