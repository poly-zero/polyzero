import { useState, useEffect } from "react";
import { auth, getUserHistory } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Table } from "flowbite-react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [userHistory, setUserHistory] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    if (user && !userHistory)
      getUserHistory(user.uid).then((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({
            amount: doc.data().amount,
            created_at: doc.data().created_at.toDate(),
            time: doc.data().time,
            title: doc.data().title,
            tonnes: doc.data().tonnes,
          });
        });
        setUserHistory(data);
      });
    else if (!user) setUserHistory(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <>
      {user && (
        <div className="px-3 py-2 grid grid-flow-col auto-cols-max">
          <div className="container items-center justify-between max-w-full mx-auto md:px-8">
            <Avatar img={user.photoURL ? user.photoURL : false} size="xl" />
            <h1>{user.displayName}</h1>
            <h1>Email: {user.email}</h1>
          </div>
          <div>
            <h1>User History</h1>
            <Table>
              <Table.Head>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Time</Table.HeadCell>
                <Table.HeadCell>Tonnes</Table.HeadCell>
                <Table.HeadCell>Amount</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {userHistory &&
                  userHistory.map((data) => {
                    let date = new Date(data.created_at);
                    return (
                      <Table.Row>
                        <Table.Cell>{data.title}</Table.Cell>
                        <Table.Cell>{data.time}</Table.Cell>
                        <Table.Cell>{data.tonnes}</Table.Cell>
                        <Table.Cell>{data.amount}</Table.Cell>
                        <Table.Cell>
                          {date.toLocaleDateString("ja-JP")}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
