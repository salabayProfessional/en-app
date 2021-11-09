import { useEffect, useState } from "react";

const useHover = (ref: any) => {
  const [isHover, setIsHover] = useState(false);

  const on = () => setIsHover(true);
  const off = () => setIsHover(false);

  useEffect(() => {
    if(!ref.current) {
      return;
    }

    const node = ref.current;

    node.EventAddListener("mouseenter", on);
    node.EventAddListener("mousemove", on);
    node.EventAddListener("mouseleave", off);
    
    return () => {
      node.EventRemoveListener("mouseenter", on);
      node.EventRemoveListener("mousemove", on);
      node.EventRemoveListener("mouseleave", off);
    }
  }, []);

  return isHover;

};

export default useHover;