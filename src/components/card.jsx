import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableCard = ({ image, onLoad }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={style}
      {...listeners}
      className="shadow-sm rounded bg-[#fffcf9]"
    >
      <img src={image.src} onLoad={onLoad} />
      <p className="p-5">{image.tag}</p>
    </div>
  );
};

// export const Card = ({ image, onLoad }) => {
//   return (
//     <div index={image.id} className="shadow-sm rounded bg-[#fffcf9]">
//       <img src={image.src} onLoad={onLoad} />
//       <p className="p-5">{image.tag}</p>
//     </div>
//   );
// };

export const LoaderCard = () => {
  return (
    <div className="shadow-sm rounded bg-[#fffcf9] h-[16rem] pb-3">
      <div className="w-[100%] h-[80%] bg-gray-100"></div>
      <div className="w-[30%] h-3 bg-gray-100 rounded m-6"></div>
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 p-4 sm:p-12 animate-pulse">
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
  );
};
