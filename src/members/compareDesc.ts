import { compareDesc as _compareDesc } from "date-fns";
import { reactify } from "@vueuse/core";

export const compareDesc = reactify(_compareDesc);