import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await axiosClient.get("/user/dashboard");
        setStats(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadDashboard();
  }, []);

  if (!stats) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex justify-center items-center text-white text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">

     <div className="flex justify-between items-center mb-10">

<div>

<h1 className="text-5xl font-bold">

👋 Welcome, {stats.firstName}

</h1>

<p className="text-gray-400 mt-2">

Keep solving. Keep growing 🚀

</p>

</div>

<div>

<div className="badge badge-warning badge-lg">

🔥 7 Day Streak

</div>

</div>

</div>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-[#1e293b] hover:scale-105 transition-all duration-300 shadow-xl rounded-xl p-6">
          <p className="text-gray-400">🎯Problems Solved</p>
          <h1 className="text-5xl font-bold mt-2">
            {stats.problemsSolved}
          </h1>
        </div>

        <div className="bg-[#1e293b] hover:scale-105 transition-all duration-300 shadow-xlrounded-xl p-6">
          <p className="text-gray-400">📤Submissions</p>
          <h1 className="text-5xl font-bold mt-2">
            {stats.totalSubmissions}
          </h1>
        </div>

        <div className="bg-[#1e293b] hover:scale-105 transition-all duration-300 shadow-xl rounded-xl p-6">
          <p className="text-gray-400">✅Accepted</p>
          <h1 className="text-5xl font-bold mt-2">
            {stats.acceptedSubmissions}
          </h1>
        </div>

       <div className="bg-[#1e293b] hover:scale-105 transition-all duration-300 shadow-xl rounded-xl p-6 flex flex-col justify-center items-center">

  <div
    className="radial-progress text-success"
    style={{
      "--value": stats.acceptanceRate,
      "--size": "7rem",
      "--thickness": "10px"
    }}
    role="progressbar"
  >
    {stats.acceptanceRate}%
  </div>

  <p className="text-gray-400 mt-4 text-lg">
    Acceptance Rate
  </p>

</div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-green-700 rounded-xl p-8">
          <h2 className="text-2xl">Easy</h2>
          <h1 className="text-6xl font-bold mt-4">
            {stats.easy}
          </h1>
        </div>

        <div className="bg-yellow-600 rounded-xl p-8">
          <h2 className="text-2xl">Medium</h2>
          <h1 className="text-6xl font-bold mt-4">
            {stats.medium}
          </h1>
        </div>

        <div className="bg-red-700 rounded-xl p-8">
          <h2 className="text-2xl">Hard</h2>
          <h1 className="text-6xl font-bold mt-4">
            {stats.hard}
          </h1>
        </div>

      </div>
<div className="mt-12">

  <h2 className="text-3xl font-bold mb-5">
    📋 Recent Submissions
  </h2>

  <div className="overflow-x-auto bg-[#1e293b] rounded-xl">

    <table className="table">

      <thead>

        <tr className="text-gray-300">

          <th>Problem</th>

          <th>Status</th>

          <th>Difficulty</th>

        </tr>

      </thead>

      <tbody>

        {stats.recentSubmissions?.map((submission) => (

          <tr key={submission._id}>

            <td>

              {submission.problemId?.title}

            </td>

            <td>

              <span
                className={`badge ${
                  submission.status === "accepted"
                    ? "badge-success"
                    : "badge-error"
                }`}
              >

                {submission.status}

              </span>

            </td>

            <td>

              <span
                className={`badge ${
                  submission.problemId?.difficulty === "easy"
                    ? "badge-success"
                    : submission.problemId?.difficulty === "medium"
                    ? "badge-warning"
                    : "badge-error"
                }`}
              >

                {submission.problemId?.difficulty}

              </span>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
    </div>
  );
};

export default Dashboard;