import { useState, useEffect } from "react";
import { logout, auth, getUserInfo } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    if (user && !userInfo)
      getUserInfo(user.uid).then((res) =>
        res.forEach((doc) => setUserInfo(doc.data()))
      );
    else if (!user) setUserInfo(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  console.log(userInfo);

  return (
    <div className="max-w-sm">
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {userInfo.email}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {userInfo.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Footprint: {userInfo.footprint} CO2e
        </p>
      </Card>
    </div>
  );
};

export default Dashboard;
