"use client";
import { useRouter } from "next/navigation";
import React from "react";

import styles from "./modal.module.css";
import { X } from "lucide-react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Toolbar,
} from "@mui/material";

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  console.log("YAYA");

  const handleClose = () => {
    router.back();
  };

  return (
    <Dialog open onClose={handleClose}>
      <Toolbar className={styles.Toolbar}>
        <IconButton className={styles.IconButton} onClick={handleClose}>
          <X />
        </IconButton>
      </Toolbar>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
