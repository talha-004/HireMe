import Job from "./Job";

const randomJobs = [1, 2, 3];
const Browse = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-6 font-inter">
      <h1 className="font-medium text-lg">
        Search Results {randomJobs.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {randomJobs.map((item, idx) => (
          <Job />
        ))}
      </div>
    </div>
  );
};

export default Browse;
