import { previousWednesday as _previousWednesday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousWednesday = reactify(_previousWednesday);