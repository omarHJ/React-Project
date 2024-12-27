const JobList = () => {
  const jobs = [
    { salary: 90000, position: "Senior SDE", company: "Amazon", color: "blue" },
    { salary: 12000, position: "Junior SDE", company: "Google", color: "red" },
    { salary: 10000, position: "Project Manager", company: "Netflix", color: "red" },
  ];

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      {jobs.map((job, index) => (
        <p
          key={index}
          style={{
            color: job.color,
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Salary: {job.salary} - Position: {job.position} - Company: {job.company}
        </p>
      ))}
    </div>
  );
};

export default JobList;