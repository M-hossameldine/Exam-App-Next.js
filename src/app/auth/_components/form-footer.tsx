"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { CircleX } from "lucide-react";

type FormFooterProps = {
  submitButtonText: string;
  altActionDescription: string;
  altActionText: string;
  altActionHref: string;
  error?: string;
};

export default function FormFooter({
  submitButtonText,
  altActionDescription,
  altActionText,
  altActionHref,
  error,
}: FormFooterProps) {
  return (
    <div className="flex flex-col items-center gap-9 mt-10 w-full">
      {error && (
        <p className="relative flex justify-center items-center h-10 w-full border border-destructive bg-destructive-50 text-sm font-regular text-destructive">
          {error}

          <span className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 text-destructive bg-white rounded-full">
            <CircleX className="" strokeWidth={1.5} size={18} />
          </span>
        </p>
      )}

      <Button className="w-full" variant="default">
        {submitButtonText}
      </Button>
      <p className="text-sm font-medium text-gray-500">
        {altActionDescription}{" "}
        <Link href={altActionHref} className="text-primary">
          {altActionText}
        </Link>
      </p>
    </div>
  );
}
