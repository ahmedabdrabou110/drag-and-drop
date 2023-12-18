import { DataProps } from "../utils/data";

interface DataListItemProps {
  item: DataProps;
  dragStart: (index: number) => void;
  dragEnter: (index: number) => void;
  handleSort: () => void;
  index: number;
}
const DataListItem: React.FC<DataListItemProps> = ({
  item,
  dragEnter,
  dragStart,
  handleSort,
  index,
}) => {
  return (
    <div
      key={item?.id}
      className="relative flex space-x-3 border rounded p-2 bg-gray-100"
      draggable
      onDragStart={() => dragStart(index)}
      onDragEnter={() => dragEnter(index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      <p>{item?.title}</p>
    </div>
  );
};

export default DataListItem;
