"use client";

import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { Button } from "../ui/button";
import { generateClientDropzoneAccept } from "uploadthing/client";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  onFieldChange,
  imageUrl,
  setFiles,
}: FileUploaderProps) {
  const convertFileToUrl = (file: File) => URL.createObjectURL(file);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex cursor-pointer flex-col overflow-hidden "
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={100}
            height={100}
            className=" object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-grey-500">
          <img src="upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button
            type="button"
            className="rounded-full bg-black text-white hover:bg-black hover:opacity-80 hover:text-white"
          >
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
