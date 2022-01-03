import { compareDesc as _compareDesc } from "date-fns";
import { reactify } from "@vueuse/shared";

export const compareDesc = reactify(_compareDesc);