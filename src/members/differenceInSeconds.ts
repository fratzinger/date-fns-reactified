import { differenceInSeconds as _differenceInSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInSeconds = reactify(_differenceInSeconds);