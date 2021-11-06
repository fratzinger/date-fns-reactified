import { differenceInMilliseconds as _differenceInMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInMilliseconds = reactify(_differenceInMilliseconds);