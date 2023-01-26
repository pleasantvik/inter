import { Dialog, Pane } from "evergreen-ui";

export const Dialogue = ({ show, handleClose, datum }) => {
  return (
    <div>
      <Pane>
        <Dialog
          isShown={show}
          title="Dialog title"
          onCloseComplete={handleClose}
          confirmLabel="Custom Label"
        >
          {datum && datum[0]?.name}
        </Dialog>
      </Pane>
    </div>
  );
};
