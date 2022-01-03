import { isWednesday as _isWednesday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isWednesday = reactify(_isWednesday);