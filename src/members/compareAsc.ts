import { compareAsc as _compareAsc } from "date-fns";
import { reactify } from "@vueuse/shared";

export const compareAsc = reactify(_compareAsc);