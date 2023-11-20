import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

type Props = {
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  file: File;
};

export default function AudioSubmit({ setFile, file }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  async function submitAudio() {
    console.log("submitting audio");
    console.log("file", file.name);

    const promise = () =>
      fetch(`${process.env.NEXT_PUBLIC_MODAL_URL}/stats`, {
        method: "GET",
      }).then((response) => response.json());

    toast.promise(promise, {
      loading: "Sending Your File to the Server",
      success: (data) => {
        setOpen(true);
        return JSON.stringify(data);
      },
      error: "Error",
    });
  }

  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle>Successfully Sent File !</DialogTitle>
            <DialogDescription>
              The transcription will be available at this link. You can go there right now or check back later
            </DialogDescription>
            <DialogFooter>
                <div className="flex gap-2 justify-end mt-2">
                <Link href="/tryit/call" className={twMerge(buttonVariants(), "w-fit")}>
                    Go to the Link
                </Link>
              <Button
                className="w-fit"
                onClick={() => {
                  setFile(undefined);
                  setOpen(false);
                  setSubmitted(false);
                }}
              >
                Upload A New File
              </Button>
              </div>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Button
        disabled={submitted}
        onClick={() => {
          setSubmitted(false), submitAudio();
        }}
      >
        {submitted ? "Sending ..." : "Send It !"}
      </Button>
    </>
  );
}
