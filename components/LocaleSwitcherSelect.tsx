"use client";

import next from "next";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LocaleSwitcherSelectProps = {
  options: Record<string, string>;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  options,
  defaultValue,
}: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      const segments = pathname.split("/");
      // Replace the current locale segment (assumed to be at index 1) with the new locale
      segments[1] = nextLocale;
      const newPath = segments.join("/");
      router.replace(newPath, { scroll: false });
    });
  }

  return (
    <Select
      onValueChange={onSelectChange}
      defaultValue={defaultValue}
      disabled={isPending}
    >
      <SelectTrigger className="w-fit bg-transparent border-none shadow-none">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(options).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
