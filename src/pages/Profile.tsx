import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard"
import { AppDispatch, RootState } from "../Store"
import { IProfile } from "../Interfaces/IProfile"
import { getAllProfiles } from "../slices/ProfileSlice";

export const Profile: React.FC = () => {

  const profileInfo = useSelector((state: RootState) => state.profile)
  const dispatch: AppDispatch = useDispatch();
  const[profiles, setProfiles] = useState<any>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);

  const getProfiles = () => {
    if (firstLoad == false){
      dispatch(getAllProfiles());
      setProfiles(profileInfo.profileList);
      setFirstLoad(true);
    }
  }
  getProfiles();

  useEffect(() => {

    setProfiles(profileInfo.profileList);
    console.log(profileInfo.profileList);
    console.log('Between')
    // console.log(profiles);

  }, [profileInfo.profileList]);

  const handleClick = () => {
    console.log('Hello')
  }


  return (
    <div>
      <h1>Profile</h1>
      <p>WIll build something interesting</p>

      {profiles ? (
        profiles.map((profile: { id: any }) => {
          return (
            <ProfileCard
              clickHandled={handleClick}
              {...profile}
              key={profile.id}
            />
          );
        })
      ) : (
        <h1> Loading... </h1>
      )}

      
      <ProfileCard title = "abc" body = "123" imageURL="12345"/>
    </div>
  )
}

export default Profile
