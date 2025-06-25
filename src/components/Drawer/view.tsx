type DrawerType = {
  onclose: () => void;
};

function Drawer({ onclose }: DrawerType) {
  return (
    <div className="fixed inset-0 z-50 flex justify-start">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onclose} />;
    </div>
  );
}

export default Drawer;
