import { updateTranslations } from "../store/userSlice"
import { updateTranslationsApi } from "../components/API/UserAPI";
import { useDispatch, useSelector } from 'react-redux'

function DeleteButton(props) {

    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const deleteTranslation = async () => {
        let modifiedTranslations = [...userInfo.translations];

        for (const entry of props.strings) {
            const index = modifiedTranslations.findIndex(x => x.string === entry.string);
            if (index !== -1)
            {
                modifiedTranslations[index] = {
                    string: modifiedTranslations[index].string,
                    deleted: true 
                };
            }
        }
        localStorage.setItem('user', JSON.stringify({
            username: userInfo.username,
            translations: modifiedTranslations,
            id: userInfo.id
        }));
        dispatch(updateTranslations(modifiedTranslations));
        await updateTranslationsApi(userInfo.id, modifiedTranslations);
    }
    return (
        <>
            <button onClick={deleteTranslation}>Delete</button>
        </>
    )
}

export default DeleteButton;