import React from "react";
import LeaderLine from "leader-line-new";

interface LineTreeProps {
  start: any;
  end: any;
}

export const LineTreeLeft: React.FC<LineTreeProps> = ({ start, end }) => {
  const line: any = React.useRef();
  React.useEffect(() => {
    const drawLine = () => {
      new LeaderLine(
        start.current,
        LeaderLine.pointAnchor(end.current, { x: "50%", y: "0%" }),
        {
          path: "fluid",
          startSocket: "bottom",
          endSocket: "top",
          startPlug: "disc",
          endPlug: "disc",
          color: "#8B5CF6",
          size: 8,
          dash: true,
        }
      );
    };
    const timer = setInterval(() => {
      if (start.current) {
        clearInterval(timer);
        drawLine();
      }
    }, 5);
    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    // scroll and resize listeners could be assigned here
    setTimeout(() => {
      // skip current even loop and wait
      // the end of parent's render call
      if (line.current && end?.current) {
        line.current.position();
      }
    }, 0);
  });

  return null;
};
