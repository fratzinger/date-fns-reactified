import { differenceInMilliseconds as _differenceInMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInMilliseconds = reactify(_differenceInMilliseconds);