import { nextWednesday as _nextWednesday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextWednesday = reactify(_nextWednesday);