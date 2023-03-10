import CloseIcon from "@mui/icons-material/Close";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Box, IconButton, Stack, styled } from "@mui/material";
import React, { MouseEventHandler, ReactElement } from "react";

const WidgetRoot = styled("div")({
  border: "1px solid black",
  background: "#ddd",
});

interface DragableProps {
  style: any;
  className: any;
  onMouseDown: any;
  onMouseUp: any;
  onTouchEnd: any;
}

interface InternalWidgetProps extends Partial<DragableProps> {
  onPin: () => void;
  onClose: () => void;
  pinned?: boolean;
  title?: string;
  children: ReactElement;
}

export const InternalWidget = React.forwardRef<any, InternalWidgetProps>(
  (props, ref) => {
    const handleClose = (e: any) => {
      e.preventDefault();
      props.onClose();
    };

    const handlePin = (e: any) => {
      e.preventDefault();
      props.onPin();
    };

    return (
      <WidgetRoot
        style={{ ...props.style }}
        className={props.className}
        ref={ref}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onTouchEnd}
      >
        <Stack direction="row" sx={{ background: "#eee" }}>
          <Box
            flexGrow={1}
            display="flex"
            alignItems="center"
            sx={{ paddingLeft: "5px" }}
          >
            <strong>{props.title}</strong>
          </Box>
          <IconButton onClick={handlePin}>
            <PushPinIcon sx={{ opacity: props.pinned ? 1 : 0.2 }} />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        {props.children}
      </WidgetRoot>
    );
  }
);
