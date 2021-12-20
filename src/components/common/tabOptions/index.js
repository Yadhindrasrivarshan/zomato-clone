const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <button onClick={() => setActiveTab("NightLife")}>Click me</button>
    </div>
  );
};

export default TabOptions;
