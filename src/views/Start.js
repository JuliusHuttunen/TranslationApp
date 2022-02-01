import Title from '../components/Title';
import UserForm from '../components/UserForm';

function Start() {
    return (
        <>
            <Title content="Welcome! Please login below to get started." showProfile="false" />
            <UserForm />
        </>
    )
}

export default Start;