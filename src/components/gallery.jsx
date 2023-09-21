import { SortableCard, Loader } from "./card";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { Search } from "./search";
import { images } from "../images";
import { useState, useContext, useEffect } from "react";

export const Gallery = ({ loading, error, setLoading , galleryImages, setGalleryImages}) => {
  // const [galleryImages, setGalleryImages] = useState(images);
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );
  const onDragEnd = (event) => {
    console.log("onDragEnd", event);
    const { active, over } = event;
    console.log(active, "active");
    console.log(over, "over");

    if (active.id === over.id) {
      return;
    }
    setGalleryImages((galleryImages) => {
      const oldIndex = galleryImages.findIndex(
        (image) => image.id === active.id
      );
      const newIndex = galleryImages.findIndex((image) => image.id === over.id);
      return arrayMove(galleryImages, oldIndex, newIndex);
    });
  };

  return (
    // <DndContext onDragEnd={onDragEnd}>
    <div className="pt-20">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {galleryImages.length === 0 ? (
            <p className="text-center text-base sm:text-lg">
              No images with this name found
            </p>
          ) : (
            <DndContext
              onDragEnd={onDragEnd}
              collisionDetection={closestCenter}
            >
              <SortableContext
                items={galleryImages}
                // strategy={verticalListSortingStrategy}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 p-4 sm:p-12">
                  {galleryImages.map((image) => {
                    return (
                      <SortableCard
                        key={image.id}
                        image={image}
                        onLoad={() => setLoading(false)}
                      />
                    );
                  })}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </div>
      )}
    </div>
    // </DndContext>
  );
};
