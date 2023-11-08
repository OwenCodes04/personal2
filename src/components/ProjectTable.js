const QATable = () => {
    return (
        <div className="w-full p-8">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>For</th>
        <th>Project</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
        <th>Byte Cloud Services</th>
        <td>OrangePro AI Website</td>
        <td>I used ReactJS, TailwindCSS, and DaisyUI to build a website for an AI startup. 
        I worked on both frontend development and API integration.</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ProjectTable;