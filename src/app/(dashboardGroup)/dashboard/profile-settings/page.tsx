import { getMe } from '@/service/getMe';
import SettingsProfile from '../../_components/ProfileSetting/Settings';

const ProfileSettingPage = async() => {
    const user=await getMe()
const userInfo=user.data

    return (
        <div>
            <SettingsProfile userInfo={userInfo} />
        </div>
    );
};

export default ProfileSettingPage;