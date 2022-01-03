import { compareAsc as _compareAsc } from "date-fns";
import { reactify } from "@vueuse/core";

export const compareAsc = reactify(_compareAsc);