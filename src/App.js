import "./styles.css";
import styled from "styled-components";
import img from "./icon.png";

const color = "pink";
const borderRadius = "1em";

const Tag = styled.span`
  display: inline-block;
  padding: 0.5em;
  background-color: ${color};
  border-radius: ${borderRadius};
  &:hover .inside {
    filter: none;
  }
`;

const Icon = styled.img`
  filter: blur(6px);
  width: 100px;
`;

Icon.defaultProps = {
  src: img
};

export default function App() {
  return (
    <>
      <Tag>Content</Tag>
      <Icon />
      <Tag>
        <Icon className="inside" />
        Content
      </Tag>
    </>
  );
}
