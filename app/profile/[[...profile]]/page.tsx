import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Profile = async() => {
    const {userId} = auth()
    const isAuth = !!userId
    const user = await currentUser()
    if (!isAuth){
        redirect("/")
    }
  return (
    <div className="flex items-center justify-center flex-col mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
