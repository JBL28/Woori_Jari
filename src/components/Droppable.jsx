import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren } from 'react';

const Droppable = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const isOverClass = isOver ? 'text-amber-500' : 'text-black';

  return (
    <div ref={setNodeRef} className={`${isOverClass}`}>
      {children}
    </div>
  );
};

export default Droppable;