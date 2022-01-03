import { differenceInHours as _differenceInHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInHours = reactify(_differenceInHours);