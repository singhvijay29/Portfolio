import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent background={"#1f2937"}>
        <DrawerCloseButton color={"#f2f2f9"} />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
