import { nextWednesday as _nextWednesday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextWednesday = reactify(_nextWednesday);