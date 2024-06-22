import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-[80px] w-full fixed top-0 z-50 px-10 md:px-20 text-white uppercase">
      <div>
        <h2 className="font-bold text-lg">Taibi Abdelhakim</h2>
      </div>
      <ul className="gap-20 hidden lg:flex">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="text-xl lg:hidden">
        <Sheet>
          <SheetTrigger>
            <IoMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
