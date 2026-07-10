const User = require("../models/user");
const Submission = require("../models/submission");
const Problem = require("../models/problem");

const getDashboard = async (req, res) => {
  try {
    const userId = req.result._id;

    // User details
    const user = await User.findById(userId).populate("problemSolved");

    // Total submissions
    const submissions = await Submission.find({ userId });

    const accepted = submissions.filter(
      (s) => s.status === "accepted"
    ).length;

    const totalSubmissions = submissions.length;

    const acceptanceRate =
      totalSubmissions === 0
        ? 0
        : Math.round((accepted / totalSubmissions) * 100);

    // Difficulty count
    let easy = 0;
    let medium = 0;
    let hard = 0;

    user.problemSolved.forEach((problem) => {
      if (problem.difficulty === "easy") easy++;
      else if (problem.difficulty === "medium") medium++;
      else if (problem.difficulty === "hard") hard++;
    });
const recentSubmissions = await Submission.find({ userId: user._id })
  .populate("problemId", "title difficulty")
  .sort({ createdAt: -1 })
  .limit(5);
    res.json({
      firstName: user.firstName,
      emailId: user.emailId,

      problemsSolved: user.problemSolved.length,

      totalSubmissions,

      acceptedSubmissions: accepted,

      acceptanceRate,

      easy,

      medium,

      hard,
      recentSubmissions
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

module.exports = { getDashboard };