import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SeatItem from "../../ui/SeatItem";

function SortableSeatItem({ id, data, locked, onClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} style={style}>
      <SeatItem data={data} locked={locked} onClick={onClick} />
      <span {...listeners}>-</span>
    </div>
  );
}

export default SortableSeatItem;