import { previousSunday as _previousSunday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousSunday = reactify(_previousSunday);