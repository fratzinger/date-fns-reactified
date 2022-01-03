import { differenceInSeconds as _differenceInSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInSeconds = reactify(_differenceInSeconds);