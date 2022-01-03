import { nextTuesday as _nextTuesday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextTuesday = reactify(_nextTuesday);