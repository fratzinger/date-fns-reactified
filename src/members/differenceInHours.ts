import { differenceInHours as _differenceInHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInHours = reactify(_differenceInHours);