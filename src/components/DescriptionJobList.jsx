import DescriptionJobItem from "./DescriptionJobItem";

const DescriptionJobList = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {data.map((item) => {
        return <DescriptionJobItem item={item} />;
      })}
    </div>
  );
};

export default DescriptionJobList;
