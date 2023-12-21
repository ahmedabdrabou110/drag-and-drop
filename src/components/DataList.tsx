import { useRef, useState } from "react";
import { DataProps, informations } from "../utils/data";
import DataListItem from "./DataListItem";

const DataList = () => {
  const [data, setData] = useState(informations);
  const dragTitle = useRef<number>(0);
  const draggedOverTitle = useRef<number>(0);

  const dragStart = (order: number) => {
    dragTitle.current = order;
  };
  const dragEnter = (order: number) => {
    draggedOverTitle.current = order;
  };

  const handleSort = () => {
    const cloneData = [...data];
    const temp = cloneData[dragTitle.current];
    cloneData[dragTitle.current] = cloneData[draggedOverTitle.current];
    cloneData[draggedOverTitle.current] = temp;
    setData(cloneData);
  };
  return (
    <>
      {data.map((item: DataProps, index: number = item.order) => (
        <DataListItem
          item={item}
          dragStart={dragStart}
          dragEnter={dragEnter}
          handleSort={handleSort}
          index={index}
        />
      ))}
    </>
  );
};

export default DataList;
