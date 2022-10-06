import { ReactNode } from "react";

import {
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { Button, Typography } from "@/modules/core/presenters/components/atoms";

import { CloseOutlined } from "@mui/icons-material";

import { CloseButtonStyled, DialogBaseStyled } from "./styled";
import React from "react";

interface IDialog {
  cancelLabel?: string;
  confirmLabel?: string;
  children: ReactNode | ReactNode[];
  hiddenCloseButton?: boolean;
  loading?: boolean;
  maxWidth?: "small" | "medium" | "large";
  open: boolean;
  reverseActionsButtons?: boolean;
  subtitle?: string;
  title: string;
  variant?: "default" | "error";
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose: () => void;
}

export const Dialog: React.FC<IDialog> = ({
  cancelLabel,
  confirmLabel,
  children,
  hiddenCloseButton,
  loading,
  maxWidth,
  open,
  reverseActionsButtons,
  subtitle,
  title,
  variant = "default",
  onCancel,
  onConfirm,
  onClose,
}) => {
  const renderCancelButton = (): ReactNode => {
    if (!onCancel) return "";

    return (
      <Button onClick={onCancel} disabled={loading}>
        {cancelLabel || "Cancelar"}
      </Button>
    );
  };

  return (
    <DialogBaseStyled styledMaxWidth={maxWidth} open={open}>
      <DialogTitle>
        <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            color={(theme) => theme.palette.grey[600]}
          >
            {subtitle}
          </Typography>
        )}

        {!hiddenCloseButton && (
          <CloseButtonStyled
            color={variant === "default" ? "primary" : "error"}
            onClick={onClose}
          >
            <CloseOutlined />
          </CloseButtonStyled>
        )}
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>

      <DialogActions>
        {!reverseActionsButtons && renderCancelButton()}

        {onConfirm && (
          <Button
            variant="contained"
            color={variant === "error" ? variant : "primary"}
            onClick={onConfirm}
            disabled={loading}
            endIcon={loading && <CircularProgress size={16} />}
          >
            {confirmLabel || "Confirmar"}
          </Button>
        )}

        {reverseActionsButtons && renderCancelButton()}
      </DialogActions>
    </DialogBaseStyled>
  );
};
