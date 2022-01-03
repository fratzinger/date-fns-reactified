import { weeksToDays as _weeksToDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const weeksToDays = reactify(_weeksToDays);