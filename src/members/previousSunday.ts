import { previousSunday as _previousSunday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousSunday = reactify(_previousSunday);