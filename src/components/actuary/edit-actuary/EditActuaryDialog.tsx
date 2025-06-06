import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer.tsx";
import {Actuary, EditActuaryRequest} from "@/types/bank_user/actuary.ts";
import EditActuaryForm from "@/components/actuary/edit-actuary/EditActuaryForm.tsx";
import {User} from "@/types/bank_user/user.ts";

interface EditActuaryDialogProps {
  actuary: Actuary;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onEditActuary: (oldValue: Actuary, req: EditActuaryRequest) => void;
}

export function EditActuaryDialog({
  actuary,
  isOpen,
  onOpenChange,
                                    onEditActuary,
}: EditActuaryDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleClose = () => {
    onOpenChange(false);
  };

  return isDesktop ? (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card">
        <DialogHeader>
          <DialogTitle>Edit actuary</DialogTitle>
          <DialogDescription>
            Make changes to the actuary. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <EditActuaryForm
          actuary={actuary}
          onClose={handleClose}
          onEditActuary={onEditActuary}
        />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-card">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit actuary</DrawerTitle>
          <DrawerDescription>
            Make changes to the actuary. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <EditActuaryForm
          actuary={actuary}
          onClose={handleClose}
          onEditActuary={onEditActuary}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
