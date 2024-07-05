import { useState, useEffect } from "react";

const useTypingEffect = (
  phrases: string[],
  typingSpeed = 150,
  deletingSpeed = 100,
  pause = 1000
): string => {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);

  useEffect(() => {
    if (loopNum >= phrases.length) {
      setLoopNum(0);
    }

    const handleTyping = () => {
      if (isDeleting) {
        if (subIndex === 0) {
          setIsDeleting(false);
          setLoopNum((prevLoopNum) => prevLoopNum + 1);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        } else {
          setSubIndex((prevSubIndex) => prevSubIndex - 1);
        }
      } else {
        if (subIndex === phrases[index].length) {
          setIsDeleting(true);
          setTimeout(() => {}, pause);
        } else {
          setSubIndex((prevSubIndex) => prevSubIndex + 1);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    index,
    loopNum,
    phrases,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return phrases[index].substring(0, subIndex);
};

export default useTypingEffect;
