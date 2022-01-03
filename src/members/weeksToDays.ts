import { weeksToDays as _weeksToDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const weeksToDays = reactify(_weeksToDays);