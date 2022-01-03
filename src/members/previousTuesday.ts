import { previousTuesday as _previousTuesday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousTuesday = reactify(_previousTuesday);