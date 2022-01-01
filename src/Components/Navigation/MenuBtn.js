import StyledMenuBtn from "./Styled/StyledMenuBtn";

const MenuBtn = ({ onClick, className }) => {
  return (
    <StyledMenuBtn className={className} onClick={onClick}>
      ≡
    </StyledMenuBtn>
  );
};

export default MenuBtn;
