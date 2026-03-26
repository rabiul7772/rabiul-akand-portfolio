import useWindowStore from '@store/window';

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div
        className="close flex items-center justify-center"
        onClick={() => closeWindow(target)}
      >
        <span className="text-black font-bold text-[12px] leading-none mb-px">
          x
        </span>
      </div>
      <div className="minimize"></div>
      <div className="maximize"></div>
    </div>
  );
};

export default WindowControls;
