import { previousTuesday as _previousTuesday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousTuesday = reactify(_previousTuesday);