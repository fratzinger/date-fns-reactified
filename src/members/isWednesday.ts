import { isWednesday as _isWednesday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isWednesday = reactify(_isWednesday);