import { previousMonday as _previousMonday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousMonday = reactify(_previousMonday);