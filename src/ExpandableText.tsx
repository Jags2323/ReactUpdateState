import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  // checking no of characters if less than 100 print all the characters
  if (children.length <= maxChar) return <p>{children}</p>;
  // else if printing all the characters and modified with more and less button
  // is expanded is true print all the data else print the data upto 100 characters
  const text = isExpanded ? children : children.substring(0, maxChar);

  // is expanded is true Less button will be displayed or else more button will be displayed
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
