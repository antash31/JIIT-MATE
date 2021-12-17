import "./MyButton.css";

const MyButton = (props) => {
  return (
    <div id="outer">
      <div class="button_slide slide_right">{props.content}</div>
    </div>
  );
};

export default MyButton;
