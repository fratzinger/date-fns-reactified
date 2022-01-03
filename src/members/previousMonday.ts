import { previousMonday as _previousMonday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousMonday = reactify(_previousMonday);