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
        <span {...listeners}>::</span>
      <SeatItem data={data} locked={locked} onClick={onClick} />
    </div>
  );
}

export default SortableSeatItem;